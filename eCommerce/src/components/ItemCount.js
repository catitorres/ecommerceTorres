import { useState } from "react";


const ItemCount = (props) =>{
    const [cantidad, setCantidad] = useState (1);

    const increment = () => {
        if (cantidad < props.stock)setCantidad(cantidad+1);
    }
    const decrement = () => {
       if (cantidad > 1) setCantidad(cantidad-1);
    }

    return(
        <>
            <button onClick={decrement}className="botones">-</button>
            {cantidad}
            <button onClick={increment}className="botones">+</button>
            
        </>
    );
}

export default ItemCount;