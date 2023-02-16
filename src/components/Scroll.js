import React from "react";

// Create scroll component to ensure searchbox is at top of page when scrolling
const Scroll = (props) => {
    return (
        <div style={{overflowY: "scroll", border: "1px solid black", height: "50rem"}}>
            {props.children}
        </div>
    );
}

export default Scroll;