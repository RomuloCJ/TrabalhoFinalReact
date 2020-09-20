import React, {useState} from 'react';
import api from '../Api/ApiUrl';
import { Link } from 'react-router-dom';

function GetCliente (){
    const [clientes, setClientes] = useState([]);

    const getCliente = () => {
        api.get('cliente').then(response => {
            setClientes(response.data)
        })
    }
    getCliente()
    return (
            <div>
            <h1>Cliente</h1>
            <li>
                <h2>
                    Cpf: {clientes.cpf}
                </h2>
                <h2>
                    DataNascimento: {clientes.dataNascimento}
                </h2>
                <h2>
                    E-mail: {clientes.email}
                </h2>
                <h2>
                    Endereço: {clientes.endereco}
                </h2>
                    <li>
                        <h3>
                            Bairro: {clientes.bairro}
                        </h3>
                        <h3>
                            Cep: {clientes.cep}
                        </h3>
                        <h3>
                            Cidade: {clientes.cidade}
                        </h3>
                        <h3>
                            Complemento: {clientes.complemento}
                        </h3>
                        <h3>
                            Estado: {clientes.valor}
                        </h3>
                        <h3>
                            Número: {clientes.numero}
                        </h3>
                        <h3>
                            Rua: {clientes.rua}
                        </h3>
                    </li>
                <h2>
                    Id: {clientes.id}
                </h2>
                <h2>
                    Nome: {clientes.nome}
                </h2>
                <h2>
                    Usuario: {clientes.usuario}
                </h2>
            </li>
            </div>
    )

}
export default  GetCliente