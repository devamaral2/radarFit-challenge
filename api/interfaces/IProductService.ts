/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import IProduct from './IProduct';

export default interface IProductService {
  findAll(): Promise<IProduct[]>,
  findOne(search: string): Promise<IProduct | null>,
  findById(id: string): Promise<IProduct | null>,
  create(product: IProduct): Promise<void>,
  update(id: string, product: Partial<IProduct>): Promise<void>,
  saveRemoveFavorite(id: string, favorite: boolean): Promise<void>
  destroy(id: string): Promise<void>
}
