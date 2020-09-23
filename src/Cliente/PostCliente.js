import React, {Component, useEffect, useState} from 'react';
import api from '../Api/ApiUrl';



function PostCategoria() {
  const [cliente, setCliente] = useState([])
  var clienteTemp = {
    nome: "",
    usuario: "",
    cpf: "",
    email:"",
    dataNascimento: "1992-02-01T00:00:00Z",
    endereco: {
        rua: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: ""
    }
  }

  const handleNomeChange= (event) => {
    clienteTemp.nome = event.target.value
  }

  const handleUsuarioChange= (event) => {
    clienteTemp.usuario = event.target.value
  }

  const handleCPFChange= (event) => {
    clienteTemp.cpf = event.target.value
  }

  const handleEmailChange= (event) => {
    clienteTemp.email = event.target.value
  }

  const handleRuaChange= (event) => {
    clienteTemp.endereco.rua = event.target.value
  }  

  const handleNumeroChange= (event) => {
    clienteTemp.endereco.numero = event.target.value
  }

  const handleComplementoChange= (event) => {
    clienteTemp.endereco.complemento = event.target.value
  }

  const handleBairroChange= (event) => {
    clienteTemp.endereco.bairro = event.target.value
  }

  const handleCidadeChange= (event) => {
    clienteTemp.endereco.cidade = event.target.value
  }

  const handleEstadoChange= (event) => {
    clienteTemp.endereco.estado = event.target.value
  }

  const handleCEPChange= (event) => {
    clienteTemp.endereco.cep= event.target.value
  }


   useEffect(() =>{
     api.post('cliente', cliente)
     .then((res) => {
       alert("Cadastro Efetuado")
       console.log(res)
     })
     .catch((res) =>{
      alert("Deu algum erro no preenchimento")
       console.log(res)
     })
   }, [cliente])

  const handleSubmit = (event) => {
      event.preventDefault()
      console.log(clienteTemp)
      setCliente(clienteTemp)
      event.target.reset()

  }
    return (
        <form onSubmit={handleSubmit}>
          <div>
          <label>
            Nome:
            <input 
            type="text" 
            placeholder="Insira o nome do Cliente"
            onChange={handleNomeChange}
            />
          </label>
          </div>
          <div>
          <label>
            Usuário:
            <input 
            type="text" 
            placeholder="Insira o nome de Usuario"
            onChange={handleUsuarioChange}
            />
          </label>
          </div>
          <div>
          <label>
            CPF:
            <input 
            type="text" 
            placeholder="Insira o CPF"
            onChange={handleCPFChange}
            />
          </label>
          </div>
          <div>
          <label>
            Email:
            <input 
            type="text" 
            placeholder="Insira o Email"
            onChange={handleEmailChange}
            />
          </label>
          </div>
          <div>
              <h2>Endereço:</h2>
          </div>
          <div>
          <label>
            Rua:
            <input 
            type="text" 
            placeholder="Insira a Rua"
            onChange={handleRuaChange}
            />
          </label>
          </div>
          <div>
          <label>
            Numero:
            <input 
            type="text" 
            placeholder="Insira o Numero"
            onChange={handleNumeroChange}
            />
          </label>
          </div>
          <div>
          <label>
            Complemento:
            <input 
            type="text" 
            placeholder="Insira o Complemento"
            onChange={handleComplementoChange}
            />
          </label>
          </div>
          <div>
          <label>
            Bairro:
            <input 
            type="text" 
            placeholder="Insira o Bairro"
            onChange={handleBairroChange}
            />
          </label>
          </div>
          <div>
          <label>
            Cidade:
            <input 
            type="text" 
            placeholder="Insira a Cidade"
            onChange={handleCidadeChange}
            />
          </label>
          </div>
          <div>
          <label>
            Estado:
            <input 
            type="text" 
            placeholder="Insira o Estado"
            onChange={handleEstadoChange}
            />
          </label>
          </div>
          <div>
          <label>
            CEP:
            <input 
            type="text" 
            placeholder="Insira o CEP"
            onChange={handleCEPChange}
            />
          </label>
          </div>
          <div>
          <input type="submit" value="Send" />
          </div>
        </form>
    )
} 
export default PostCategoria;