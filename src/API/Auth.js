import axios from 'axios';
axios.defaults.baseURL = 'http://83.222.8.190:8080/Authorization/register'

async function RegisterRequest(username, email, password) {
    let request_data = {
        username: username,
        password: password,
        email: email
    }
    let res = await axios.post("http://83.222.8.190:8080/Authorization/register", request_data);
    console.log(res);
}

export default RegisterRequest;