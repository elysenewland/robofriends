import React from "react";

// Create the search box's style and functionality. Reflect the user's input changes in the search box
const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2 tc">
            <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search Robofriends" onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;