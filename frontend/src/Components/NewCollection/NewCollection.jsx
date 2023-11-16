import React from "react";
import './NewCollection.css';
import newCollections from '../Data/Data';
import Item from '../Item/Item';

const NewCollection = () =>{
    return (
        <div className="new-collection">
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collections">
                {
                    newCollections.map((item, i)=>{
                        return (<Item key={i} id={item.id} image={item.image} brand={item.brand} name={item.name} old_price={item.old_price} new_price={item.new_price}/>)
                    })
                }
            </div>
        </div>
    )
}

export default NewCollection;