import React from 'react'
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

function ItemCard({item}) {
        return (
            <div>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.pictureUrl}/>
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.description}  
            </Card.Text>
            <Link to={`/detalles/${item.id}`}>
                    <Button variant="light">Ver más info..</Button>
            </Link>
            <p>$ {item.price}</p>
            <ItemCount stock={item.stock} name={item.title}/>
        </Card.Body>
    </Card>
            </div>
        )
    }

    export default ItemCard
