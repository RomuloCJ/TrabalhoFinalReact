import React, {useState} from 'react';
import api from '../Api/ApiUrl';
import { Link } from 'react-router-dom';




function GetProduct (){
    const [produtos, setProdutos] = useState([]);

    const getProduto = () => {
        api.get('produto').then(response => {
            setProdutos(response.data)
        })
    }
    getProduto()
    return (
            <div>
            <h1>Listar os Produtos</h1>
            {produtos.map(produto => (
            <li key={produto.id}>
                <h2>
                    Nome: <Link to={`/produto/${produto.id}`}>{produto.nome}</Link>
                </h2>
                <h2>
                    Descrição: {produto.descricao}
                </h2>
                <h2>
                    Quantidade: {produto.qtdEstoque}
                </h2>
                <h2>
                    Valor: R$ {produto.valor}
                </h2>
                
            </li>
            ))}
            </div>
    )

}
export default GetProduct;