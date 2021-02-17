import './Login.css'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import service from './../../services/users.service'

import Cookies from 'universal-cookie';

// const Login = () => {
// function Login(){
function Login (){    
    // ***** set state *****
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showValidEmail, setShowValidEmail] = useState(true);
    const [msgValidEmail, setMsgValidEmail] = useState("");
    const [showValidPassword, setShowValidPassword] = useState(true);
    const [msgValidPassword, setMsgValidPassword] = useState("");
    const [messageModal, setMessageModal ] = useState("");
    const [openSimpleModal, setOpenSimpleModal ] = useState(false);
    const [openLoaderModal, setOpenLoaderModal ] = useState(false);

    const cookies = new Cookies();

    // ***** handles *****
    const handleOpenModal = async (messageModalTemp, timeout) => {
        setMessageModal(messageModalTemp);
        setOpenSimpleModal(true);
        setTimeout(function(){setOpenSimpleModal(false);}, timeout)
    }    

    const validateFormatEmail = (email) => {
        // regular expretion
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) return true;
        else return false;
    }

    const validateEmail = () => {
        if(email.trim() === ""){
            setMsgValidEmail("El E-mail es obligatorio");
            setShowValidEmail(false);
            return false;
        }
        if(!validateFormatEmail(email)) {
            setMsgValidEmail("El E-mail es inválido");
            setShowValidEmail(false);
            return false;
        }
        setShowValidEmail(true);
        return true
    }

    const validatePassword = () => {
        if(password.trim() === ""){
            setMsgValidPassword("El Password es obligatorio");
            setShowValidPassword(false);
            return false;
        }
        setShowValidPassword(true);
        return true        
    }

    const login =  async () => {
        
        let valEmail = validateEmail();
        let valPassword = validatePassword();
        if (valEmail && valPassword){
            setOpenLoaderModal(true);
            let res = await service.loginUsers(email, password);
            setOpenLoaderModal(false);
            if (res.successLogin){
                cookies.set('isAuthenticated', true, { path: '/' });
                cookies.set('name', res.name, { path: '/' });
                cookies.set('email', res.email, { path: '/' });
                cookies.set('last_name', res.last_name, { path: '/' });
                cookies.set('user_id', res.user_id, { path: '/' });
                window.location.href="./menu";
            }else{
                setEmail("");
                setPassword("");
                handleOpenModal(res.message, 3000)
            }
        }
    }

        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            
                            <div class="d-flex justify-content-center" style={{marginTop: 50}}>
                                <div className="title-mnf">MiniFacebook</div>
                            </div>

                            <div class="card card-signin my-5">
                                <div class="card-body">

                                    <h5 class="card-title text-center"><b>Iniciar sesión</b></h5>

                                    <form class="form-signin">
                                        <div class="form-group">
                                            <label>E-mail:</label>
                                            <input type="email" class="form-control" placeholder="E-mail" required autofocus
                                                value = {email} onChange = { e => setEmail(e.target.value)}/>
                                            <span className="span-mnf" hidden={showValidEmail} >{msgValidEmail}</span>
                                        </div>

                                        <div class="form-group">
                                            <label>Password</label>
                                            <input type="password" class="form-control" placeholder="Password" required
                                                value = {password} onChange = { e => setPassword(e.target.value)}/>
                                            <span className="span-mnf" hidden ={showValidPassword} >{msgValidPassword}</span>
                                        </div>

                                        <div class="form-group">
                                            <Button variant="primary" size="lg"  style={{height: 60}} block onClick={login}><h5>Login</h5></Button>    
                                        </div>                                    

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={openSimpleModal} onHide={ () => setOpenSimpleModal(false) }>
                    <Modal.Header closeButton><Modal.Title>Información</Modal.Title></Modal.Header>
                    <Modal.Body><p>{messageModal}</p></Modal.Body>
                </Modal>

                <Modal show={openLoaderModal} onHide={ () => setOpenLoaderModal(false) } className="modal-dialog-centered" >
                    <Modal.Body>
                        {/* <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div> */}

                            <div class="d-flex justify-content-center" style={{marginTop: 50}}>
                                {/* <div className="title-mnf">MiniFacebook</div> */}
                                <div class="spinner-border text-primary" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>

                            <div class="d-flex justify-content-center" style={{marginTop: 10}}>
                                <p>Verificando...</p>
                                {/* <div class="form-group">
                                        <p>Verificando...</p>
                                </div> */}
                            </div>                            

                        {/* <p>{messageModal}</p> */}
                    </Modal.Body>
                </Modal>

            </div>
        )
}

export default Login
