import axios from 'axios';

const exp = {}

const baseUrl = process.env.REACT_APP_API_MFC;
let response;

exp.getPostsId = async (id)  => {
    console.log("Services: Get");
    await axios.get(baseUrl + '/postsId?id=' + id)
    .then( res => {
        response = res.data;
    })
    return response;
}

exp.getPosts = async (user_id, privacy)  => {
    console.log("Services: Get");
    await axios.get(baseUrl + '/posts?user_id=' + user_id + '&privacy=' + privacy)
    .then( res => {
        response = res.data;
    })
    return response;
}

exp.insertPosts = async (user_id, message, privacy)  => {
    console.log("Services: insert");
    await axios.post(baseUrl + '/posts',
        {user_id: user_id, message: message, privacy: privacy})
    .then( res => {
        response = res.data;
    })
    return response;
}

exp.updatePosts = async (id, message)  => {
    console.log("Services: update");
    await axios.put(baseUrl + '/posts',
        {id: id, message: message})
    .then( res => {
        response = res.data;
    })
    return response;
}

exp.deletePosts = async (id)  => {
    console.log("Services: Delete");
    await axios.delete(baseUrl + '/posts',
        { data: { id: id }, headers: { "Authorization": "***" }})
        // {id: id})
    .then( res => {
        response = res.data;
    })
    return response;
}

export default exp;