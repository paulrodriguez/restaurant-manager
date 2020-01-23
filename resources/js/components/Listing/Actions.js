import React, { Component } from 'react'

class Actions extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
            const actions = this.props.actions.map(action=>{
                return (<a className={"dropdown-item"} 
                href={action.url!='' ? action.url : '#'}>{action.name}</a>);
            });
            
            return (
                <div className={"dropdown"}>
                <button className={"btn btn-secondary dropdown-toggle"} 
                type="button" data-toggle="dropdown" 
                aria-haspopup="true" aria-expanded="false">
                Actions
                </button>
                <div className={"dropdown-menu"} aria-labelledby="dropwdownMenuButton">
                {actions}
                </div>
                </div>
                
            )
    }
}

export default Actions