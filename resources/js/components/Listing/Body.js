import Item from './Item';
import React, { Component } from 'react'


class Body extends Component {
    constructor(props) {
        super(props);
    }
    
    getItems() {
        return this.props.list.map(item=>{
           return (<Item 
               item={item} 
               columns={this.props.columns} 
               id={item.id}
               actions={this.props.actions} />) 
        });
    }
    
    render() {
        
        return (
        <tbody>
            {this.getItems()}
        </tbody>)
    }
}

export default Body