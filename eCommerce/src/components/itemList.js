import Item from "./item";

const ItemList = ({ items }) => {
    return (
        <div className="tarjetasFlex">
            { items.length > 0 ? (
                items.map((item) => <Item key={item.id} {...item} />)
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};
export default ItemList;