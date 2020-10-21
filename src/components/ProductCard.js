import React from "react";

function ProductCard(props) {
    const style = {
        width: 150,
        backgroundColor: "grey"
    }

    return (
        <div style={style}>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>£ {props.price}</p>
        </div>
    )
}

export default ProductCard;