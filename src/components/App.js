import React, { Component } from 'react'
import axios from 'axios'
import Crimes from './Crime'
import Search from './Search'
import CreateCrime from './CreateCrime'
import NumberFact from './NumberFact'
import Footer from './Footer'


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
            numberSearch:'',
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
    // loadNumber =()=>{
    //     const url = '/number'

    //     axios.get(url).then((result)=>{
    //         console.log(result.data)
    //     })
    // }

    handleChange=(event)=>{
        this.setState({searchTerm:event.target.value},()=>{
            console.log(this.state.searchTerm)
        })
    };
    handleNumChange=(event)=>{
        this.setState({numberSearch:event.target.value},()=>{
            console.log(this.state.numberSearch)
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
    createNumSubmit=(event,num)=>{
        event.preventDefault()
        const url = 'crime/number'
        let axiosConfig = {
            headers:{
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*'

            }
        }
        let newFact = [...this.state.numberFact]

        axios.get(url,axiosConfig).then((result)=>{
            newFact.unshift(result.data)
            return this.setState(this.state.numberFact=newFact)
        })
    }
    // numSubmit =(event)=>{
    //     event.preventDefault()
    //     this.createNumSubmit(event,this.state.numberFact)
    //     let emptyFact = {numberFact:''}
    //     this.setState({numberFact:emptyFact})
    //     // event.target.reset()
    // }
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

            
                <NumberFact style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}
                createNumSubmit = {this.createNumSubmit}
                numberFact = {this.state.numberFact}
                ></NumberFact>

                <Footer></Footer>
                

                

            </div>
                </div>
        )
    }
}

export default App
