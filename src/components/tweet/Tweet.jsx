import Button from 'react-bootstrap/Button';

import React, { useEffect, useState } from 'react'

function Tweet({id, message, handleOpenDeleteModal, updatePosts}){
    const[dis, setDis] = useState(true)
    const[labelAction, setLabelAction] = useState("Editar");

    const editSave = async (id, message) => {
        setDis(!dis);
        if (dis) {
            setLabelAction("Guardar");
        } else {
            setLabelAction("Editar");
            updatePosts(id, message);
        }
    }
    
    return(

        <li class="list-group-item">
            <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" 
                rows="3" onChange={event => message = event.target.value}
                disabled = {dis}
                >
                    {message}
                </textarea>
            </div>
            {/* <Button className="" size="sm" onClick = {() => updatePosts(item._id, item.message, item.privacy) } >Editar</Button> */}
            {/* <Button className="" size="sm" onClick = {()=> setDis(false)} >Editar</Button> */}
            {/* <Button className="" size="sm" onClick = {()=> updatePosts(id, message)} >Editar</Button> */}
            <Button className="" size="sm" onClick = { ()=> editSave(id, message) } >{labelAction}</Button>
            <span class="tab-space"> </span>
            {/* <Button className="" size="sm" onClick = {() => deletePosts(id) }>Eliminar</Button> */}
            <Button className="" size="sm" onClick = { () => handleOpenDeleteModal(id) }>Eliminar</Button>
        </li>

    )
}

export default Tweet;