/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
// import IProduct from '../api/interfaces/IProduct';
import { getAllAPI, getBySearchAPI } from '../axios';
import CreateProduct from '../components/CreateProduct/CreateProduct';
import NavBar from '../components/NavBar/NavBar';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductDetail from '../components/ProductDetail/ProductDetail';

/* eslint-disable react/jsx-filename-extension */
export default function Home() {
  const [products, setProducts] = useState([] as any);
  const [detailedProduct, setDetailedProduct] = useState({});
  const [newProductOn, setNewProductOn] = useState(false);
  const [searchProduct, setSearchProduct] = useState('');

  const getProducts = async () => {
    const result = await getAllAPI();
    setProducts(result);
  };

  const getProductSearch = async () => {
    if (searchProduct === '') {
      await getProducts();
      return;
    }
    const result = await getBySearchAPI(searchProduct);
    if (result) {
      setProducts([result]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <nav>
        <NavBar
          searchProduct={searchProduct}
          setSearchProduct={setSearchProduct}
          setNewProductOn={setNewProductOn}
          getProductSearch={getProductSearch}
        />
      </nav>
      <main className="container container__main">
        <div className="container__list">
          {products.map((product: any, i: number) => (
            <ProductCard
              key={product._id}
              product={product}
              setDetailedProduct={setDetailedProduct}
              setProducts={setProducts}
              i={i}
            />
          ))}
        </div>
        <ProductDetail detailedProduct={detailedProduct} />
        { newProductOn && <CreateProduct /> }
      </main>
    </div>
  );
}
