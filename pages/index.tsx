import { useEffect, useState } from 'react';
import { getAllAPI } from '../axios';
import NavBar from '../components/NavBar/NavBar';
import ProductCard from '../components/ProductCard/ProductCard';

/* eslint-disable react/jsx-filename-extension */
export default function Home() {
  const [products, setProducts] = useState([]);

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
      <main className="container">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </main>
    </div>
  );
}
