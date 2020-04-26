import React from 'react'
import searchCrime from '../service/searchCrime'
import Button from './Button'

const Crimes = (props)=>{
    return(
        <div>
            <h3>These are the last reported crimes in WilliamsBurg</h3>
            {props.crimes.filter(searchCrime(props.searchTerm)).map((item,i)=> {
                return(
                    <div>
                    <p>Crime:{item.crime}</p>
                    <p>Date:{item.date}</p>
                    <Button
                    onClick={()=>{
                        let id = item._id
                        props.onDelete(id)
                    }}
                    >Delete</Button>
                    
                    
                    </div>
                )
            })}
            
        </div>
    )
}

export default Crimes