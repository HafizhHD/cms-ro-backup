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
        label: 'Nama Konten',
        name: 'contentName',
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        label: 'Jenis Konten',
        name: 'contentType',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        label: 'Kategori Konten',
        name: 'contentPurpose',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        label: 'Target Pembaca',
        name:'contentTarget',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        label: 'Status',
        name: 'status',
        options: {
            filter: true,
            sort: true,
        }
    }
];

export default Columns;