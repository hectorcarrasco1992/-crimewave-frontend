import React, { Component } from 'react'
import axios from 'axios'
import Crimes from './Crime'
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
    componentDidMount(){
        this.loadCrimes()
    }
    render(){
        // console.log(this.state.crimes[0].crime)
        return(
            <div>
            
            <Crimes
            crimes={this.state.crimes}
            />
            </div>
        )
    }
}

export default App
