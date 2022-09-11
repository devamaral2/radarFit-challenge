/* eslint-disable react/jsx-filename-extension */
import { BiSearch, BiPlusCircle } from 'react-icons/bi';

export default function NavBar() {
  return (
    <div className="container">
      <div>
        <input type="text" placeholder="Procure por seu produto aqui" />
        <BiSearch />
      </div>
      <BiPlusCircle />
    </div>
  );
}
