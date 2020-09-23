import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';


function PutProduct(props) {
  
  const [produto, setProduto] = useState([])
  var produtosTemp = {
    dataFabricacao: "2019-10-01T00:00:00Z",
    descricao: "",
    fotoLink: "",
    idFuncionario: 0,
    idCategoria: 0,
    qtdEstoque: 0,
    valor: 0,
    
  }
 
    const handleDataChange= (event) => {
        produtosTemp.dataFabricacao = event.target.value
        console.log(produtosTemp)
    }
    const handleDescricaoChange= (event) => {
        produtosTemp.descricao = event.target.value
        console.log(produtosTemp)
    }
     const handleFotoLinkChange= (event) => {
         produtosTemp.fotoLink = event.target.value
         console.log(produtosTemp)
     }
    const handleIdCategoriaChange= (event) => {
        produtosTemp.idCategoria = event.target.value
        console.log(produtosTemp)
    }
    const handleIdFuncionarioChange= (event) => {
        produtosTemp.idFuncionario = event.target.value
        console.log(produtosTemp)
    }
    const handleNomeChange= (event) => {
        produtosTemp.nome = event.target.value
        console.log(produtosTemp)
    }
    
    const handleQuantidadeChange= (event) => {
        produtosTemp.qtdEstoque = event.target.value
        console.log(produtosTemp)
    }

    const handleValorChange= (event) => {
        produtosTemp.valor = event.target.value
        console.log(produtosTemp)
    }
useEffect(() =>{
    const id = props.match.params
     api.put(`produto/${id}`, produto)
     .then((res) => {
       console.log(res.data);
       alert("Atualização Efetuada")
     })
     .catch((res) =>{
       alert("Não foi possível atualizar o produto!")
       console.log(id)
       console.log(produto)
       console.log(res)
     })
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
		<input  type="text" placeholder="Insira o nome do Produto" onChange={handleNomeChange}/>          
	  </label>          
	  </div> 
    <div>  
    <label>            
		  Descrição:            
		<input  type="string"  placeholder="Insira a Descrição" onChange={handleDescricaoChange}/>
    </label>
    </div>
    <div>
    <label>            
		  FotoLink:            
		<input  type="string"  placeholder="Insira o Link da Imagem" onChange={handleFotoLinkChange}/>
    </label>
    </div> 
    <div>
    <label>            
		  Id da Categoria:            
		<input  type="number" placeholder="Insira o Id da Categoria" onChange={handleIdCategoriaChange}/>          
	  </label> 
    </div>
    <div>
    <label>            
		  Id do Funcionário:            
		<input  type="number" placeholder="Insira o Id do Funcinário" onChange={handleIdFuncionarioChange}/>          
	  </label> 
    </div>
    <div>
    <label>            
		  Quantidade em Estoque:            
		<input  type="number" placeholder="Insira quantidade em Estoque" onChange={handleQuantidadeChange}/>          
	  </label> 
    </div>
    <div>
    <label>            
		  Valor:            
		<input  type="number" placeholder="Insira o valor do Produto" onChange={handleValorChange}/>          
	  </label>
    </div> 
    <div>
          <input type="submit" value="Send" />
    </div>
</form>    
)}

export default PutProduct;
