import React from 'react'
import "../Fact.css"

const NumberFact =(props)=>{
    return(
        <div className="fact-main-div">
            <h1 style={{color:"white"}}>Get a Random Fact about A random Number</h1>
            <button type="submit" onClick={props.createNumSubmit}>Gimme the Loot</button>
            {props.numberFact.map((item)=>{
                return <p style={{color:"white"}}>{item}</p>
            })}
            
       </div>
    )
}

export default NumberFact