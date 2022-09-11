/* eslint-disable react/jsx-filename-extension */
import { BsTag, BsTagFill } from 'react-icons/bs';
// import IProduct from '../../api/interfaces/IProduct';

export default function ProductDetail({ detailedProduct }:
  { detailedProduct: any }) {
  return (
    <div className="container card">
      <div>
        <h2>{detailedProduct.produto}</h2>
        <span>{`R$ ${detailedProduct.valor}`}</span>
        <p>{detailedProduct.descricao}</p>
      </div>
      <div className="container container__btn__details">
        <button
          className="btn btn-primary btn__edit"
          type="button"
        >
          Editar
        </button>
        {detailedProduct.favorite ? <BsTagFill className="icon__fav" /> : <BsTag className="icon__fav" />}

      </div>
    </div>
  );
}
