//building a form, need inputs. As such, we need a class component.

import React, { Component } from 'react';

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
        return(
                <form onSubmit={this.handleAddingitem}>
                    <div className="row">
                        <div className="input-field col s8 offset-s2">
                            <div className="input-field">
                                <input 
                                    type="text" 
                                    value={title}
                                    onChange={e=> {this.setState({title: e.target.value})}}
                                />
                                <label>Title</label>
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
        )
    }
}
export default AddItem; 