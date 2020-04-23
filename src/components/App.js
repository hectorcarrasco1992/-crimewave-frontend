import React, { Component } from 'react'
import axios from 'axios'
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
            {this.state.crimes.map((item,i)=> {
                return(
                    <div>
                    {(i===5 &&
                    <div> 
                        {item.crime} 
                    </div>
                    )}
                    
                    </div>
                )
            })}
            </div>
            
            )
    }
}

export default App
