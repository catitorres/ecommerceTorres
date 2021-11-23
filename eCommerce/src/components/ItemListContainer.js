import { useEffect, useState } from "react";
import customFetch from "./customFetch";
import { data } from "./data";
import ItemList from "./itemList";


const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);


  useEffect(() => {
    customFetch(2000, data)
    .then ((result => setDatos(result))
    .catch((error => console.log(error))
  }, [])

  return (
      <>
      <ItemList ItemList = {datos}/>
        
      </>    
    );
  }
export default ItemListContainer;