import React from "react";
import Card from "./Card.js"

// Create card list containing each robot friend's card. Use fragments (<>) vs. div for best practice
const CardList = ({robots}) => {
    return (
        <>
            {robots.map((user, i) => { 
                return (
                    <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
                );
            })
            }
        </>
    );
}

export default CardList;