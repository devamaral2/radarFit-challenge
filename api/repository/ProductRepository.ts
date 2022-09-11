import { DeleteResult } from 'mongodb';
import connectToDatabase from '../models/dbConnect';
import Product from '../models/Product';
import IProductRepository from '../interfaces/IProductRepository';
import IProduct from '../interfaces/IProduct';

export default class ProductRepository implements IProductRepository {
  constructor(private connection = connectToDatabase, private model = Product) {
    this.connection = connection;
    this.model = model;
    this.connection();
  }

  async findAll(): Promise<IProduct[]> {
    const products = await this.model.find({});
    return products;
  }

  async findOne(produto: string): Promise<IProduct | null> {
    const product = await this.model.findOne({ produto });
    return product;
  }

  async findById(id: string): Promise<IProduct | null> {
    const product = await this.model.findById(id);
    return product;
  }

  async create(payLoad: IProduct): Promise<void> {
    await this.model.create(payLoad);
  }

  async update(id: string, payLoad: IProduct): Promise<IProduct | null> {
    const product = await this.model.findByIdAndUpdate(id, payLoad, {
      new: true,
      runValidators: true,
    });
    return product;
  }

  async saveRemoveFavorite(id: string, favorite: boolean): Promise<IProduct | null> {
    const product = await this.model.findByIdAndUpdate(id, { favorite }, {
      new: true,
      runValidators: true,
    });
    return product;
  }

  async destroy(id: string): Promise<DeleteResult> {
    const product = await this.model.deleteOne({ _id: id });
    return product;
  }
}
