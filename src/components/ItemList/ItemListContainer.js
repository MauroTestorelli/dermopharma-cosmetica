import React, {useEffect, useState} from 'react';
import ItemList from './ItemList.js'
import axios from 'axios';


function ItemListContainer(prop) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            axios('json/Detalles.json')
           .then(respuesta => setProductos(respuesta.data));    
        }, 2000);     
    }, []);
    return (
        <div>
            <h1>Catálogo de Dermopharma:</h1>

            <ItemList productos={productos}/>
            
        </div>
    )
}

export default ItemListContainer