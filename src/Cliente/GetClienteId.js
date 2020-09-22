import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';

function ClienteId (props){
    const [cliente, setCliente] = useState([]);
    const [endereco, setEndereco] = useState([]);

    const getCliente = (id) => {
        api.get(`cliente/${id} `).then(response => {
            setCliente(response.data)
            setEndereco(response.data.endereco)
        })
    }
    useEffect(() => {
        const {id} = props.match.params
        getCliente(id)
    },[])

    return (
        <div>
        <h1>Cliente</h1>
        <li>
            <h2>
                Cpf: {cliente.cpf}
            </h2>
            <h2>
                DataNascimento: {cliente.dataNascimento}
            </h2>
            <h2>
                E-mail: {cliente.email}
            </h2>
            <li>
                <h3>
                    Bairro: {endereco.bairro}
                </h3>
                <h3>
                     Cep: {endereco.cep}
                </h3>
                <h3>
                    Cidade: {endereco.cidade}
                </h3>
                <h3>
                    Complemento: {endereco.complemento}
                </h3>
                 <h3>
                    Estado: {endereco.estado}
                </h3>
                <h3>
                    Número: {endereco.numero}
                </h3>
                <h3>
                    Rua: {endereco.rua}
                </h3>
            </li> 
            <h2>
                Id: {cliente.id}
            </h2>
            <h2>
                Nome: {cliente.nome}
            </h2>
            <h2>
                Usuario: {cliente.usuario}
            </h2>
        </li>
        </div>
)

}
export default  ClienteId