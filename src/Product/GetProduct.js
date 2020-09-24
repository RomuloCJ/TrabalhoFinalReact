import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';
import {MdAddCircle} from 'react-icons/md';
import ProductCard from "./ProductCard";
import styles from "../Styles/GetProduct.module.css";
import {Link } from "react-router-dom";

function GetProduct (){
    const [produtos, setProdutos] = useState([]);
    const [Filt, setFilt] = useState([]);
    const [Input, setInput] = useState("");
    const getProduto = () => {
        api.get("produto").then((response) => {
          setProdutos(response.data);
        });
      };
      const InputHandler = (e) => setInput(e.target.value);
    
      useEffect(getProduto, []);
    
      useEffect(() => {
        setFilt(
          produtos.filter(
            (produto) =>
              produto.nome.toLowerCase().includes(Input.toLowerCase()) ||
              produto.nomeCategoria.toLowerCase().includes(Input.toLowerCase())
          )
        );
        getProduto();
      }, [Input, produtos]);
      
    
  return (
    <div className="main">
      <div className={styles.nav}>
        <input
          onChange={InputHandler}
          type="text"
          placeholder="Search..."
          className={styles.productSearch}
        />
      </div>
      <div className={styles.productContainer}>
      <div className={styles.addProduct}>
      <Link className={styles.productLink1} to={`/produtoadicionar`}><MdAddCircle className={styles.addIcon} /></Link>
      </div>
        {Filt.map((produto) => (
          <ProductCard
            key={produto.id}
            id={produto.id}
            title={produto.nome}
            desc={produto.descricao}
            categoria={produto.nomeCategoria}
            stock={produto.qtdEstoque}
            imgSrc={produto.fotoLink}
            price={produto.valor}
          />
        ))}
      </div>
    </div>
  );
}
export default GetProduct;
