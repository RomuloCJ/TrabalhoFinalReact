import React from 'react';
import api from '../Api/ApiUrl';
import {FiTrash2} from 'react-icons/fi';
import styles from "../Styles/DeleteProduct.module.css";


function Delete({ type, id }) {
    function handleDelete() {
      api.delete(`${type}/${id}`);
    }
    return (
      <div className={styles.deleteProduct} onClick={handleDelete}>
        <FiTrash2  />
      </div>
    );
  }
  
  export default Delete;