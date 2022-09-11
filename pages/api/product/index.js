import dbConnect from '../../../api/models/dbConnect';
import ProductFactory from '../../../api/factory/ProductFactory';

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case 'GET':
      ProductFactory.find(req, res);
      break;
    case 'POST':
      ProductFactory.create(req, res);
      break;
    default:
      res.status(500).json({ messange: 'Erro interno não identificado' });
      break;
  }
}
