import { letterSpacing } from '@mui/system';
import axios from 'axios';
import React from 'react'
import {
    Button
} from 'react-bootstrap'
import InputComponent from '../../../components/UI/Input/Input';

import './uploadPembayaran.scss'
import contoh from './contoh.png'



class UploadPembayaran extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uP: false,

        }
    }

    // componentDidMount() {
        
    // }
    onChange=(e)=>{
        let files = e.target.files;
        // console.log(files);
    }
    submit = (e) => {
        let file = e.target.files
        console.log(typeof file)
        let params = {
            dataUser : file, 
            cobrandId : 'com.roi.ruangortu.id'

        }
           
        axios({
           
                method: 'post',
                url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/uploadUserBatchPayment',
                data: params,
            })
            .then(response => {
                // console.log(response.data.resultData);
                console.log(response.data);
                // this.setState({ uP: true })
                alert('upload berhasil')
            })
            .catch(error => {
                // console.log(error ;
            });
    }

    render() {
        return ( 
            <>
           <h1> Upload Bukti Pembayaran</h1>
        <div className = 'div' >
        <div className='AddContent'>
        <p> Petunjuk File yang di Upload :<br/>
        1.  File Yang diupload adalah file excel/CSV<br></br>
        2. File excel/ CSV berisikan : email anak, Package  Id, Price, Date Start, Date End, Batch Number<br></br>
        3. Seperti contoh dibawah ini :</p>
        <img src={contoh} alt='contoh' />
        <h2>Upload File Anda Disini :</h2>
            <input type='file' name='file' onChange={(e)=>this.onChange(e)} />
        <Button className = 'btn-submit' onClick = {this.submit} > Submit </Button>
        
        </div>

        </div>
        </>
        )
    }
}

export default UploadPembayaran