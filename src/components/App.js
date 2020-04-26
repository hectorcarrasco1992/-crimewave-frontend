import React, { Component } from 'react'
import axios from 'axios'
import Crimes from './Crime'
import Search from './Search'
import crimeData from '../data/data'
class App extends Component{
    constructor(){
        super()
        this.state = {
            crimes: [],
            searchTerm:'',
            crime:[]
        }
    }
    loadCrimes =()=>{
        const url = '/crimes' // sets our backend file to the url
        
        axios.get(url).then((crimes)=>{
            this.setState({crimes: crimes.data})
        })
    }

    handleChange=(event)=>{
        this.setState({searchTerm:event.target.value},()=>{
            console.log(this.state.searchTerm)
        })
    };
    componentDidMount(){
        this.loadCrimes()
    }
    render(){
        // console.log(this.state.crimes[0].crime)
        return(
            <div>
                <h1 style={{display:'flex',justifyContent:'center'}}>Crimes in WilliamsBurg </h1>
                <Search
                handleChange = {this.handleChange}
                searchTerm = {this.state.searchTerm}
                />

            
                <Crimes
                    crimes={this.state.crimes}
                    searchTerm ={this.state.searchTerm}
                />
            </div>
        )
    }
}

export default App
