import ItemCount from "./ItemCount";



const Item = ({ product }) => {
    return (
      <>
            <div className="tarjetasServicios media">
                    <img src={product.image} alt={product.titulo} className="mr-3"/>
                    <br/>
                    <h3 className="produTitulo">{product.titulo}</h3>
                    <br/>
                    <p className=" precioText">${product.precio}</p>
                    <ItemCount stock={100} initial={1}/>
                    <br/>
                    <br/>
                    <button className="botones"> Add to cart</button>
                    <button className="botones"> Details</button>
            </div>
      </>
    );
  };
  export default Item;