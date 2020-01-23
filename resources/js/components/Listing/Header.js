import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        let i = 0;
        const data = this.props.columns.map(item=>{
            i += 1;
            return (<th scope="col" id={i}>{item}</th>);
        })
        
        const action = this.props.actions!='' ? (<th scope="col">{this.props.actions}</th>) : null;
        return (<thead><tr>{data}{action}</tr></thead>)
    }
}

export default Header