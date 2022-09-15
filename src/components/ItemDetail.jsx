import React from "react";
import ItemCount from "./ItemCount";



const ItemDetail = ({item}) => {
    return(
        
            <div className="col-xs-12">
                <img src={item.imagen} alt={item?.nombre} />
                
                    <h2>{item?.nombre}</h2>
                    <p>{item?.descripcion}</p>
                    <h3>${item?.precio}</h3>
                    
                    <ItemCount stock = {5} initial = {1} onAdd = {0}/>
                
            </div>
        
    )
}

export default ItemDetail;