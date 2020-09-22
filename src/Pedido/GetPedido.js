import React, {useState} from 'react';
import api from '../Api/ApiUrl';


function GetPedido (){
    const [pedidos, setPedidos] = useState([]);

    const getPedido = () => {
        api.get('cliente').then(response => {
            setPedidos(response.data)
        })
    }
    getPedido()

    return (
        <div>
        <h1>Lista dos Pedidos</h1>
        
        <li>
            <h2>
                Data do pedido: {pedidos.dataPedido}
            </h2>
            <h2>
                Id do pedido: {pedidos.id}
            </h2>
            <h2>
                Id do Cliente: {pedidos.idCliente}
            </h2>
            <h2>
                Nome do cliente: {pedidos.nomeCliente}
            </h2>
            <h2>
                Status do Pedido: R$ {pedidos.pedidoStatus}
            </h2>
            
        </li>
        
        </div>
    
)

}
export default GetPedido;