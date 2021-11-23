import { useEffect, useState } from "react";
import customFetch from "./customFetch";
import { data } from "./data";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, data)
            .then((result) => setDato(result))
            .catch((err) => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;