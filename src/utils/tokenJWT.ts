import Jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/Token';

const secret = process.env.JWT_SECRET || 'secret';

const sign = (payload: TokenPayload): string => Jwt.sign(payload, secret);

const verify = (token: string): TokenPayload => Jwt.verify(token, secret) as TokenPayload;

export default {
  sign,
  verify,
};