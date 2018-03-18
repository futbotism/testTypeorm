import * as jwt from 'jsonwebtoken';
import { ITokenData } from '..';

export function decodeToken(headers: string): ITokenData {
  const token = headers.split(' ')[1];
  return jwt.verify(token, 'secret');
}
