import React from 'react'
import axios from 'axios'

let crimeData = ()=>{

    axios.get('crimes').then((data)=>{
        return console.log(data)
    }).catch(err=>console.log(err))
}

export default crimeData