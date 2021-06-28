import React, {useEffect, useState} from 'react';
import ItemCard from './ItemCard';
import axios from 'axios';

function ItemList({productos}) {

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