/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import { useEffect } from 'react';
import IProduct from '../../api/interfaces/IProduct';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';

export default function ProductCard({
  product, setDetailedProduct, i, setProducts,
}:
  {
    product: IProduct & { _id: string},
    // eslint-disable-next-line no-unused-vars
    setDetailedProduct: (prod: IProduct) => void,
    i: number,
    // eslint-disable-next-line no-unused-vars
    setProducts: (products: IProduct[]) => void
  }) {
  useEffect(() => {
    if (i === 0) setDetailedProduct(product);
  }, []);

  return (
    <div className="container container__product">
      <div
        onClick={() => setDetailedProduct(product)}
        className="container container__card__info"
      >
        <h6>{product.produto}</h6>
        <span>{`R$ ${product.valor}`}</span>
      </div>
      <FavoriteBtn
        favorite={product.favorite}
        id={product._id}
        setProducts={setProducts}
      />
    </div>
  );
}
