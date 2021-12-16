import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
const { data } = require("../components/data");

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  let params = useParams();
  console.log(params);

  useEffect(() => {
    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        if (params.id) {
          res(data.filter((producto) => producto.id == params.id));
        } else {
          rej(console.log("Producto no encontrado"));
        }
      }, 2000);
    });
    getItem.then((producto) => {
      setProducto(producto);
    });
  }, [params.id]);
  console.log(producto);

  return (
    <div>
      <h3>Detalle de Producto:</h3>
      {producto.map((prod) => (
        <ItemDetail producto={prod} />
      ))}
    </div>
  );
};

export default ItemDetailContainer;


