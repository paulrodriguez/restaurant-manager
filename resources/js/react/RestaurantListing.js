import axios from 'axios'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Listing from '../components/Listing/Listing'
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

class RestaurantListing extends Component {
    constructor(props) {
        
        super(props);
        let deleteItem = this.deleteItem;
        let editItem = this.editItem;
        this.state = {
            restaurants: [],
            columns: [],
            actions: [{'name':'Edit','method':editItem},
            {'name':'Delete','method':deleteItem}]
        }
        
        
    }
    deleteItem(id) {
        console.log(id);
    }
    editItem(id) {
        console.log(id);
    }
    componentDidMount () {
        console.log("this is a testin from component did mount");
        //TODO: will need to change this url
        axios.get('/admin/restaurants/list').then(response=>{
            console.log(response);
            console.log(this.state);
            this.setState({restaurants: response.data})
        });
        
        this.setState({columns: ['name','address1','city','state','postal_code']})
    }
    
    render() {
        return (<Listing 
            columns={this.state.columns} 
            list={this.state.restaurants} 
            column_count={this.state.columns.length}
            actions={this.state.actions} />)
    }
}

ReactDOM.render(<RestaurantListing />, document.getElementById('app'))