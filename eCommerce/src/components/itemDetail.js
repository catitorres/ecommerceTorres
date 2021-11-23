import ItemCount from "./ItemCount";

const ItemDetail = ( { item }) => {
    return( 
                

            <>
            <img src={item.image} alt={item.titulo} />
            <h1> {item.titulo} </h1>
            <p> {item.description} </p>
            <ItemCount stock={100} initial={1}/>
            </>
            

    )
}

export default ItemDetail;