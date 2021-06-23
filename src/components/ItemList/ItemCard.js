import React from 'react'
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

function ItemCard({item}) {
        return (
            <div>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="{item.pictureUrl}"/>
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.description}  
            </Card.Text>
            <p>$ {item.price}</p>
            <ItemCount stock={item.stock} name={item.title}/>
        </Card.Body>
    </Card>
            </div>
        )
    }

    export default ItemCard
