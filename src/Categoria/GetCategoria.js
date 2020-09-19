import React, {useState} from 'react';
import api from '../Api/ApiUrl';
import { Link } from 'react-router-dom';




function GetCategoria (){
    const [categorias, setCategoria] = useState([]);

    const getCategoria = () => {
        api.get('categoria').then(response => {
            setCategoria(response.data)
        })
    }
    getCategoria()
    return (
        <>
            <div>
            <h1>Categorias</h1>
            {categorias.map(categoria => (
            <li key={categoria.nome}>
                    Nome: <Link to={`/produtoscat/${categoria.id}`}>{categoria.nome}</Link>  Descrição: {categoria.descricao}
            </li>
            ))}
            </div>
        </>
    )

}
export default GetCategoria