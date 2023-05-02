import url from './urlApi';
import axios from "axios";

const baseApi = (token, data, path) => axios({
    method: 'post',
    url: url + path,
    data: data,
    // withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        // 'Origin': 'https://cms.digitalkeluarga.ruangortu.id',
        'x-packageid': 'com.lindungianak.ruangortu',
        'x-token': token,
    },
});

export default baseApi;