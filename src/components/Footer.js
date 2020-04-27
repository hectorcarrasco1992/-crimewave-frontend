import React from 'react'
const Footer =()=>{
    return(
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"black",width:"100vw",margin:0,padding:0}}>
            <ul style={{listStyle:"none", color:"white",display:"flex",justifyContent:"space-evenly"}} >
                ||<li>Hector Carrasco </li>||
                <a href="http://crimeometer.com" target="_blank" rel="noopener noreferrer">Crimeometer</a>||
                <a href="http://numbersapi.com/#42" target="_blank" rel="noopener noreferrer">Numbers Api</a>||
            </ul>
        </div>
    )
}
export default Footer