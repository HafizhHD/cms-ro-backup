import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { Redirect } from 'react-router-dom';

const Columns = [
    {
        Header: 'No',
        accessor: 'cobrandEmail'
    },
    {
        Header: 'Name',
        accessor: 'placeName'
    },
    {
        Header: 'Location',
        accessor: 'location'
    },
    {
        Header: 'Status',
        accessor: 'redZoneStatus'
        // Cell: ({row}) => {
        //     return row.original.lat + ' '+row.original.lon;
        // }
    },
    {
        Header: 'Adress',
        accessor: 'address'
    },
    // {
    //     Header: 'Action',
    //     Cell: (row) => (
    //         <>
    //             {/* <button 
    //                 className="btn_action"
    //                 onClick={() => console.log(row)}>
    //                 <div>
    //                     <FiEye className="btn_action-icon" />
    //                 </div>
    //             </button> */}
    //             <button
    //                 className="btn_action"
    //             >
    //                 <div>
    //                     <FiEdit2 className="btn_action-icon"  />
    //                 </div>
    //             </button>
    //             <button
    //                 className="btn_action"
    //             >
    //                 <div>
    //                     <FiTrash2 className="btn_action-icon" />
    //                 </div>
    //             </button>
    //         </>
    //     )
    // }
];

export default Columns;