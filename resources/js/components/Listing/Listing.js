import axios from 'axios'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Body from './Body'

class Listing extends Component {
    constructor (props) {
      super(props)
        this.state = {
            
        }
    }

    getTotalColumns() {
        return this.props.columns.length;
    }
    
    getHeader() {
        return (<Header columns={this.props.columns} 
            actions={this.actions ? 'Actions' : ''} />)
    }
    
    getBody() {
        return (
            <Body 
                columns={this.props.columns} 
                list={this.props.list} 
                actions={this.props.actions} />)
    }
    render() {

        
        
        return (
            <table className="table table-striped">
            {this.getHeader()}
            {this.getBody()}
            </table>
        )
    }
    
}

export default Listing
//ReactDOM.render(<RestaurantListing />, document.getElementById('app'))