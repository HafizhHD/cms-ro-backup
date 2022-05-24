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
            }
        }
    },
    {
        label: 'Nama Program',
        name: 'programName',
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        label: 'Kategori Program',
        name: 'programCategory',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        label: 'Target Pembaca',
        name:'programTarget',
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