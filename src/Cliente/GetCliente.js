import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';
import { Link } from 'react-router-dom';

function GetCliente (){
    const [clientes, setClientes] = useState([]);

    useEffect(() =>{
        api.get('cliente').then(response => {
            setClientes(response.data)
        })
      }, [])
      console.log(clientes)
    return (
            <div>
            <h1>Cliente</h1>
            {clientes.map(cliente => (
            <li key={cliente.id}>
                <h2>
                    Nome: <Link to={`/cliente/${cliente.id}`}>{cliente.nome}</Link>
                </h2>
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
                            Bairro: {cliente.endereco.bairro}
                        </h3>
                        <h3>
                            Cep: {cliente.endereco.cep}
                        </h3>
                        <h3>
                            Cidade: {cliente.endereco.cidade}
                        </h3>
                        <h3>
                            Complemento: {cliente.endereco.complemento}
                        </h3>
                        <h3>
                            Estado: {cliente.endereco.estado}
                        </h3>
                        <h3>
                            Número: {cliente.endereco.numero}
                        </h3>
                        <h3>
                            Rua: {cliente.endereco.rua}
                        </h3>
                    </li>
                <h2>
                    Id: {cliente.id}
                </h2>
                <h2>
                    Usuario: {cliente.usuario}
                </h2>
            </li>
            ))}
            </div>
    )

}
export default  GetCliente