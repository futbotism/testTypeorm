import { BadRequestException, Body, Controller, Delete, Get, Headers, Post, Put, Query } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { decodeToken } from '../shared';

// import { decodeToken } from '../common/helpers/decode-token';
import { PatternService } from './pattern.service';
import { IPattern } from './pattern.interface';

@ApiUseTags('pattern')
@Controller('pattern')
export class PatternController {
  constructor(
    private readonly patternService: PatternService
  ) { }

  @Post()
  async create(@Headers() headers, @Body() createPatternDto: IPattern) {
    const tokenData = decodeToken(headers.authorization);
    return this.patternService.create(createPatternDto, tokenData);
  }

  @Get()
  async read(@Headers() headers) {
    const tokenData = decodeToken(headers.authorization);
    return await this.patternService.read(tokenData)
      .then(patterns => patterns)
      .catch(err => {
        throw new BadRequestException(err);
      });
  }

  // @Put()
  // async update(@Headers() headers, @Body() createDto) {
  //   const userId = decodeToken(headers.authorization);
  //   return await this.patternService.update(createDto._id, userId, createDto)
  //     .then(pattern => pattern)
  //     .catch(err => {
  //       throw new BadRequestException(err);
  //     });
  // }

  // @Delete()
  // async delete(@Headers() headers, @Query() params) {
  //   const userId = decodeToken(headers.authorization);
  //   return await this.patternService.delete(params.id, userId)
  //     .then(pattern => pattern)
  //     .catch(err => {
  //       throw new BadRequestException(err);
  //     });
  // }
}
