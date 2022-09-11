/* eslint-disable react/jsx-filename-extension */
import { BsTag } from 'react-icons/bs';
import IProduct from '../../api/interfaces/IProduct';

export default function ProductDetail({ detailedProduct }:
  {detailedProduct: IProduct}) {
  return (
    <div className="container">
      <div>
        <h2>{detailedProduct.produto}</h2>
        <span>{detailedProduct.valor}</span>
        <p>{detailedProduct.descricao}</p>
      </div>
      <button
        type="button"
      >
        Editar
      </button>
      <BsTag />
    </div>
  );
}
