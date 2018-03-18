import { Component, Inject, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

import { UserI } from './user.interface';
import { User } from './user.entity';

@Component()
export class UserService {
  constructor(@Inject('UserRepositoryToken') private readonly userRepository: Repository<User>) { }

  async create(newUser: UserI) {
    const user = new User();
    user.email = newUser.email;
    user.password = newUser.password;

    const errors = await validate(user);
    if (errors.length > 0) throw new BadRequestException(errors.map(e => e.constraints));

    return this.userRepository.save(user)
      .then(u => u)
      .catch(e => {
        throw new BadRequestException(e.detail);
      });
  }

  async find(userReq: UserI): Promise<User> {

    const user = await this.findOneByEmail(userReq.email);

    if (!user) {
      throw new BadRequestException('Email not found');
    }

    if (userReq.password !== user.password) {
      throw new BadRequestException('Password was incorrect');
    }

    return user;
  }

  findOneByEmail(email: string) {
    const where = { email };
    return this.userRepository.findOne({ where });
  }
}
