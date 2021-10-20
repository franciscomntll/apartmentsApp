
import { useMemo } from 'react'
import { useRowSelect, useSortBy, useTable } from 'react-table'
import ActionsComponent from './ActionsComponent'
import ActiveComponent from './ActiveComponent'
import { IndeterminateCheckbox } from './CheckBox'
 
const DataTable = () => {
   const data = useMemo(
     () => [
       {
         col1: 'Hello',
         col2: 'World',
         precio : "10",
         cantidad : 2,
         activo: true
       },
       {
         col1: 'react-table',
         col2: 'rocks',
         activo : false
       },
       {
         col1: 'whatever',
         col2: 'you want',
         activo : false
       },
     ],
     []
   )
 
   const columns = useMemo(
     () => [
       {
         Header: 'Nombre',
         accessor: 'col1', // accessor is the "key" in the data
       },
       {
         Header: 'Categoria',
         accessor: 'col2',
       },
       {
        Header: 'Precio',
        accessor: 'precio',
      },
      {
        Header: 'Cantidad',
        accessor: 'cantidad',
      },
      {
          Header: 'Activo',
          accessor: 'activo',
          Cell : (props) => <ActiveComponent {...props} />
        },
        {
          Header: 'Acciones',
          accessor: '',
          Cell : (props) => <ActionsComponent {...props} />
        },
     ],
     []
   )
 
   const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
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
    }
  )
 
   return (
    <>
    <table {...getTableProps()} className="w-full text-sm">
      <thead className="w-full ">
        {headerGroups.map(headerGroup => (
          <tr className="border-b py-3 grid grid-cols-7 " {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} className="">{column.render('Header')}
              
              <span className="text-xs">
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ▼'
                        : ' ▲'
                      : ''}
                  </span>
                  
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="w-full">
        {rows.slice(0, 10).map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} className="border-b py-3 grid grid-cols-7 gap-18 place-items-center hover:bg-gray-100 transition">
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
   
  </>
   )
 }
 export default DataTable