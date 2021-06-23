import React, { Component } from 'react'
import logo from '../../images/logo.jpg'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header> 
                    <img src={logo}/>
                </header>
            </div>
        )
    }
}
