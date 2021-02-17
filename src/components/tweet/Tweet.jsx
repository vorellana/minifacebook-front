
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

function Tweet({id, message, handleOpenDeleteModal, updatePosts}){
    const[dis, setDis] = useState(true)
    const[labelAction, setLabelAction] = useState("Editar");
    const[messageAux, setMessageAux] = useState(message)
    
    const editSave = async (id, messageAux) => {
        setDis(!dis);
        if (dis) {
            setLabelAction("Guardar");
        } else {
            setLabelAction("Editar");
            updatePosts(id, messageAux);
        }
    }
    
    return(
        <li className="list-group-item">
            <div className="form-group">
                <textarea className="form-control"
                    rows="3" 
                    disabled = {dis}
                    value={messageAux} onChange={e => setMessageAux(e.target.value)}>
                </textarea>
            </div>
            <Button className="" size="sm" onClick = { ()=> editSave(id, messageAux) } >{labelAction}</Button>
            <span className="tab-space"> </span>
            <Button className="" size="sm" onClick = { () => handleOpenDeleteModal(id) }>Eliminar</Button>
        </li>
    )
}

export default Tweet;