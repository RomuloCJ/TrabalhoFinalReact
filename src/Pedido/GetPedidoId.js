import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';

function PedidoId (props){
    const [pedidos, setPedidos] = useState([]);

    const getPedido = (id) => {
        api.get(`pedido/${id} `).then(response => {
            setPedidos(response.data)
        })
    }
    useEffect(() => {
        const {id} = props.match.params
        getPedido(id)
    },[])
    return (
        <div>
            <h1>Pedido</h1>
            <li>
                <h2>
                    Data do pedido: {pedido.dataPedido}
                </h2>
                <h2>
                    Id do pedido: {pedido.id}
                </h2>
                <h2>
                    Id do Cliente: {pedido.idCliente}
                </h2>
                <h2>
                    Nome do cliente: {pedido.nomeCliente}
                </h2>
                <h2>
                    Status do Pedido: R$ {pedido.pedidoStatus}
                </h2>
                
            </li>
        </div>
    )

}
export default  PedidoId;