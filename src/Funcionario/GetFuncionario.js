import React, {useState} from 'react';
import api from '../Api/ApiUrl';
import { Link } from 'react-router-dom';
import Delete from '../Delete';

function GetFuncionario (){
    const [funcionarios, setFuncionarios] = useState([]);

    const getfuncionario = () => {
        api.get('funcionario').then(response => {
            setFuncionarios(response.data)
        })
    }
    getfuncionario()

    return (
        <div>
        <h1>Listar os Funcionários</h1>
        {funcionarios.map(funcionario => (
        <li key={funcionario.id}>
            <h2>
                Cpf: <Link to={`/funcionario/${funcionario.id}`}>{funcionario.cpf}</Link>
                <Delete type={'funcionario'}
                id={funcionario.id}
                data={funcionarios}
                setData={setFuncionarios}            
                
                />

            </h2>
            <h2>
                Id: {funcionario.id}
            </h2>
            <h2>
                Nome: {funcionario.nome}
            </h2>
        </li>
        ))}
        </div>
)

}
export default GetFuncionario;