import React, { useMemo } from 'react';
import { useGlobalFilter, useSortBy, useTable } from 'react-table';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import './Table.scss';

function Table({ DATA, COLUMNS }) {

    const data = useMemo( () => DATA , [DATA])
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({
        columns: COLUMNS,
        data: data
    }
    , useGlobalFilter
    , useSortBy)

    const { globalFilter } = state;

    return (
        <>
        <input 
            type="text" 
            placeholder="Search"
            value={ globalFilter || '' }
            onChange={(e) => {
                setGlobalFilter(e.currentTarget.value);
            }}
        />
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
                                        ? (<BiCaretDown/>)
                                        : (<BiCaretUp/>)
                                    : ''}
                                </span>
                           </th>
                       ))}
                   </tr>
               ))}
           </thead>
           <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                            })}
                        </tr>
                    )
                })}
           </tbody>
       </table>
       </>
    )
}

export default Table
