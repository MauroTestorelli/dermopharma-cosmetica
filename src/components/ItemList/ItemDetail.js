import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ItemDetail( {item}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.pictureUrl}/>
                <Card.Body>
                    <Card.Title>
                        {item.title}
                    </Card.Title>
                    <Card.Text>
                        {item.detail}                             
                    </Card.Text>   
                    <p>$ {item.price}</p>
                </Card.Body>
            </Card>

            <Link to={`/`}>
                <Button variant='light' >  Volver al catálogo </Button>
            </Link>
        </div>
    )
}

export default ItemDetail