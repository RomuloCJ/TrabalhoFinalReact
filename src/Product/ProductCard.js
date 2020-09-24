import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/ProductCard.module.css";
import Delete from "./DeleteProduct";
import { RiPencilLine } from "react-icons/ri"
import styled from "styled-components";

export default function ProductCard({
  id,
  imgSrc,
  title,
  desc,
  categoria,
  stock,
  price,
}) {
  const Paragrafo = styled.p`
  font-weight: bold`
  const Quantidade = styled.p`
  font-style: italic`
  return (
    <div className={styles.productCard}>
        <Delete id={id} type={"produto"} />
        <Link to={`/produtomodificar/${id}`}>
        <div className={styles.editIcon}>
        <RiPencilLine />
        </div>
        </Link>
      <Link className={styles.productLink} to={`/produto/${id}`}>
        <img src={imgSrc} alt={title} className={styles.productImg} />
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{title}</h1>
          <Paragrafo className={styles.productDesc}>{desc}</Paragrafo>
          <Quantidade className={styles.productStock}>Qntd:{stock}</Quantidade>
          <p className={styles.price}>R${price}</p>
          <p className={styles.category}>{categoria}</p>
        </div>
      </Link>
    </div>
  );
}
