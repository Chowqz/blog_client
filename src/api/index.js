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

export function uploadFile(path, files, params) {
    let uploadData = new FormData();
    Object.values(files).map(item => {
        uploadData.append('file', item);
    })
    uploadData.append('params', JSON.stringify(params));

    let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
    };
    return new Promise((resolve, reject) => {
        axiosInstance.post(path, uploadData, config).then(respone => {
            let res = respone.data;
            if(res._errCode === '3001') {
                reject(res._errMsg);
                window.replace('/login')
                return;
            }
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

