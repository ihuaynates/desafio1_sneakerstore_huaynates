import { useState, useEffect } from "react";
/*import { getProductsById } from "../../asyncmock";*/
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();

  const params = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", params.productId);

    getDoc(docRef)
      .then((doc) => {
        const productsFormatted = { id: doc.id, ...doc.data() };
        setProduct(productsFormatted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Detalle del producto</h1>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailContainer;
