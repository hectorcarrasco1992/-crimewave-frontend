import React from 'react'

const Search =(props)=>{
    return (
        <div>
            <form action="">
                <input type="text"
                onChange = {props.handleChange}
                placeholder='Search...'
                value={props.searchTerm}
                />
            </form>
        </div>
    )
}

export default Search