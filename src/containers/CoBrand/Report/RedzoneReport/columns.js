//import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'


const Columns = [
    {
        name: 'No.',
        options: {
            filter: false,
            customBodyRender: (value, meta) => {
                return (
                    meta.rowIndex + 1
                );
            },
            setCellProps: () => ({ style: { minWidth: "10px", maxWidth: "10px" }}),
            setCellHeaderProps: () => ({ style: { minWidth: "10px", maxWidth: "10px" }}),
        }
    },
    {
        label: 'Nama Tempat',
        name: 'placeName',
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        label: 'Status',
        name: 'redzoneStatus',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        label: 'Alamat',
        name:'address',
        options: {
            filter: false,
            sort: true,
        }
    }
];

export default Columns;