import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar";
import ItemListContainer from "./components/ItemListContainer";
import { data } from "./components/data";
import './App.css';
import ItemDetailContainer from "./components/itemDetailContainer";

function App() {
  return (
    <>
      <NavBar/>
      <h1 className="tituloProduct">PRODUCTS</h1>
      <div className="d-flex justify-content-around d-flex flex-wrap">
        <ItemListContainer itemListContainer={data}/>
      </div>
      <div>
        <ItemDetailContainer ItemDetailContainer = {data}/>
      </div>
      
    </>
    
  );
}

export default App;
