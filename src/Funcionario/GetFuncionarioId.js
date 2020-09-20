import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';

function FuncionarioId (props){
    const [funcionarios, setFuncionarios] = useState([]);

    const getFuncionario = (id) => {
        api.get(`funcionario/${id} `).then(response => {
            setFuncionarios(response.data)
        })
    }
    useEffect(() => {
        const {id} = props.match.params
        getFuncionario(id)
    },[])

    return (
        <div>
            <h1>Funcionário</h1>
            <li key={funcionarios.id}>
                <h2>
                    Cpf: {funcionarios.cpf}
                </h2>
                <h2>
                    Id: {funcionarios.id}
                </h2>
                <h2>
                    Nome: {funcionarios.nome}
                </h2>
            </li>
            </div>
        )

}
export default FuncionarioId;