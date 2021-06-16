import React, { useState, Component } from 'react'
import { Button, Card } from 'react-bootstrap';

const ItemCount = (/*{stock, initial, onAdd}*/) => {
// onClick= {()=>onAdd(initial) } para añadir a "añadir a la tienda"
    const [cant, setCant] = useState(1);

    const suma = () => {
        setCant(cant+1);
    };

    const resta = () => {
        if(cant > 1){
        setCant(cant-1);
    } else { 
        setCant(1);
    }
    };

        return (
            <div>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="{img}" />
        <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
                    
            </Card.Text>
            <Button variant="light" onClick= {resta}>-</Button>
            <div><h2>{cant}</h2></div>
            <Button variant="light" onClick={suma}>+</Button><br></br>
            <Button variant="light">Añadir al carrito</Button>
        </Card.Body>
    </Card>
            </div>
        )
    }

    export default ItemCount
