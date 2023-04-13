import React from "react";

// Create card for each robot friend using image from robohash.org
const Card = ({name, email, phone, city, id}) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt={name + "'s Profile"} src={`https://robohash.org/${id}?}200x200`} />
            <div>
                 <h2>{name}</h2>
                 <ul className="list">
                    <li>Email: {email}</li>
                    <li>Phone: {phone}</li>
                    <li>City: {city}</li>
                 </ul>
            </div>       
        </div>
    );
} 

export default Card;