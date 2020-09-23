import React from 'react';
import api from './Api/ApiUrl';
import {FiTrash2} from 'react-icons/fi';


function Delete (props) {
    const{type, id, data, setData}=props
    function handleDelete(){
        api.delete (`${type}/${id}`).then((response) => {
          const listaFiltrada=data.filter (item => item.id !== id)  
          setData(listaFiltrada)
        }  )
    }
    return (
        <FiTrash2 
        onClick={handleDelete}/>
    )

}

export default Delete;