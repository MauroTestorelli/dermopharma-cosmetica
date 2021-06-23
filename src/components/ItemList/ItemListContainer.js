import React, { Component } from 'react'
import ItemList from './ItemList.js'

export default class ItemListContainer extends Component {
    render() {
        return (
            <div>
                <h1>Catálogo de Dermopharma</h1>
                <>
                <ItemList/>
                </>
            </div>
        )
    }
}
