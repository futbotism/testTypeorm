import * as jwt from 'jsonwebtoken';
import { Component } from '@nestjs/common';
import { ITokenData } from '../shared';

@Component()
export class AuthService {
  async createToken(tokenData: ITokenData) {
    const expiresIn = 60 * 60;
    const secretOrKey = 'secret';
    const token = jwt.sign(tokenData, secretOrKey, { expiresIn });
    return {
      expires_in: expiresIn,
      access_token: token,
    };
  }

  async validateUser(signedUser): Promise<boolean> {
    // put some validation logic here
    // for example query user by id / email / username
    return true;
  }
}
