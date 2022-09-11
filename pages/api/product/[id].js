/* eslint-disable consistent-return */
import ProductFactory from '../../../api/factory/ProductFactory';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      ProductFactory.findById(req, res);
      break;

    case 'PUT':
      ProductFactory.update(req, res);
      break;

    case 'PATCH':
      ProductFactory.saveRemoveFavorite(req, res);
      break;

    case 'DELETE':
      ProductFactory.destroy(req, res);
      break;

    default:
      res.status(500).json({ messange: 'Erro interno não identificado' });
      break;
  }
}
