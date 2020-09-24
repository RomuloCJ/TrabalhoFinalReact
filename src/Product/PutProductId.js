import React, {useState, useEffect, useRef} from 'react';
import api from '../Api/ApiUrl';
import styles from "../Styles/PostProduct.module.css";
import { format } from 'date-fns';



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
    dataFabricacao: 0
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
  const handleDataChange= (event) => {
    produtosTemp.dataFabricacao = event.target.value
  }
  const isInitialMount = useRef(true);

  const putProduto = (id) => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
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
      var data = Date.now()
      const formattedDate = format(data, "yyyy-MM-dd'T'HH:mm:ss'Z'");
      produtosTemp.dataFabricacao = formattedDate
      console.log(produtosTemp.dataFabricacao)
      setProduto(produtosTemp)
      event.target.reset()
    }

  }

  return (
    <div className={styles.wrapper}>
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>Nome:</label>
      <input
        className={styles.input}
        type="text"
        placeholder="Insira o nome do Produto"
        onChange={handleNomeChange}
      />
      <label className={styles.label}>Descrição:</label>
      <input
        className={styles.input}
        type="text"
        placeholder="Insira a descrição"
        onChange={handleDescricaoChange}
      />
      <label className={styles.label}>Quantidade:</label>
      <input
        className={styles.input}
        type="number"
        placeholder="1"
        min="1"
        onChange={handleQuantidadeChange}
      />
      <label className={styles.label}>Valor:</label>
      <input
        className={styles.input}
        type="number"
        onChange={handleValorChange}
        min="0"
        step=".01"
      />
      <label className={styles.label}>Id do Funcionario:</label>
      <input
        className={styles.input}
        type="number"
        onChange={handleIdFuncionarioChange}
        min="0"
        required
      />
      <input className={styles.btn} type="submit" value="Send" />
    </form>
  </div>
  )
}
export default PutProduct;
