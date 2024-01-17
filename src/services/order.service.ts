// order.service.ts

import { literal } from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel from '../database/models/product.model';

const getAllOrders = async (): Promise<ServiceResponse<OrderSequelizeModel[]>> => {
  const response = await OrderModel.findAll({
    attributes: [
      'id',
      'userId',
      [literal('JSON_ARRAYAGG(productIds.id)'), 'productIds'],
    ],
    include: [{ model: ProductModel, as: 'productIds', foreignKey: 'orderId', attributes: [] }],
    group: ['Order.id'],
    raw: true,
  });

  return { status: 'SUCCESSFUL', data: response };
};

export default {
  getAllOrders,
};
