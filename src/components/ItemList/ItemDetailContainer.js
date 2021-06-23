import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemDetail from './ItemDetail';

function ItemDetailContainer( { match }) {
    let itemID = match.params.id;
    const [items, setItems] = useState([]);

    useEffect(() => {
            axios('../json/Detalles.json')
           .then(respuesta => setItems(respuesta.data));    
    }, []);

    let itemDetail = items.filter(item => item.id === itemID);
    return (
        <div>
            <h1>Detalle de item</h1>
            {itemDetail.map((item) => {
                return (<div key={item.id}>
                        
                            <ItemDetail item={item}/>
                        
                        </div>)
            })}
            
        </div>
    )
}

export default ItemDetailContainer
