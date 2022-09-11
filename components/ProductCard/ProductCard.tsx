/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import { useEffect } from 'react';
import { BsTag, BsTagFill } from 'react-icons/bs';
import IProduct from '../../api/interfaces/IProduct';

export default function ProductCard({ product, setDetailedProduct, i }:
  {
    product: IProduct,
    // eslint-disable-next-line no-unused-vars
    setDetailedProduct: (prod: IProduct) => void,
    i: number
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
      {product.favorite ? <BsTagFill className="icon__fav" /> : <BsTag className="icon__fav" />}
    </div>
  );
}
