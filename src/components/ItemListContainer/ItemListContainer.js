import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import loadingGif from "../images/loading_icon2.gif";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (!categoryId) {
      getProducts()
        .then((response) => {
          setProducts(response);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getProductsByCategory(categoryId)
        .then((response) => {
          setProducts(response);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId]);

  if (loading) {
    return (
      <div>
        <img
          className="loadingGif"
          src={loadingGif}
          alt="espere mientra carga la pagina"
        />
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Bienvenidos al Sneaker Store más grande del Perú </h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
