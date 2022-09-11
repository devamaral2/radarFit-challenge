/* eslint-disable react/jsx-filename-extension */
import { BsTag } from 'react-icons/bs';

export default function ProductDetail() {
  return (
    <div className="container">
      <div>
        <h2>Produto</h2>
        <span>Valor</span>
        <p>Descricao</p>
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
