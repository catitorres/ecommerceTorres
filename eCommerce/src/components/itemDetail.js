import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ( { producto }) => {
    const { id, precio, titulo, image, description } = producto;
    console.log(producto);
    return( 
                

            <>
            <img src={image} alt={titulo} className="mr-3"/>
            <h1> {titulo} </h1>
            <p> {description} </p>
            <p>${precio}</p>
            <ItemCount stock={100} initial={1}/>
            </>
            

    )
}

export default ItemDetail;

