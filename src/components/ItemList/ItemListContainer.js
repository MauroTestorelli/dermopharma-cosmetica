import React, { Component } from 'react'
import ItemList from './ItemList.js'
import ItemCard from './ItemCard.js'

export default class ItemListContainer extends Component {
    render() {
        return (
            <div>
                <h1>Aca estaría mi catalogo</h1>
                <>
                <ItemCard/>
                </>
            </div>
        )
    }
}
