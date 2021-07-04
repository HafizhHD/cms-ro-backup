import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';

const Columns = [
    {
        Header: 'No',
        accessor: 'id'
    },
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Location',
        accessor: 'location'
    },
    {
        Header: 'Geo Tag',
        Cell: ({row}) => {
            return row.original.lat + ' '+row.original.lon;
        }
    },
    {
        Header: 'Created At',
        accessor: 'created_at'
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
];

export default Columns;