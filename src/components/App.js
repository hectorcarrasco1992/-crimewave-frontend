import React, { Component } from 'react'
import axios from 'axios'
import Crimes from './Crime'
import Search from './Search'
import CreateCrime from './CreateCrime'
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

    onDelete=(id)=>{
        axios.delete(`/crime/${id}`).then(()=>
        this.loadCrimes())
        
    };
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
    };

    createCrimeSubmit=(event,crime)=>{
        event.preventDefault()
        let axiosConfig = {
            headers:{
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*'

            }
        }

        axios.post('/crime',crime,axiosConfig).then(()=>{
            this.loadCrimes()
        })

    }
    render(){
        // console.log(this.state.crimes[0].crime)
        return(
            <div>
                <h1 style={{display:'flex',justifyContent:'center'}}>Crimes in WilliamsBurg </h1>
                <hr style={{width:'50%'}}/>
                <Search
                style= {{display:'flex', justifyContent:'center'}}
                handleChange = {this.handleChange}
                searchTerm = {this.state.searchTerm}
                />

            
                <Crimes
                    crimes={this.state.crimes}
                    searchTerm ={this.state.searchTerm}
                    onDelete={this.onDelete}

                />

                <CreateCrime
                createCrimeSubmit ={this.createCrimeSubmit}
                />
            </div>
        )
    }
}

export default App
