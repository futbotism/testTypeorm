import { Component, Inject, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

import { IPattern } from './pattern.interface';
import { Pattern } from './pattern.entity';
import { UserService } from '../user/user.service';
import { ITokenData } from '../shared';

@Component()
export class PatternService {
  constructor(
    private readonly userService: UserService,
    @Inject('PatternRepositoryToken') private readonly patternRepository: Repository<Pattern>
  ) { }

  async create(rawPatternData: IPattern, tokenData: ITokenData): Promise<Pattern> {
    const pattern = new Pattern();
    pattern.title = rawPatternData.title;
    pattern.description = rawPatternData.description;
    pattern.intent = rawPatternData.intent;
    pattern.mindset = rawPatternData.mindset;
    pattern.weekDaysOccurring = rawPatternData.weekDaysOccurring;
    pattern.user = await this.userService.findOneByEmail(tokenData.email);

    const errors = await validate(pattern);
    if (errors.length > 0) throw new BadRequestException(errors.map(e => e.constraints));

    return this.patternRepository.save(pattern)
      .then(u => u)
      .catch(e => {
        throw new BadRequestException(e.detail);
      });
  }

  async read(tokenData: ITokenData): Promise<Pattern[]> {
    return await this.patternRepository.find({
      where: {
        user: tokenData.id
      }
    });
  }

  // async delete(_id: string, userId: string) {
  //   return await this.patternModel.findOneAndRemove({ userId, _id });
  // }

  // async update(_id: string, userId: string, data: Pattern) {
  //   return await this.patternModel.findByIdAndUpdate({ userId, _id }, data, { new: true });
  // }
}
