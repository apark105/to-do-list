import React, { Component } from 'react';
import axios from 'axios'; 
import { BASE_URL, API_KEY } from '../helpers/common'
import { bindActionCreators } from 'redux';


class ItemView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            detail: null
        }
    }
    async componentDidMount(){
        console.log(this.props)
        console.log('Item View Props ', this.props.match.params.item_id)
        const resp = await axios.get(`${BASE_URL}/${this.props.match.params.item_id + API_KEY}`)
        console.log(resp)
        this.setState({
            title: resp.data.todo.title,
            detail: resp.data.todo.details
        })
    }
    render(){
        return (
            <div>
                <h1 className="center">View To Do Item</h1>
                <h5 className='center'>{this.state.title}</h5>
                <div className="row"><h6 className='center blue-text'>{this.state.detail}</h6></div>
               
            </div>
        )
    }
}

export default ItemView; 