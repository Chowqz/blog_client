import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: '/myblog',
    method: 'post',
    timeout: 30000
});

const apiRequest = (path, params = {}) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post(path, params).then(respone => {
            let res = respone.data;
            if(res._errCode === '0') {
                resolve(res._data);
            }
            else {
                reject(res._errMsg);
            }
        }).catch(err => {
            reject(err);
        })
    })
}

export default apiRequest