import React, {useEffect, useState, useRef} from 'react';
import api from '../Api/ApiUrl';
import styles from "../Styles/PostProduct.module.css";
import {useHistory } from "react-router-dom";
import { format } from 'date-fns';
import styled from "styled-components";



function PostProduct() {
  const [produto, setProduto] = useState({});
  var produtosTemp = {
    nome: "",
    descricao: "",
    qtdEstoque: 0,
    valor: 0,
    idFuncionario: 0,
    idCategoria: 0,
    dataFabricacao: 0
  };

  const history = useHistory();

  const handleNomeChange = (event) => {
    produtosTemp.nome = event.target.value;
  };

  const handleDescricaoChange = (event) => {
    produtosTemp.descricao = event.target.value;
  };

  const handleQuantidadeChange = (event) => {
    produtosTemp.qtdEstoque = event.target.value;
  };

  const handleValorChange = (event) => {
    produtosTemp.valor = event.target.value;
  };

  const handleidFuncionarioChange = (event) => {
    produtosTemp.idFuncionario = event.target.value;
  };

  const handleidCategoriaChange = (event) => {
    produtosTemp.idCategoria = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = Date.now()
    const formattedDate = format(data, "yyyy-MM-dd'T'HH:mm:ss'Z'");
    produtosTemp.dataFabricacao = formattedDate
    setProduto(produtosTemp);
    event.target.reset();
  };

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      api
        .post("produto", produto)
        .then((res) => {
          alert("Cadastro Efetuado");
          console.log(res);

          history.push("/produto");
        })
        .catch((res) => {
          alert("Deu algum erro no preenchimento");
          console.log(res);
        });
    }
  }, [produto]);

  const Nome = styled.p`
  font-size: 1.5rem`
  const Descricao =styled.p`
  font-size: 1.2rem`
  const Valor =styled.p`
  font-weight: bold`
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Nome className={styles.label}>Nome:</Nome>
        <input
          className={styles.input}
          type="text"
          placeholder="Insira o nome do Produto"
          onChange={handleNomeChange}
          required
        />
        <Descricao className={styles.label}>Descrição:</Descricao>
        <input
          className={styles.input}
          type="text"
          placeholder="Insira a descrição"
          onChange={handleDescricaoChange}
          required
        />
        <label className={styles.label}>Quantidade:</label>
        <input
          className={styles.input}
          type="number"
          placeholder="1"
          min="1"
          onChange={handleQuantidadeChange}
          required
        />
        <Valor className={styles.label}>Valor:</Valor>
        <input
          className={styles.input}
          type="number"
          onChange={handleValorChange}
          min="0"
          step=".01"
          required
        />
        <label className={styles.label}></label>
        IdCategoria:
        <input
          className={styles.input}
          type="number"
          onChange={handleidCategoriaChange}
          required
        />
        <label className={styles.label}></label>
        IdFuncionario:
        <input
          className={styles.input}
          type="number"
          onChange={handleidFuncionarioChange}
          required
        />
        <input className={styles.btn} type="submit" value="Send" />
      </form>
    </div>
  );
}
export default PostProduct;
