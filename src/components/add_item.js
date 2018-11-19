//building a form, need inputs. As such, we need a class component.

import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class AddItem extends Component {
    state = {
        title: '',
        details: ''
    }

    handleAddingitem = (event) => {
        event.preventDefault();

        console.log('New To Do Item:', this.state)

        this.props.add(this.state)

        this.setState({
            title: '',
            details: ''
        })
    }

    render(){
        const {title, details} = this.state;
        console.log(this.props)
        return(
            <div>
                
                <h1 className="center">Add To Do Item</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to="/" className="btn green-darken-2">Back to List</Link>
                    </div>
                </div>
                
                <form onSubmit={this.handleAddingitem}>
                    <div className="row">
                        <div className="input-field col s8 offset-s2">
                            <div className="input-field">
                                <label>Title</label>
                                <input 
                                    type="text" 
                                    value={title}
                                    onChange={e=> {this.setState({title: e.target.value})}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s8 offset-s2">
                            <div className="input-field">
                                <input 
                                    type="text" 
                                    value={details}
                                    onChange={e=> {this.setState({details: e.target.value})}}
                                />
                                <label>Details</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s8 offset-s2 right-align">
                            <button className="btn blue darken-2">Add Item</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
export default AddItem; 