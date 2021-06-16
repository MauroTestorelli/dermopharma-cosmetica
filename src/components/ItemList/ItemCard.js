import React, { useState, Component } from 'react'
import { Button, Card } from 'react-bootstrap';

export default class ItemListContainer extends Component {
    render() {
        return (

const ItemCount = (/*{stock, initial, onAdd}*/) => {

    const [cant, setCant] = useState(1);

    const suma = () => {
        setCant(cant+1);
    };

    const resta = () => {
        setCant(cant-1);
    };


            <div>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="light" onClick= {resta}>-</Button>
            <div><h2>sdaa</h2></div>
            <Button variant="light" onClick={suma}>+</Button><br></br>
            <Button variant="light">Añadir al carrito</Button>
        </Card.Body>
    </Card>
            </div>
        )
    }
}
}