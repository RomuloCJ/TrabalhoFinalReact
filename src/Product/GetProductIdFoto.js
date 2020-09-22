import React, {useState, useEffect} from 'react';
import api from '../Api/ApiUrl';

function ProductIdFoto (props){
    const [produto, setProduto] = useState([]);

    const getProdutoFoto = (id) => {
        api.get('produto').then(response => {
            setProduto(response.data.filter(produto => produto.id == id)[0])
            console.log(response.data.filter(produto => produto.id == id)[0])
        })
        // api.get(`produto`).then(response => {
        //     setProduto(response.data)
        // })
    }
    useEffect(() => {
        const {id} = props.match.params
        getProdutoFoto(id)
    },[])
    return (
            <div>
            <img src={`${produto.fotoLink}`}></img>
            </div>
    )

}
export default  ProductIdFoto;