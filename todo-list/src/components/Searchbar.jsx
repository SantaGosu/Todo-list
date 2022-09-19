import React from "react";

const Searchbar = () => {

    return (
        <>
        <ul className='list-group'>
            <li className="list-group-item"><input size="61" id="textBox" type="text" placeholder='What needs to be done?' onDoubleClick={(e) => setItem(e.target.value)} /></li>
            <li className='list-group-item' key={index}>{value}</li>
            <li className='list-group-item'> todos left</li>
        </ul>
        </>
    )
}

export default Searchbar;