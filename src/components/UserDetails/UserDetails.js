import React, { Component } from 'react'

import './UserDetails.scss'

export const Record = ({item, label, field}) => {
    return(
        <li className="list-group-item">
            <span>{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}
export default class UserDetails extends Component{

    state = {
        item: null
    }

    componentDidUpdate(prevProps){
        if(this.props.selectedRow !== prevProps.selectedRow){
            this.setState({
                item: this.props.selectedRow
            })
        }
    } 
    

    render(){
        const {item} = this.state
        if(!this.state.item){
            return (
                <div className = 'card p-5'>
                    <h2>Select user</h2>
                </div>
            )
        }

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.selectedRow.firstName}</h5>
                    <p className="card-text">{item.description ? item.description : 'There is no description for this user'}</p>
                </div>
                <ul className="list-group list-group-flush">
                {
                   React.Children.map(this.props.children, child => {
                       return React.cloneElement(child, {item})
                   })
                }
                </ul>
            </div>
        )
        
    }

}








/* 
}


const UserDetails = ({selectedRow, children}) => {

    if(!selectedRow){
        return (
            <div className = 'card'>
                <h1>Hello, please choose a user</h1>
            </div>
        )
    }
    
    return (
        <div className="card">
            <img className="card-img-top" src="#" alt="Card  cap"/>
            <div className="card-body">
                <h5 className="card-title">{selectedRow.firstName}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
               {
                   React.Children.map(children, () => {
                       return React.cloneElement(children , selectedRow)
                   })
               }
            </ul>
        </div>
    )
}

export default UserDetails */