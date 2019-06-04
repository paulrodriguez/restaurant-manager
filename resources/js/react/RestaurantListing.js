import axios from 'axios'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class RestaurantRow extends Component {
    constructor(props) {
        console.log("creating restaurant row");
        super(props);
        this.state = {
            restaurant: props.restaurant,
            columns: props.columns
        }
    }
    
    getColumns() {
        return this.state.columns.map(column=>{
            return (<div>{this.state.restaurant[column]}</div>); 
        });
    }
    
    render() {
        return (
            <div className="row">
            {this.getColumns()}
            </div>
            
        );
    }
    
}

class RestaurantColumns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: props.columns
        }
    }
    
    getColumns() {
        return this.state.columns.map(column=>{
            return (<div>{column}</div>) 
        });
    }
    render() {
        return(
            <div className="row">{this.getColumns()}</div>
            
        )
    }
}

class RestaurantListing extends Component {
    constructor (props) {
      super(props)
      this.state = {
          restaurants: [],
          columns: []
      }
    }

    componentDidMount () {
        console.log("this is a testin from component did mount");
        axios.get('/admin/restaurants/list').then(response=>{
            console.log(response);
            console.log(this.state);
            this.setState({restaurants: response.data})
        });
        
        this.setState({columns: ['name','address1','city','state','postal_code']})
    }
    
    getColumns() {
        return (<RestaurantColumns columns={this.state.columns} />)
    }
    
    render() {

        const rows = this.state.restaurants.map((item)=>{
            return (<RestaurantRow restaurant={item} columns={this.state.columns} />)
        });
        
        return (
            <div className="container">
            {this.getColumns()}
            {rows}
            </div>
        )
    }
    
}

ReactDOM.render(<RestaurantListing />, document.getElementById('app'))