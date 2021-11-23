import { data } from "./data";
import ItemCount from "./ItemCount";

const ItemList = () => {
    return(
        <>
        {
            data.map((dat) =>
            <div className="tarjetasFlex">
                <div className="tarjetasServicios media">
                    <img src={dat.image} alt={dat.titulo} className="mr-3"/>
                    <br/>
                    <h3 className="produTitulo">{dat.titulo}</h3>
                    <br/>
                    <p className=" precioText">${dat.precio}</p>
                    <ItemCount stock={100} initial={1}/>
                    <br/>
                    <br/>
                    <button className="botones"> Add to cart</button>
                    <button className="botones"> Details</button>
                </div>
            </div>
            )
        }
        </>
    )
};
export default ItemList;