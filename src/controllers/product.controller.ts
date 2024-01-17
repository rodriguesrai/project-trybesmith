import { Request, Response } from 'express';
import productService from '../services/product.service';

const createProduct = async (req: Request, res: Response) => {
  const { name, price, orderId } = req.body;
  const serviceResponse = await productService.createProduct({ name, price, orderId });
  if (serviceResponse.status === 'SUCCESSFUL') {
    return res.status(201).json(serviceResponse.data);
  }
};

export default { 
  createProduct,
};