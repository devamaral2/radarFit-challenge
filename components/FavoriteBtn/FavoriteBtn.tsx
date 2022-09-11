/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import { BsTag, BsTagFill } from 'react-icons/bs';
import { changeFavoriteAPI, getAllAPI } from '../../axios';
import IProduct from '../../api/interfaces/IProduct';

export default function FavoriteBtn({ setProducts, id, favorite }: {
  setProducts: (products: IProduct[]) => void,
  id: string,
  favorite: boolean,
}) {
  const changeFavorite = async () => {
    await changeFavoriteAPI(id, favorite);
    const products = await getAllAPI();
    setProducts(products);
  };

  if (favorite) {
    return (
      <BsTagFill
        onClick={() => changeFavorite()}
        className="icon__fav"
      />
    );
  }

  return (
    <BsTag
      onClick={() => changeFavorite()}
      className="icon__fav"
    />
  );
}
