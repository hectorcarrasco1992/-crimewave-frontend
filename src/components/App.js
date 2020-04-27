import React, { Component } from 'react'
import axios from 'axios'
import Crimes from './Crime'
import Search from './Search'
import CreateCrime from './CreateCrime'


import crimeData from '../data/data'
import '../AppStyle.css'
import Button from './Button'
class App extends Component{
    constructor(){
        super()
        this.state = {
            crimes: [],
            searchTerm:'',
            crime:[],
            numberFact:[]
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
    loadNumber =()=>{
        const numUrl = '/number' // sets our backend file to the url
        
        axios.get(numUrl).then((results)=>{
            this.setState({numberFact: results.data})
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
            <div className='app-body' style={{margin:0,padding:0} }>
                <h1 style={{display:'flex',justifyContent:'center',textShadow:'red 1px 1px'}}>Crimes in WilliamsBurg </h1>
                <hr style={{width:'50%'}}/>
                
                <div style={{margin:0,padding:0}}>

                <Search
                style= {{display:'flex', justifyContent:'center',width:"100%"}}
                handleChange = {this.handleChange}
                searchTerm = {this.state.searchTerm}
                />

                <CreateCrime
                createCrimeSubmit ={this.createCrimeSubmit}
                />
                <hr style={{width:'50%'}}/> 
                <Crimes
                    crimes={this.state.crimes}
                    searchTerm ={this.state.searchTerm}
                    onDelete={this.onDelete}
                    
                    />

            <h1>{this.state.numberFact}</h1>
                <form action="">
                    <input type="text" name="number"/>
                    <Button type="submit" onClick={this.loadNumber}></Button>
                </form>
                

                

            </div>
                </div>
        )
    }
}

export default App
