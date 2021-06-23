import React, {useEffect, useState} from 'react';
import ItemCard from './ItemCard';
import axios from 'axios';

function ItemList() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            axios('json/Detalles.json')
           .then(respuesta => setProductos(respuesta.data));    
        }, 2000);     
    }, []);
    console.log("detalles" , productos);
    return (
        <div className="itemList">
            {productos.map((item) => {
                return (<div key={item.id}>
                        
                            <ItemCard item={item}/>
                        
                        </div>)
            })}
        </div>
    );
}

export default ItemList