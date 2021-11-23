import ItemCount from "./ItemCount";

const ItemDetail = ( { dat }) => {
    return( 
        <>
        {
            dat.image
            ?
            <>
            <img src={dat.image[0]} alt={dat.titulo} className="imageCandles"/>
            <h1> {dat.titulo} </h1>
            <p> {dat.description} </p>
            <ItemCount stock={100} initial={1}/>
            </>
            : <p>cargando...</p>
        }
        </>
    )
}

export default ItemDetail;