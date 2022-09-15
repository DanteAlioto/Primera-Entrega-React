import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import products from "./products";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);





    
    useEffect(() => {

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);





    return(
        <div className="container">

            <ItemList items = {items}/>
            <hr />
        </div>
    )
}

export default ItemListContainer;
