import axios from 'axios';

const exp = {}
    
// const baseUrl = 'http://localhost:3000/api'; // test
const baseUrl = 'https://minifacebook-21.herokuapp.com/api' // prod

exp.getPosts = async ()  => {

    let response;

    console.log("Entrando al services....");
    await axios.get(baseUrl + '/posts')
    .then( res => {
        response = res.data;
    })

    return response;
}

exp.insertPosts = async (user_id, message, privacy)  => {

    let response;

    console.log("Entrando al services....");
    await axios.post(baseUrl + '/posts',
        {user_id: user_id, message: message, privacy: privacy})
    .then( res => {
        response = res.data;
    })

    return response;
}

export default exp;