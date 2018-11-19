import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/app.css'
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import List from './list';
import AddItem from './add_item';
import listData from '../dummy_data/list';
import ItemView from './item_view';
import { BASE_URL, API_KEY } from '../helpers/common'

// const BASE_URL = 'http://api.reactprototypes.com/todos';
// const API_KEY = '?key=56565656';

class App extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            list: [],
            error: ''
        }
    }
    //property that is equal to a function 
    addItem = async (item) => {
        const resp = await axios.post(BASE_URL + API_KEY, item);

        console.log('add item resp: ', resp);
        this.getListData();
    }
    deleteItem = async(id) => {
        console.log('delete item with ID: ', id);
        // 'http://api.reactprototypes.com/todos/5be4a5e6d2af63260da32aa5?key=56565656';
        // const resp = await axios.delete(`${BASE_URL}/${id + API_KEY}`);
        await axios.delete(`${BASE_URL}/${id + API_KEY}`);
        // console.log('delete resp', resp);
        this.getListData();
    }

    componentDidMount(){
        this.getListData();
    }

    async getListData(){
        try {
            const resp = await axios.get(BASE_URL + API_KEY);

            this.setState({
                list: resp.data.todos
            });
        } catch (err) {
            this.setState ({
                error: 'Error Getting Todos'
            })
        }
    }
        //call server to get data
        // axios.get(BASE_URL + API_KEY).then( (resp) => {
        //     console.log('server resp: ', resp)

        //     this.setState({
        //         list: resp.data.todos
        //     })
        // }).catch( (err) => {
        //     console.log('Request Error: ',err.message);

        //     this.setState({
        //         error: 'Error Getting Todos'
        //     })
        // } )
        
    
    render(){
        const {error, list} = this.state; 
        return (
            <div className="container">
                <Route exact path="/" render={ (props) => {
                   return <List delete={this.deleteItem} data={list} error={error} {...props}/>
                }}/>
                <Route path='/add-item' render={ (routingProps) => {
                    console.log(routingProps)
                    return <AddItem add={this.addItem} {...routingProps}/>
                }}/>
                <Route path="/item/:item_id" component={ItemView}/>
            </div>
        )
   }   
}

export default App;
