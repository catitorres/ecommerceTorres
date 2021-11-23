import ItemCount from "./ItemCount";

const Item = ( { titulo, image, precio }) => {
    return (
        
        <div>
                <div className="tarjetasServicios media">
                    <img src={image} alt={titulo} className="mr-3"/>
                    <br/>
                    <h3 className="produTitulo">{titulo}</h3>
                    <br/>
                    <p className=" precioText">${precio}</p>
                    <ItemCount stock={100} initial={1}/>
                    <br/>
                    <br/>
                    <button className="botones"> Add to cart</button>
                    <button className="botones"> Details</button>
                </div>
        </div>
        
    )
}

export default Item;