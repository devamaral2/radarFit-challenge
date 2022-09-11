/* eslint-disable react/jsx-filename-extension */
import { BiSearch, BiPlusCircle } from 'react-icons/bi';

export default function NavBar() {
  return (
    <div className="container navBar">
      <div className="container__input__search">
        <input className="input__search" type="text" placeholder="Procure por seu produto aqui" />
        <BiSearch className="icon__search" />
      </div>
      <BiPlusCircle className="icon__add" />
    </div>
  );
}
