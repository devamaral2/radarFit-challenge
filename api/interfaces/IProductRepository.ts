/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import { DeleteResult } from 'mongodb';
import IProduct from './IProduct';

export default interface IProductRepository {
  findAll(): Promise<IProduct[]>,
  findOne(search: string): Promise<IProduct | null>,
  findById(id: string): Promise<IProduct | null>,
  create(product: IProduct): Promise<void>,
  update(id: string, product: Partial<IProduct>): Promise<IProduct | null>,
  saveRemoveFavorite(id: string, favorite: boolean): Promise<IProduct | null>,
  destroy(id: string): Promise<DeleteResult>
}
