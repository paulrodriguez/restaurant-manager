import axios from 'axios'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class RestaurantRow extends Component {
    constructor(props) {
        console.log("creating restaurant row");
        super(props);
        this.state = {
            restaurant: props.restaurant
        }
    }
    
    render() {
        return (
            <div className="row">
            {this.state.restaurant.name}
            </div>
            
        );
    }
    
}

class RestaurantColumns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: []
        }
    }
}

class RestaurantListing extends Component {
    constructor (props) {
      super(props)
      this.state = {
          restaurants: []
      }
    }

    componentDidMount () {
        console.log("this is a testin from component did mount");
        axios.get('/admin/restaurants/list').then(response=>{
            console.log(response);
            console.log(this.state);
            this.setState({restaurants: response.data})
        });
    }
    
    render() {
        console.log(this.state.restaurants);
        const rows = this.state.restaurants.map((item)=>{
            return (<RestaurantRow restaurant={item} />)
        });
        console.log(rows);
        return (
            <div className="container">
            {rows}
            </div>
        )
    }
    
}

ReactDOM.render(<RestaurantListing />, document.getElementById('app'))