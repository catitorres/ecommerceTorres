import Item from "./item";


const ItemList = ({ items }) => {
    return (
    
      <div className="tarjetasFlex">
        { items.map((producto) => {
          return <Item key={producto.id} product={producto}></Item>;
        })}
      </div>
      
    );
  };
  export default ItemList;