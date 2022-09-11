/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
// import IProduct from '../api/interfaces/IProduct';
import { getAllAPI } from '../axios';
import NavBar from '../components/NavBar/NavBar';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductDetail from '../components/ProductDetail/ProductDetail';

/* eslint-disable react/jsx-filename-extension */
export default function Home() {
  const [products, setProducts] = useState([] as any);
  const [detailedProduct, setDetailedProduct] = useState({});

  const getProducts = async () => {
    const result = await getAllAPI();
    setProducts(result);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main className="container container__main">
        <div className="container__list">
          {products.map((product: any, i: number) => (
            <ProductCard
              key={product._id}
              product={product}
              setDetailedProduct={setDetailedProduct}
              i={i}
            />
          ))}
        </div>
        <ProductDetail detailedProduct={detailedProduct} />
      </main>
    </div>
  );
}
