import React, { useMemo, useEffect, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useTable, useSortBy, useExpanded, usePagination, useGlobalFilter, useFilters, useRowSelect } from 'react-table';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import './Table.scss';
import { DefaultColumnFilter, fuzzyTextFilterFn } from './TableFilter'
import { CSVLink, CSVDownload } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

import { FaFilePdf, FaTable, FaBell } from "react-icons/fa";

function TableWithFilter({ DATA, COLUMNS, renderRowSubComponent, showCheckbox = false, notifContext = '' }) {
    const filterTypes = React.useMemo(
        () => ({
          // Add a new fuzzyTextFilterFn filter type.
          fuzzyText: fuzzyTextFilterFn,
          // Or, override the default text filter to use
          // "startWith"
          text: (rows, id, filterValue) => {
            return rows.filter(row => {
              const rowValue = row.values[id]
              return rowValue !== undefined
                ? String(rowValue)
                    .toLowerCase()
                    .startsWith(String(filterValue).toLowerCase())
                : true
            })
          },
        }),
        []
      )
    
      const defaultColumn = React.useMemo(
        () => ({
          // Let's set up our default Filter UI
          Filter: DefaultColumnFilter,
        }),
        []
      )

      const IndeterminateCheckbox = React.forwardRef(
        ({ indeterminate, ...rest }, ref) => {
          const defaultRef = React.useRef()
          const resolvedRef = ref || defaultRef
      
          React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
          }, [resolvedRef, indeterminate])
      
          return (
            <>
              <input type="checkbox" ref={resolvedRef} {...rest} />
            </>
          )
        }
      )

    const data = useMemo( () => DATA , [DATA])
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        rows,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        visibleColumns,
        selectedFlatRows,
        state: { selectedRowIds },
        state: {pageIndex, pageSize, expanded},
        state,
        setGlobalFilter
    } = useTable({
        columns: COLUMNS,
        data: data,
        defaultColumn, // Be sure to pass the defaultColumn option
        filterTypes,
    }, useFilters
    , useGlobalFilter
    , useSortBy
    , useExpanded
    , usePagination
    , useRowSelect
    , hooks => {
        if(showCheckbox) hooks.visibleColumns.push(columns => [
          // Let's make a column for selection
          {
            id: 'selection',
            // The header can use the table's getToggleAllRowsSelectedProps method
            // to render a checkbox
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ])
      })

    const { globalFilter } = state;

    const downloadAsCSV = () => {
        const currentRecords = rows;
        console.log(currentRecords);
        var data_to_download = [];
        for (var i = 0; i < currentRecords.length; i++) {
            let record_to_download = {};
            prepareRow(currentRecords[i]);
            console.log(currentRecords[i].cells);
            for (var colIndex = 0; colIndex < currentRecords[i].cells.length; colIndex++) {
                if(currentRecords[i].cells[colIndex].column.id !== 'rowNumber' &&
                currentRecords[i].cells[colIndex].column.id !== 'selection' &&
                currentRecords[i].cells[colIndex].column.id !== 'buttonStatus') {
                    record_to_download[currentRecords[i].cells[colIndex].column.Header] =
                    currentRecords[i].cells[colIndex].value;
                }
            }
            data_to_download.push(record_to_download);
        }
        return data_to_download;
    }

    const downloadAsPDF = () => {
        const dataRaw = downloadAsCSV();
        if(dataRaw.length > 0) {
            const unit = "pt";
            const size = "A4"; // Use A1, A2, A3 or A4
            const orientation = "landscape"; // portrait or landscape

            const marginLeft = 40;
            const doc = new jsPDF(orientation, unit, size);

            doc.setFontSize(15);

            const title = "Report";
            const headers = [Object.keys(dataRaw[0])];

            const data = dataRaw.map(e => Object.values(e));

            let content = {
                startY: 50,
                head: headers,
                body: data
            };

            doc.text(title, marginLeft, 40);
            doc.autoTable(content);
            doc.save("report.pdf");
        }
    }

    return (
        <>
        <div className="tools">
            <button className="btn_tools"><FaTable/> <CSVLink data={downloadAsCSV()}>Download as CSV</CSVLink></button>
            <button className="btn_tools" onClick={downloadAsPDF}><FaFilePdf/> Download as PDF</button>
            {selectedFlatRows.length > 0 ? (<button className="btn_tools"><FaBell/><NavLink to='/cms/messaging-add' className="btn_tools" onClick={() => {
                    localStorage.setItem('notifContext', notifContext);
                    console.log(localStorage.getItem('notifContext'));
                    var stringEmail = '';
                    for(var i = 0; i < selectedFlatRows.length; i++) {
                        stringEmail += selectedFlatRows[i].original.emailUser;
                        if(i < selectedFlatRows.length - 1) stringEmail += ', ';
                        console.log(stringEmail);
                    }
                    localStorage.setItem('emailTo', stringEmail);
                    console.log(localStorage.getItem('emailTo'));
                }}>Send Notifications</NavLink></button>
             ) : null}
        </div>
        <div className="utils">
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
                </button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
                </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
                </button>
                <span>
                Page {' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>
                </span>
                <span>
                | Go to page:
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                    />
                </span>
                <select
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                }}
                >
                {[10, 15, 20].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
                </select>
            </div>
            <div className="table_props">
                <span>Total: {rows.length} Data</span>
                <input
                    type="text"
                    className="table_props_input"
                    placeholder="Search"
                    value={ globalFilter || '' }
                    onChange={(e) => {
                        setGlobalFilter(e.currentTarget.value);
                    }}
                />
            </div>
        </div>
        <div className="table_container">
       <table {...getTableProps()}>
           <thead>
               {headerGroups.map(headerGroup => (
                   <>
                   <tr {...headerGroup.getHeaderGroupProps()}>
                       {headerGroup.headers.map(column => (
                           <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                               {column.render('Header')}
                                <span>
                                    {column.isSorted
                                    ? column.isSortedDesc
                                        ? (<BiCaretDown/>)
                                        : (<BiCaretUp/>)
                                    : ''}
                                </span>
                            </th>
                       ))}
                   </tr>
                   <tr>
                        {headerGroup.headers.map(column => (
                            <th>{column.canFilter ? column.render('Filter') : null}</th>
                        ))}
                   </tr>
                   </>
               ))}
           </thead>
           <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <Fragment {...row.getRowProps()}>
                            <tr>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}> {cell.column.id === 'rowNumber' ? i + 1 + (pageIndex * pageSize) : cell.render('Cell')} </td>
                                })}
                            </tr>
                            {row.isExpanded ? (
                                <tr>
                                    <td colSpan={visibleColumns.length}>
                                        {/*
                                            Inside it, call our renderRowSubComponent function. In reality,
                                            you could pass whatever you want as props to
                                            a component like this, including the entire
                                            table instance. But for this example, we'll just
                                            pass the row
                                            */}
                                        {renderRowSubComponent({ row })}
                                    </td>
                                </tr>
                            ) : null}
                        </Fragment>
                    )
                })}
           </tbody>
       </table>
       </div>
       </>
    )
}

export default TableWithFilter
