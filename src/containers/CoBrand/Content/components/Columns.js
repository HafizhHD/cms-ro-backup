export default [
    // {
    //     Header: 'ID',
    //     accessor: 'id'
    // },
    {
        Header: 'Category',
        accessor: 'category'
    },
    {
        Header: 'Title',
        accessor: 'title'
    },
    {
        Header: 'Created Date',
        accessor: 'created_date'
    },
    // {
    //     Header: 'Attachment',
    //     accessor: 'attachment'
    // },
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Action',
        Cell: ({value}) => (
            <>
            <button onClick={() => console.log(value)}>Detail</button>
            <button>Edit</button>
            <button>Delete</button>
            </>
        )
    }
]