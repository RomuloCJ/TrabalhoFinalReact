import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';
import { Link } from 'react-router-dom';




function GetCategoria (){
    const [categorias, setCategorias] = useState([]);


    useEffect(() =>{
        api.get('categoria').then(response => {
            setCategorias(response.data)
            console.log(response.data)
        })
      }, [])
    return (
        <>
            <div>
            <h1>Categorias</h1>
            {categorias.map(categoria => (
            <li key={categoria.nome}>
                <h2> Nome:<Link to={`/categoria/${categoria.id}`}>{categoria.nome}</Link></h2>
                <h2>Descrição: {categoria.descricao}</h2>
            </li>
            ))}
            </div>
        </>
    )

}
export default GetCategoria