import axios from 'axios';

function methodGet(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
                .then(response => {
                resolve(response.data);
                })
                .catch((error) => {
                reject(error)
                })
    })
}

const LOGIN = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx6908bcb9e3bbf20b&secret=4ea4fb5dcb482e8a2221580f6db12ee6';

export default { 
    w_login() {
        return methodGet(LOGIN);
    },
}