import React, {useState, useEffect} from 'react';
import styles from "../Styles/GetProductId.module.css";
import api from '../Api/ApiUrl';

function ProductId (props){
    const [produto, setProdutos] = useState([]);

    const getProduto = (id) => {
        api.get(`produto/${id} `).then(response => {
            setProdutos(response.data)
        })
    }
    useEffect(() => {
        const {id} = props.match.params
        getProduto(id)
    },[])

    return (
        <div className={styles.wrapper}>
          <div className={styles.productContainer}>
            <div className={styles.leftBox}>
              <img src={produto.fotoLink} alt="" className={styles.productImg} />
            </div>
            <div className={styles.rightBox}>
              <h1 className={styles.productTitle}>{produto.nome}</h1>
              <p className={styles.productDesc}>{produto.descricao}</p>
              <i className={styles.productStock}>Qntd:{produto.qtdEstoque}</i>
              <p className={styles.price}>R${produto.valor},99</p>
              <p className={styles.category}>{produto.nomeCategoria}</p>
            </div>
          </div>
        </div>
      );
}
export default  ProductId