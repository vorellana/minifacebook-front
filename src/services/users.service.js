import axios from 'axios';

const exp = {}

//const baseUrl = 'http://localhost:3000/api'; // test
const baseUrl = 'http://192.168.1.2:3000/api'; // test
// const baseUrl = 'https://minifacebook-21.herokuapp.com/api' // prod

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