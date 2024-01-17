import bcrypto from 'bcryptjs';
import { Token } from '../types/Token';
import { ServiceResponse } from '../types/ServiceResponse';
import { Login } from '../types/Login';
import UserModel from '../database/models/user.model';
import tokenJWT from '../utils/tokenJWT';

const verifyLogin = async ({ username, password }: Login): Promise<ServiceResponse<Token>> => {
  if (!username || !password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }

  const userExist = await UserModel.findOne({ where: { username } });

  if (!userExist) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const isPasswordValid = await bcrypto.compareSync(password, userExist.dataValues.password);
  if (!isPasswordValid) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const token = await tokenJWT.sign({ username, id: userExist.dataValues.id });
  return { status: 'SUCCESSFUL', data: { token } };
};

export default {
  verifyLogin,
};