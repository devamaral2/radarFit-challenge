/* eslint-disable react/jsx-filename-extension */
export default function CreateProduct() {
  return (
    <div className="container__creation">
      <h2>Novo Produto</h2>
      <label htmlFor="name" className="form-label">
        Produto
        <input className="form-control" id="name" placeholder="Digite o nome do produto" />
      </label>
      <label htmlFor="price" className="form-label">
        Valor
        <input type="number" className="form-control" id="price" placeholder="Digite o valor do produto" />
      </label>

      <label htmlFor="description" className="form-label">
        Descrição
        <textarea className="form-control textarea__descricao" id="description" placeholder="Digite aqui a descrição do produto" />
      </label>
      <div>
        <button className="btn btn-primary btn__edit" type="button">ADD</button>
        <button className="btn btn-primary btn__edit" type="button">Fechar</button>
      </div>
    </div>
  );
}
