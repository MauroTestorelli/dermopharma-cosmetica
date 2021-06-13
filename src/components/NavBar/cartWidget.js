import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

export default class cartWidget extends Component {
    render() {
        return (
            <div className="cart-icon">
                <FontAwesomeIcon icon={faCartPlus}/>
            </div>
        )
    }
}

