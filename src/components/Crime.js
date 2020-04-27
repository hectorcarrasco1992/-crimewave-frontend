import React from 'react'
import searchCrime from '../service/searchCrime'
import Button from './Button'
import '../Button.css'
import '../CrimeContent.css'

const Crimes = (props)=>{
    return(
        <div className='crime-body'>
            <h3 className='h3-crime'>These are the last reported crimes in WilliamsBurg</h3>
            {props.crimes.filter(searchCrime(props.searchTerm)).map((item,i)=> {
                return(
                    <div className='crime-content'>
                    <p>Crime:{item.crime}</p>
                    <p>Date:{item.date}</p>
                    <Button
                    className='button-delete'
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