import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';

const Columns = [
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
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value}) => {
            
            return <p style={{ color: 'green', fontWeight: 'bold' }}>{value}</p>
        }
    },
    {
        Header: 'Action',
        Cell: (row) => (
            <>
                <button 
                    className="btn_action"
                    onClick={() => console.log(row)}>
                    <FiEye className="btn_action-icon" />
                </button>
                <button
                    className="btn_action"
                >
                    <FiEdit2 className="btn_action-icon" />
                </button>
                <button
                    className="btn_action"
                >
                    <FiTrash2 className="btn_action-icon" />
                </button>
            </>
        )
    }
]

export default Columns;