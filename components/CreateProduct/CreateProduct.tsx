/* eslint-disable react/jsx-filename-extension */
export default function CreateProduct() {
  return (
    <div className="container card container__creation">
      <h2>Novo Produto</h2>
      <div>
        <input type="text" />
        <input type="number" />
      </div>
      <input type="text" />
      <div>
        <button type="button">ADD</button>
        <button type="button">Fechar</button>
      </div>
    </div>
  );
}
