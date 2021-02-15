import './Menu.css'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactDOM from 'react-dom';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import axios from 'axios';

import service from './../../services/posts.service'

const volar = ()  => {
    console.log("volando me voy...")
}

// var posts;

function Menu(){
    const [posts, setPosts] = useState([]);
    // const [count, setCount] = useState(0);
    const [user_id,setUser_id ] = useState("");
    const [message,setMessage ] = useState("");
    const [privacy,setPrivacy ] = useState("");

    const [count,setCount ] = useState(0);

    // const publish = ()  => {
    //     // setPosts(null);
    //     console.log("por siempre");
    
    //     axios.get(`http://localhost:3000/api/posts`)
    //     .then( res => {
    //         console.log(res);
    //         setCount(count + 1)
    //         setPosts(res.data);
    //     })
    //     .catch( error => {
    //         console.log(error);
    //     })        
    // }

    const getPosts = async () => {
        setPosts([]);
        let res;
        res = await service.getPosts();
        // debugger
        // await setPosts(res);// tal vez hay otra manera de sobreesscribir la variable posts
        // setPosts([]);
        setPosts(res);
        // setPosts(... res);
        // setPosts({res});
        // setPosts([...res, posts]);
    }

    const prueba = async () => {
        //setCount(count + 1);
    }

    const insertPosts = async () => {
        
        // setUser_id("7a89f") ;
        // setPrivacy("P");
        // user_id = "7a89f";
        // privacy = "P"
        let res;
        //debugger
        // res = await service.insertPosts(user_id, message, privacy)
        res = await service.insertPosts('6026086502d02327f4d55a7a', message, 'P');
        // setPosts(posts.concat(res));
        //setPosts(posts.concat(res))
        getPosts(); // reload data
        //count
        //setCount(count + 1);
    }

    // bueno
    useEffect(async () => {
        // await publish();
        // let res;
        // res = await foo.getPosts();
        // setPosts(res);
        // debugger;
        await getPosts();
    },[]);


    // useEffect(async () => {
    //     // await publish();
    //     // let res;
    //     // res = await foo.getPosts();
    //     // setPosts(res);
    //     debugger;
    //     await getPosts();
    // },[count]);

    // ni bien se inicia se está recargando por eso poer el useeffect con contador
    // revisar de frente como usar useEffect. nada mas y lo ponemos

    // if (count === 0){
    //     debugger;
    //     publish();
    // }

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );

    return (
        <React.Fragment>
        <div>
            <div class="row">
                <div class="col">
                    <div class="float-right">
                        {/* <Button>Victor2</Button> */}
                        <DropdownButton id="dropdown-basic-button" title="Victor" className="session-button">
                            <Dropdown.Item href="#/action-1">Cerrar sesión</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </div>            

            {/* <label> Mi Menu</label> */}


            <div class="d-flex justify-content-center">
                <div className="title-mnf">MiniFacebook</div>
            </div>            

            <div class="container">
                
                <div class="row">

                    <div class="col-sm-9 col-md-7 mx-auto">
                        <div class="card card-signin my-5">
                            <div class="card-body">
        
                                {/* <h5 class="card-title text-center">Sign In</h5> */}

                                <div class="form-group">
                                    <button onClick={getPosts}>Prueba</button>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
                                        placeholder="¿Qúe esta pasando?" style={{marginBottom:6}} 
                                        value={message} onChange={e => setMessage(e.target.value)}>
                                    </textarea>
                                
                                    <Button className="float-right" size="sm" onClick={insertPosts} >Publicar</Button>
                                    <Form.Control as="select" className="float-right custom-mfc-select" size="sm">
                                        <option>Amigos</option>
                                        <option>Público</option>
                                    </Form.Control>
                                    
                                </div>

                                <div class="form-group">
                                    <label></label>
                                    <hr style={{marginBottom:0}}></hr>
                                </div>

                                <div class="form-group" style={{marginTop:0}}>
                                
                                    <div class="form-inline" style={{marginBottom:20}}>
                                        <div class="form-group">
                                
                                            <label class="form-check mr-sm-2">Filtrar por </label>
                                            <select class="form-control form-control-sm" id="exampleFormControlSelect1">
                                                <option>Todos</option>
                                                <option>Amigos</option>
                                                <option>Publico</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>

                                <ul class="list-group">

                                    {/* <li>
                                        <div>
                                            <label>primero</label>
                                        </div>
                                    </li> */}


                                    {/* {
                                        (list.length === 0) ?
                                            <div></div>
                                        :
                                            list.map(item => {
                                                return(
                                                    <li>
                                                        <div>
                                                            <label>{item.firstname}</label>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                    } */}

                                    {/* {
                                        (posts===null) ?
                                            <div></div>
                                        :
                                            posts.map(item => {
                                                return(
                                                    <li>
                                                        <div>
                                                            <label>{item.message}</label>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                    } */}


{/* ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
); */}

                                    {/* {
                                        (posts===null) ?
                                            <div></div>
                                        :
                                            posts.map(item => {
                                                return(
                                                    <li class="list-group-item">
                                                    <div class="form-group">
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">
                                                            {item.message}
                                                        </textarea>
                                                    </div>
                                                    <Button className="" size="sm" >Editar</Button>
                                                    <span class="tab-space"> </span>
                                                    <Button className="" size="sm" >Eliminar</Button>
                                                </li>
                                                )
                                            })
                                    } */}


                                    {
                                            posts.map(item => {
                                                return(
                                                    <li class="list-group-item">
                                                    <div class="form-group">
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">
                                                            {item.message}
                                                        </textarea>
                                                    </div>
                                                    <Button className="" size="sm" >Editar</Button>
                                                    <span class="tab-space"> </span>
                                                    <Button className="" size="sm" >Eliminar</Button>
                                                </li>
                                                )
                                            })
                                    }



                                    
{/* 
                                    {posts.map(item => {
                                        return(
                                            <li>
                                                <div>
                                                    <label>{item.message}</label>
                                                </div>
                                            </li>
                                        )
                                    })}                                         
*/}


                                    {/* <li class="list-group-item">
                                        <div class="form-group">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <Button className="" size="sm" >Editar</Button>
                                        <span class="tab-space"> </span>
                                        <Button className="" size="sm" >Eliminar</Button>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="form-group">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <Button className="" size="sm" >Editar</Button>
                                        <span class="tab-space"> </span>
                                        <Button className="" size="sm" >Eliminar</Button>
                                    </li>

                                    <li class="list-group-item">
                                        <div class="form-group">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <Button className="" size="sm" >Editar</Button>
                                        <span class="tab-space"> </span>
                                        <Button className="" size="sm" >Eliminar</Button>
                                    </li>

                                    <li class="list-group-item">
                                        <div class="form-group">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <Button className="" size="sm" >Editar</Button>
                                        <span class="tab-space"> </span>
                                        <Button className="" size="sm" >Eliminar</Button>
                                    </li>

                                    <li class="list-group-item">
                                        <div class="form-group">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <Button className="" size="sm" >Editar</Button>
                                        <span class="tab-space"> </span>
                                        <Button className="" size="sm" >Eliminar</Button>
                                    </li>

                                    <li class="list-group-item">
                                        <div class="form-group">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <Button className="" size="sm" >Editar</Button>
                                        <span class="tab-space"> </span>
                                        <Button className="" size="sm" >Eliminar</Button>
                                    </li>

                                    <li class="list-group-item">
                                        <div class="form-group">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <Button className="" size="sm" >Editar</Button>
                                        <span class="tab-space"> </span>
                                        <Button className="" size="sm" >Eliminar</Button>
                                    </li>                                    

                                    <li class="list-group-item">
                                        <div class="form-group">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <Button className="" size="sm" >Editar</Button>
                                        <span class="tab-space"> </span>
                                        <Button className="" size="sm" >Eliminar</Button>
                                    </li>                                     */}


                                </ul>
            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </React.Fragment>

    )

}

export default Menu;