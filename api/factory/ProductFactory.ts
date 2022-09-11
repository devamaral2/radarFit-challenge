import ProductController from '../controller/ProductController';
import ProductRepository from '../repository/ProductRepository';
import ProductService from '../service/ProductService';

const repository = new ProductRepository();
const service = new ProductService(repository);
const controller = new ProductController(service);

export default controller;
