import React, { Component } from 'react';


class List extends Component {
    
    render(){
        console.log('Props:', this.props.data);

        const listElements = this.props.data.map( (item, index)=> {
            return (
                    <li className = "collection-item row" key = {item._id}> 
                        <div className="col s8">
                            {item.title}
                        </div>
                        <div className="col s4 right-align"> 
                            <button onClick={()=> { this.props.delete(item._id) }} className="btn red darken-2">Delete</button>
                        </div>
                    </li>
                )
        });

        return (
            <ul className="collection">
                {listElements}
            </ul>
        );
    }
}

export default List;