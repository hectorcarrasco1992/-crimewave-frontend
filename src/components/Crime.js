import React from 'react'

const Crimes = (props)=>{
    return(
        <div>
            {props.crimes.map((item,i)=> {
                return(
                    <div>
                    <p>Crime:{item.crime}</p>
                    <p>Date:{item.date}</p>
                    
                    
                    </div>
                )
            })}
            
        </div>
    )
}

export default Crimes