import './Menu.css'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import service from './../../services/posts.service'
import userService from './../../services/users.service'
import Tweet from './../tweet/Tweet'
import Cookies from 'universal-cookie';

function Menu(){

    // ***** other consts ******
    const cookies = new Cookies();

    // ***** set state *****
    const [posts, setPosts] = useState([]);
    // const [user_id, setUser_id ] = useState("6026086502d02327f4d55a7a"); // prueba
    const [user_id, setUser_id ] = useState(cookies.get('user_id')); // prueba
    const [post_id, setPost_id ] = useState("");
    const [message, setMessage ] = useState("");
    const [privacy, setPrivacy ] = useState("F");
    const [filterPosts, setFilterPosts ] = useState("A");
    const [messageModal, setMessageModal ] = useState("");
    const [openSimpleModal, setOpenSimpleModal ] = useState(false);
    const [openDeleteModal, setOpenDeleteModal ] = useState(false);
    const [userName, setUserName ] = useState(cookies.get('name'));

    // ***** handles *****
    const handleOpenModal = async (messageModalTemp, timeout) => {
        setMessageModal(messageModalTemp);
        setOpenSimpleModal(true);
        setTimeout(function(){setOpenSimpleModal(false);}, timeout)
    }

    const handleOpenDeleteModal = async (id) => {
        setMessageModal("¿Dese eliminar el Post?");
        setPost_id(id);
        setOpenDeleteModal(true);
    }

    // ***** call services *****
    const getPosts = async () => {
        setPosts([]);
        let res;
        res = await service.getPosts(user_id, filterPosts);
        setPosts(res);
        console.log(res);
    }

    const insertPosts = async () => {
        if (message.trim() === ""){
            handleOpenModal("No se puede guardar un mensaje vacio.", 2500);
        }else{
            // let res = await service.insertPosts('6026086502d02327f4d55a7a', message, privacy);
            let res = await service.insertPosts(user_id, message, privacy);
            handleOpenModal("Guardado", 1500);
            setMessage("");
            getPosts(); // reload data
        }
    }

    const updatePosts = async (id, message) => {
        let res = await service.updatePosts(id, message);
        handleOpenModal("Guardado", 1500);
        getPosts();
    }

    const deletePosts = async () => {
        setOpenDeleteModal(false);
        let res = await service.deletePosts(post_id);
        handleOpenModal("Eliminado", 1500);
        getPosts();
    }

    const logout = async () => {
        cookies.remove('isAuthenticated', {path: "/"});
        cookies.remove('name', {path: "/"});
        cookies.remove('email', {path: "/"});
        cookies.remove('last_name', {path: "/"});
        window.location.href=".";
        let res = await userService.logoutUsers();
    }

    // *****  Hooks *****
    useEffect(async () => {
        await getPosts();
    },[filterPosts]);

    // good
    // useEffect(async () => {
    //     await getPosts();
    // },[]);

    return (
        <React.Fragment>
        <div>
            <div class="row">
                <div class="col">
                    <div class="float-right">
                        <DropdownButton id="dropdown-basic-button" title={userName} className="session-button">
                            <Dropdown.Item href="#/action-1" onClick = {() => logout()} >Cerrar sesión</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </div>            
            <div class="d-flex justify-content-center">
                <div className="title-mnf">MiniFacebook</div>
            </div>            
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 mx-auto">
                        <div class="card card-signin my-5">
                            <div class="card-body">

                                <div class="form-group">
                                    {/* <button onClick={ prueba }>Prueba</button> */}
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
                                        placeholder="¿Qúe esta pasando?" style={{marginBottom:6}} 
                                        value={message} onChange={e => setMessage(e.target.value)}>
                                    </textarea>
                                
                                    <Button className="float-right" size="sm" onClick={insertPosts} >Publicar</Button>
                                    <Form.Control as="select" value = {privacy} onChange={e => setPrivacy(e.target.value)}
                                        className="float-right custom-mfc-select" size="sm">
                                        <option value="F">Amigos</option>
                                        <option value="P">Público</option>
                                    </Form.Control>
                                    
                                </div>

                                <div class="form-group">
                                    <label></label>
                                    <hr style={{marginBottom:0}}></hr>
                                </div>

                                <div class="form-group">
                                    <label>Filtrar por: </label>
                                    <select value = {filterPosts} onChange= {e => setFilterPosts(e.target.value)} class="form-control">
                                        <option value="A">Todos</option>
                                        <option value="F">Amigos</option>
                                        <option value="P">Publico</option>
                                    </select>
                                </div>

                                <ul class="list-group" style={{marginTop: 20}}>
                                    {
                                        posts.map(item => {
                                            let swDisa = true;
                                            return(
                                                <Tweet
                                                    id = {item._id}
                                                    message = {item.message}
                                                    handleOpenDeleteModal = {handleOpenDeleteModal}
                                                    updatePosts = {updatePosts}
                                                ></Tweet>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={openSimpleModal} onHide={ () => setOpenSimpleModal(false) }>
                <Modal.Header closeButton><Modal.Title>Información</Modal.Title></Modal.Header>
                <Modal.Body><p>{messageModal}</p></Modal.Body>
            </Modal>
 
            <Modal show={openDeleteModal} onHide={ () => setOpenDeleteModal(false)}>
                <Modal.Header closeButton><Modal.Title>Alerta</Modal.Title></Modal.Header>
                <Modal.Body><p>{messageModal}</p></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={deletePosts}>Si</Button>
                    <Button variant="primary" onClick={ () => setOpenDeleteModal(false)}>No</Button>
                </Modal.Footer>
            </Modal>

        </div>
    </React.Fragment>
    )
}

export default Menu;