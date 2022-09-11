/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import { BiSearch, BiPlusCircle } from 'react-icons/bi';

export default function NavBar({
  setNewProductOn,
  searchProduct,
  setSearchProduct,
  getProductSearch,
}: {
  setNewProductOn: (plug: any) => void,
  searchProduct: string,
  setSearchProduct: (search: string) => void,
  getProductSearch(): Promise<void>
}) {
  return (
    <div className="container navBar">
      <div className="container__input__search">
        <input
          className="input__search"
          type="text"
          placeholder="Procure por seu produto aqui"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
        <BiSearch
          onClick={getProductSearch}
          className="icon__search"
        />
      </div>
      <BiPlusCircle
        onClick={() => setNewProductOn((prev: any) => !prev)}
        className="icon__add"
      />
    </div>
  );
}
