import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';

function ProductIdFoto (props){
    const [produtos, setProdutos] = useState([]);

    const getProdutoFoto = (id) => {
        api.get(`produto/${id} `).then(response => {
            setProdutos(response.data)
        })
    }
    useEffect(() => {
        const {id} = props.match.params
        getProdutoFoto(id)
    },[])
    return (
            <div>
            <h1>Foto do Produto</h1>
            
                <img src={} alt={Cadeira } />
            </div>
    )

}
export default  ProductIdFoto;