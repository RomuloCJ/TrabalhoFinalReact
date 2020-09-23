import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';
import { Link } from 'react-router-dom';
import Delete from '../Delete';

function GetProduct (){
    const [produtos, setProdutos] = useState([]);

    useEffect(() =>{
        api.get('produto').then(response => {
            setProdutos(response.data)
            console.log(response.data)
        })
      }, [])
      
    return (
            <div>
            <h1>Listar os Produtos</h1>
            {produtos.map(produto => (
            <li key={produto.id}>
                <h2>
                    Nome: <Link to={`/produto/${produto.id}`}>{produto.nome}</Link>
                    <Delete id={produto.id}
                    data={produtos}
                    setData={setProdutos}
                    type={'produto'}
                    />
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
                <Link to={`/produto/foto/${produto.id}`}><img src={`${produto.fotoLink}`} /></Link>
            </li>
            ))}
            </div>
    )

}
export default GetProduct;