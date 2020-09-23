import React, {Component, useEffect, useState} from 'react';
import api from '../Api/ApiUrl';



function PostProduct() {
  const [produto, setProduto] = useState([])
  var produtosTemp = {
    nome: "",
    descricao: "",
    qtdEstoque: 0,
    valor: 0,
    idFuncionario: 0,
    idCategoria: 0,
  }

  const handleNomeChange= (event) => {
    produtosTemp.nome = event.target.value
  }

  const handleDescricaoChange= (event) => {
    produtosTemp.descricao = event.target.value
  }

  const handleQuantidadeChange= (event) => {
    produtosTemp.qtdEstoque = event.target.value
  }

  const handleValorChange= (event) => {
    produtosTemp.valor = event.target.value
  }

  const handleidFuncionarioChange= (event) => {
    produtosTemp.idFuncionario = event.target.value
  }

  const handleidCategoriaChange= (event) => {
    produtosTemp.idCategoria = event.target.value

  }

   useEffect(() =>{
     if(produto.length != 0){
     api.post('produto', produto)
     .then((res) => {
       alert("Cadastro Efetuado")
       console.log(res)
     })
     .catch((res) =>{
      alert("Deu algum erro no preenchimento")
       console.log(res)
     })
     }
   }, [produto])

  const handleSubmit = (event) => {
      event.preventDefault()
      setProduto(produtosTemp)
      event.target.reset()

  }
    return (
        <form onSubmit={handleSubmit}>
          <div>
          <label>
            Nome:
            <input 
            type="text" 
            placeholder="Insira o nome do Produto"
            onChange={handleNomeChange}
            />
          </label>
          </div>
          <div>
          <label>
            Descrição:
            <input 
            type="text" 
            placeholder="Insira a Descrição"
            onChange={handleDescricaoChange}
            />
          </label>
          </div>
          <div>
          <label>
            Quantidade:
            <input 
            type="number" 
            placeholder="1"
            min="1"
            onChange={handleQuantidadeChange}
            />
          </label>
          </div>
          <div>
          <label>
            Valor:
            <input 
            type="number" 
            placeholder="0"
            min="0"
            step=".01"
            onChange={handleValorChange}
            />
          </label>
          </div>
          <div>
          <label>
            IdCategoria:
            <input 
            type="number" 
            placeholder="1"
            min="1"
            onChange={handleidCategoriaChange}
            />
           </label>
           </div>
          <div>
            <label>
            IdFuncionario:
            <input 
            type="number" 
            placeholder="1"
            min="1"
            onChange={handleidFuncionarioChange}
            />
          </label>
          </div>
          <div>
          <input type="submit" value="Send" />
          </div>
        </form>
    )
}
export default PostProduct;