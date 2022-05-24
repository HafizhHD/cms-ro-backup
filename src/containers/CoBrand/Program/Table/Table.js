import React, { useMemo, Fragment } from 'react';
import { useTable, useSortBy, useExpanded, usePagination, useGlobalFilter } from 'react-table';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import './Table.scss';

function Table({ DATA, COLUMNS, renderRowSubComponent }) {

    const data = useMemo(() => DATA, [DATA])

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
        state: { pageIndex, pageSize, expanded },
        state,
        setGlobalFilter
    } = useTable({
        columns: COLUMNS,
        data: data
    }, useGlobalFilter
        , useSortBy
        , useExpanded
        , usePagination)

    const { globalFilter } = state;

    return (
        <>
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
                    <div className="page">
                        <span>
                            Page {' '}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>
                        </span>
                    </div>
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
                        value={globalFilter || ''}
                        onChange={(e) => {
                            setGlobalFilter(e.currentTarget.value);
                        }}
                    />
                </div>
            </div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? (<BiCaretDown />)
                                                : (<BiCaretUp />)
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className='isiTable'>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <Fragment {...row.getRowProps()}>
                                <tr>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                                    })}
                                </tr>
                                {row.isExpanded ? (
                                    <tr>
                                        <td colSpan={visibleColumns.length} >
                                            {/*
                                         Inside it, call our renderRowSubComponent function. In reality,
                                            you could pass whatever you want as props to
                                            a component like this, including the entire
                                            table instance. But for this example, we'll just
                                            pass the row
                                            */}
                                            {/*  where is something what */}
                                            {renderRowSubComponent({ row })}
                                        </td>
                                    </tr>
                                ) : null}
                            </Fragment>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table
