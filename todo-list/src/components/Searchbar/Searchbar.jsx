import React from "react";
import { useState } from "react";

const Searchbar = (props) => {
    const [id, setId] = useState('');

    const onClick = () => {
        props.setItem(id)
    }

    return (
        <>
            <input size="61" id="textBox" type="text" placeholder='What needs to be done?' onChange={(e) => setId(e.target.value)} />
            <input id="search-input" className="btn btn-primary mb-2" type="submit" value="Search" onClick={onClick}/>    
        </>
    )
}

export default Searchbar;