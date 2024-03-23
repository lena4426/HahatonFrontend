import axios from 'axios';
let baseURL = "http://83.222.8.190:8080/"

export async function RegisterRequest(username, email, password) {
    let request_data = {
        username: username,
        password: password,
        email: email
    }
    axios.post(baseURL + "Authorization/register", request_data).then(
        (res) => {
            saveAccessToken(res.data["accessToken"]);
        }
    ).catch(
        (res) => {
            console.log(res);
        }
    )

}

export async function LoginRequest(username, password) {
    let request_data = {
        login: username,
        password: password
    }

    axios.post(baseURL + "Authorization/login", request_data).then(
        (res) => {
            saveAccessToken(res.data["accessToken"]);
        }
    ).catch(
        (res) => {
            console.log(res);
        }
    )
}

async function saveAccessToken(accessToken) {
    axios.defaults.headers.common = {'Authorization': `bearer ${accessToken}`};
}