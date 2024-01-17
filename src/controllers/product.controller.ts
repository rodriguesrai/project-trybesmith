// product.controller.ts

import { Request, Response } from 'express';
import productService from '../services/product.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const createProduct = async (req: Request, res: Response) => {
  const { name, price, orderId } = req.body;
  const serviceResponse = await productService.createProduct({ name, price, orderId });
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

const getAllProducts = async (req: Request, res: Response) => {
  const serviceResponse = await productService.getAllProducts();
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

export default { 
  createProduct,
  getAllProducts,
};