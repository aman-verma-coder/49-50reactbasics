import React, { useState } from "react";
import './ProductItem.css';
import Item from "../components/Item.js";
import ItemDate from "../components/ItemDate.js";

function ProductItem(props) {
    const [name, setname] = useState(props.name);
    function clickHandler() {
        setname("Popcorn");
        console.log("Button clicked");
    }
    return (
        <div className='productItem'>
            <Item name={name}></Item>
            <ItemDate date={props.date}></ItemDate>
            <button onClick={clickHandler}>Add to Cart</button>
        </div>
    )
}
export default ProductItem;