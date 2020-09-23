import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';

function GetCategoriaId (props){
    const [categoria, setCategoria] = useState([]);

    const getCategoria = (id) => {
        api.get(`categoria/${id} `).then(response => {
            setCategoria(response.data)
        })
    }
    useEffect(() => {
        const {id} = props.match.params
        getCategoria(id)
    },[])
    return (
        <>
            <div>
            <h1>Categorias</h1>
            <li key={categoria.id}>
                    Nome:   {categoria.nome}
                    Descrição: {categoria.descricao}
            </li>
            </div>
        </>
    )
} export default GetCategoriaId