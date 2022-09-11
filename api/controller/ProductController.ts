import type { NextApiRequest, NextApiResponse } from 'next';
import IProductService from '../interfaces/IProductService';

export default class ProductController {
  constructor(public service: IProductService) {
    this.service = service;
  }

  async find(req: NextApiRequest, res: NextApiResponse) {
    const { q } = req.query;
    if (!q) {
      const products = await this.service.findAll();
      res.status(200).json(products);
    }
    if (typeof q === 'string') {
      try {
        const products = await this.service.findOne(q);
        res.status(200).json(products);
      } catch (e: any) {
        res.status(404).json({ messange: e.message });
      }
    }
    res.status(400).json({ messange: 'A pesquisa não foi bem sucedida' });
  }

  async findById(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      if (typeof id === 'string') {
        const product = await this.service.findById(id);
        res.status(200).json(product);
      }
      res.status(400).json({ messange: 'O id não foi encontrado' });
    } catch (e: any) {
      res.status(404).json({ messange: e.message });
    }
  }

  async create(req: NextApiRequest, res: NextApiResponse) {
    try {
      await this.service.create(req.body);
      res.status(201).end();
    } catch (e: any) {
      res.status(400).json({ messange: e.message });
    }
  }

  async update(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      if (typeof id === 'string') {
        await this.service.update(id, req.body);
        res.status(200).end();
      }
    } catch (e: any) {
      res.status(400).json({ messange: e.message });
    }
  }

  async saveRemoveFavorite(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      if (typeof id === 'string') {
        await this.service.update(id, req.body);
        res.status(200).end();
      }
    } catch (e: any) {
      res.status(400).json({ messange: e.message });
    }
  }

  async destroy(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      if (typeof id === 'string') {
        await this.service.destroy(id);
        res.status(204).end();
      }
      res.status(400).json({ messange: 'O id não foi encontrado' });
    } catch (e: any) {
      res.status(404).json({ messange: e.message });
    }
  }
}
