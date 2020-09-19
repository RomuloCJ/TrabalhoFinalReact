import React, {useState} from 'react';
import api from '../Api/ApiUrl';
import { Link } from 'react-router-dom';




function ProdutosCat (props){

    const [produtos, setProdutos] = useState([]);

    const getProduto = () => {
        api.get('produto').then(response => {
            setProdutos(response.data)
        })
    }
    const listar = (produto) =>{
        if (produto.idCategoria === props.match.params){
            console.log(produto.idCategoria)
            return
        }
        }
    getProduto()
    return (
            <div>
            <h1>Listar os Produtos</h1>
            {produtos.map(produto => (
                listar(produto)
            ))}
            </div>
    )

}
export default ProdutosCat