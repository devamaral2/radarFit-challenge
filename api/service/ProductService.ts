/* eslint-disable no-extra-semi */
import IProductRepository from '../interfaces/IProductRepository';
import IProductService from '../interfaces/IProductService';
import IProduct from '../interfaces/IProduct';
import joiValidation from '../utils/joiValidation';

const error = new Error('Não foi encontrado nenhum produto no banco de dados');

export default class ProductService implements IProductService {
  constructor(public repository: IProductRepository) {
    this.repository = repository;
  }

  async findAll(): Promise<IProduct[]> {
    const products = await this.repository.findAll();
    return products;
  }

  async findOne(produto: string): Promise<IProduct | null> {
    const product = await this.repository.findOne(produto);
    if (!product) throw error;
    return product;
  }

  async findById(id: string): Promise<IProduct | null> {
    const product = await this.repository.findById(id);
    if (!product) throw error;
    return product;
  }

  async create(payLoad: IProduct): Promise<void> {
    joiValidation(payLoad);
    const product = {
      ...payLoad,
      favorite: false,
      created: new Date(),
      updated: new Date(),
    };
    await this.repository.create(product);
  }

  async update(id: string, payLoad: IProduct): Promise<void> {
    const product = {
      ...payLoad,
      updated: new Date(),
    };
    const result = await this.repository.update(id, product);
    if (!result) throw error;
  }

  async saveRemoveFavorite(id: string, favorite: boolean): Promise<void> {
    const result = await this.repository.saveRemoveFavorite(id, favorite);
    if (!result) throw error;
  }

  async destroy(id: string): Promise<void> {
    const result = await this.repository.destroy(id);
    if (result.deletedCount === 0) throw error;
  }
};
