import axios from 'axios';

const exp = {}
const baseUrl = process.env.REACT_APP_API_MFC;

let response;
exp.loginUsers = async (email, password)  => {
    console.log("Services: insert");
    await axios.post(baseUrl + '/users/login',
        {email: email, password: password})
    .then( res => {
        response = res.data;
    })
    return response;
}

exp.logoutUsers = async ()  => {
    console.log("Services: logout");
    await axios.post(baseUrl + '/users/logout')
    .then( res => {
        response = res.data;
    })
    return response;
}

export default exp;