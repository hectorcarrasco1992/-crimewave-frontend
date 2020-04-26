import React from 'react'


let searchCrime = (term)=>(item)=> item.crime.toLowerCase().includes(term.toLowerCase())

export  default searchCrime