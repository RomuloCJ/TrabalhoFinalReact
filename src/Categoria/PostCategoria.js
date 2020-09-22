import React, {Component, useEffect, useState} from 'react';
import api from '../Api/ApiUrl';



function PostCategoria() {
  const [categoria, setCategoria] = useState([])
  var categoriaTemp = {
    nome: "",
    descricao: "",
  }

  const handleNomeChange= (event) => {
    categoriaTemp.nome = event.target.value
  }

  const handleDescricaoChange= (event) => {
    categoriaTemp.descricao = event.target.value
  }


   useEffect(() =>{
     api.post('categoria', categoria)
     .then((res) => {
       alert("Cadastro Efetuado")
       console.log(res)
     })
     .catch((res) =>{
      alert("Deu algum erro no preenchimento")
       console.log(res)
     })
   }, [categoria])

  const handleSubmit = (event) => {
      event.preventDefault()
      setCategoria(categoriaTemp)
      event.target.reset()

  }
    return (
        <form onSubmit={handleSubmit}>
          <div>
          <label>
            Nome:
            <input 
            type="text" 
            placeholder="Insira o nome da Caegoria"
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
          <input type="submit" value="Send" />
          </div>
        </form>
    )
} 
export default PostCategoria;