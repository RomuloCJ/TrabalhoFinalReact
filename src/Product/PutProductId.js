import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';


function PutProduct(props) {
  const [produto, setProduto] = useState([]);
  const [pegar, setPegar] = useState([]);


  const getProduto = (id) => {
    api.get(`produto/${id} `).then(response => {
        setPegar(response.data)
    })
  }

  var produtosTemp = {
    nome: "",
    idFuncionario: 0,
    descricao: "",
    qtdEstoque: 0,
    valor: 0,
  }

  const handleDescricaoChange= (event) => {
    produtosTemp.descricao = event.target.value
  }

  const handleNomeChange= (event) => {
    produtosTemp.nome = event.target.value
  }

  const handleIdFuncionarioChange= (event) => {
    produtosTemp.idFuncionario = event.target.value
  }
    
  const handleQuantidadeChange= (event) => {
    produtosTemp.qtdEstoque = event.target.value
  }

  const handleValorChange= (event) => {
    produtosTemp.valor = event.target.value
  }

  const putProduto = (id) => {
    api.put(`produto/${id}`, produto)
    .then((res) => {
      console.log(res.data);
      alert("Atualização Efetuada")
    })
    .catch((res) =>{
      alert("Não foi possível atualizar o produto!")
      console.log(res)
    })
  } 

 useEffect(() =>{
   const {id} = props.match.params
   getProduto(id)
   putProduto(id)
 }, [produto])
 
  const handleSubmit = (event) => {
    event.preventDefault()
    if(produtosTemp.nome.length <= 5){
      produtosTemp.nome = pegar.nome
    }
    if(produtosTemp.descricao.length <= 10){
      produtosTemp.descricao = pegar.descricao
    }
    if(produtosTemp.valor.length == 0){
      produtosTemp.valor = pegar.valor
    }
    if(produtosTemp.qtdEstoque.length == 0){
      produtosTemp.qtdEstoque = pegar.qtdEstoque
    }
    if(produtosTemp.idFuncionario != pegar.idFuncionario){
      alert("Só o funcionario que cadastrou o produto pode alterá-lo")
    }else{
      setProduto(produtosTemp)
      event.target.reset()
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>  
        <label>            
		      Nome:            
		      <input  type="string"  placeholder="Insira o Nome" onChange={handleNomeChange}/>
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
		      ID do funcionario que está alterando:          
		      <input  type="number" placeholder="Insira o ID do Funcionario" onChange={handleIdFuncionarioChange}/>          
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
  )
}
export default PutProduct;
