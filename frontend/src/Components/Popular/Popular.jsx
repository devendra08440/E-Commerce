import React from "react";
import './Popular.css';
import Products from '../Data/Data';
import Item from '../Item/Item';

const Popular = () => {
    return (
        <div className="popular">
            <h1>POPULAR IN MEN</h1>
            <hr />
            <div className="popular-item">
                {Products.map((item, i)=>{
                    return <Item key={i} id={item.id} brand={item.brand} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
                })}
            </div>
        </div>
    )
}

export default Popular;