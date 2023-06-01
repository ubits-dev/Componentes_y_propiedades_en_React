import React, { Component } from 'react';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: 'Navbar Ubits'
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.titulo}</h1>
            </div>
        )
    }

}