// order.controller.ts

import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import orderService from '../services/order.service';

const getAllOrders = async (req: Request, res: Response) => {
  const serviceResponse = await orderService.getAllOrders();
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

export default {
  getAllOrders,
};