/* eslint-disable react/jsx-filename-extension */
import { BsTag, BsTagFill } from 'react-icons/bs';
import IProduct from '../../api/interfaces/IProduct';

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="container">
      <div>
        <h2>{product.produto}</h2>
        <span>{product.valor}</span>
      </div>
      {product.favorite ? <BsTagFill /> : <BsTag />}
    </div>
  );
}
