import React, { useState } from 'react';
import { Button} from 'react-bootstrap';

function ItemCount({name, stock}) {
    const [cant, setCant] = useState(1);

    const suma = () => {
        setCant(cant + 1);
    }

    const resta = () => {
        setCant(cant - 1);
    }

    const onAdd = () => {
        alert(`¡Acabas de agregar al carrito ${cant} ${name}, ahora solo falta confirmar la compra!`);
    }

    return (
    <div>
        {cant < 1 ? 
                <Button variant="danger">-</Button>
            :   <Button variant="light" onClick= {resta}>-</Button>     
            }
        <p>{cant}</p>
        {cant >= stock ?                                                
                 <Button variant="danger">+</Button>
            :    <Button onClick={suma} variant="light">+</Button>          
        }<br></br>
        {cant < 1 ?
                 <Button variant="danger">Agregar al carrito</Button> 
            :    <Button onClick={onAdd} variant="light">Agregar al carrito</Button>
            }
    </div>
    )
}

export default ItemCount;