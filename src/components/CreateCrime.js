import React, { Component } from 'react'
import Button from './Button'

class CreateCrime extends Component{
    constructor(){
        super()
        this.state ={
            crime:{crime:'',date:''}
        }
    }

    handleChange=(event)=>{
        let  updatedCrime = {...this.state.crime}
        updatedCrime[event.target.name]=event.target.value
        this.setState({crime:updatedCrime},()=>{
            console.log(updatedCrime)
        })
    }

    submit =(event)=>{
        event.preventDefault()
        this.props.createCrimeSubmit(event,this.state.crime)
        let emptyCrime = {crime:'',date:''}
        this.setState({crime:emptyCrime})
        event.target.reset()
    }

    render(){
        return(
            <div>
                <h3>Report a Crime</h3>
                <form action="" onSubmit={this.submit}>
                    <div>
                        <label htmlFor="">Crime:</label>
                        <input 
                        type="text"
                        placeholder="crime"
                        name="crime"
                        value={this.state.crime.crime}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Date:</label>
                        <input 
                        type="text"
                        placeholder="date"
                        name="date"
                        value={this.state.crime.date}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Button>Submit</Button>
                        
                        
                    </div>
                </form>
            </div>
        )
    }

}

export default CreateCrime