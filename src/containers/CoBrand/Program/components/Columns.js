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
                    <div>
                        <FiEye className="btn_action-icon" />
                    </div>
                </button>
                <button
                    className="btn_action"
                >
                    <div>
                        <FiEdit2 className="btn_action-icon" />
                    </div>
                </button>
                <button
                    className="btn_action"
                >
                    <div>
                        <FiTrash2 className="btn_action-icon" />
                    </div>
                </button>
            </>
        )
    }
]

export default Columns;