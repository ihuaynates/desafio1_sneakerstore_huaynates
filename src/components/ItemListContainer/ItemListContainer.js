import "./ItemListContainer.css";
import { useState, useEffect } from "react";
/*import { getProducts, getProductsByCategory } from "../../asyncmock";*/
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import loadingGif from "../images/loading_icon2.gif";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef=  categoryId ? (query(collection(db,'products'), where('category','==', categoryId) ) ) : (collection(db,'products'))

    getDocs(collectionRef).then ( response =>{

      const productsFormatted= response.docs.map( doc => {
        return { id: doc.id, ...doc.data()   }
      } )
      setProducts(productsFormatted)
    }).catch(error =>{
      console.log(error)
    }).finally( ()=>{
      setLoading(false)
    }

    )

   /* if (!categoryId) {
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
    }*/
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
