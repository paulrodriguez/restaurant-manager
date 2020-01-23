import React, { Component } from 'react'
import Actions from './Actions'

class Item extends Component {
    constructor(props) {
        super(props);
    }
    
    
    getData() {
        return this.props.columns.map(column=>{
            return (<td>{this.props.item[column]}</td>)
        })
    }
    
    render() {
        return (<tr>{this.getData()}<td><Actions actions={this.props.actions}/></td></tr>)
    }
}

export default Item