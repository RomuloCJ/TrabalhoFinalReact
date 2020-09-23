import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';


function PutProduct() {
  
  const [produto, setProduto] = useState([])
  var produtosTemp = {
    dataFabricacao: "",
    descricao: "",
    // fotoLink: "",
    id: 0,
    idFuncionario: 0,
    idCategoria: 0,
    nomeCategoria: "",
    nomeFuncionario: "",
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
    // const handleFotoLinkChange= (event) => {
    //     produtosTemp.fotoLink = event.target.value
    //     console.log(produtosTemp)
    // }
    const handleIdChange= (event) => {
        produtosTemp.id = event.target.value
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
    const handleNomeCategoriaChange= (event) => {
        produtosTemp.nomeCategoria = event.target.value
        console.log(produtosTemp)
    }
    const handleNomeFuncionarioChange= (event) => {
        produtosTemp.nomeFuncionario = event.target.value
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
     api.put('produto/{id}', produto)
     .then((res) => {
       console.log(res.data);
       alert("Atualização Efetuada")
     })
     .catch((res) =>{
       alert("Não foi possível atualizar o produto!")
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
  	{/* <div>          
	  <label>            
		Data:            
		<input  type="text" placeholder="Insira o nome do Produto" onChange={handleNomeChange}/>          
	  </label>          
	</div> */}
    <div>  
    <label>            
		  Descrição:            
		<input  type="string"  placeholder="Insira a Descrição" onChange={handleDescricaoChange}/>
    </label>
    </div>
    {/* <div>
    <label>            
		  FotoLink:            
		<input  type="string"  placeholder="Insira o Link da Imagem" onChange={handleDescricaoChange}/>
    </label>
    </div> */}
    <div>
    <label>            
		  Id do Produto:            
		<input  type="number" placeholder="Insira o Id do Produto" onChange={handleNomeChange}/>          
	  </label> 
    </div>
    <div>
    <label>            
		  Id da Categoria:            
		<input  type="number" placeholder="Insira o Id da Categoria" onChange={handleNomeChange}/>          
	  </label> 
    </div>
    <div>
    <label>            
		  Id do Funcionário:            
		<input  type="number" placeholder="Insira o Id do Funcinário" onChange={handleNomeChange}/>          
	  </label> 
    </div>
    <div>
    <label>            
		  Nome:            
		<input  type="string" placeholder="Insira o nome do Produto" onChange={handleNomeChange}/>          
	  </label> 
    </div>
    <div>
    <label>            
		  NomeCategoria:            
		<input  type="string" placeholder="Insira o nome da Categoria" onChange={handleNomeChange}/>          
	  </label> 
    </div>
    <div>
    <label>            
		 Nome do Funcionário :            
		<input  type="string" placeholder="Insira o nome do Funcionário" onChange={handleNomeChange}/>          
	  </label> 
    </div>
    <div>
    <label>            
		  Quantidade em Estoque:            
		<input  type="number" placeholder="Insira quantidade em Estoque" onChange={handleNomeChange}/>          
	  </label> 
    </div>
    <div>
    <label>            
		  Valor:            
		<input  type="number" placeholder="Insira o valor do Produto" onChange={handleNomeChange}/>          
	  </label>
    </div> 
          
</form>    
)}

export default PutProduct;
