import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';

function ProductId (props){
    const [produtos, setProdutos] = useState([]);

    const getProduto = (id) => {
        api.get(`produto/${id} `).then(response => {
            setProdutos(response.data)
        })
    }
    useEffect(() => {
        const {id} = props.match.params
        getProduto(id)
    },[])