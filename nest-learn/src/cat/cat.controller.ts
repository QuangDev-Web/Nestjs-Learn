/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ResponseData } from '../global/globalClass';
import { HttpMessage, HttpStatus } from '../global/globalEnum';
import { CatModel } from '../models/Cat.model';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) { }

  @Post()
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto): ResponseData<CreateCatDto | null> {
    try {
      return new ResponseData<CreateCatDto>(
        this.catService.create(createCatDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<null>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Get()
  findAll(): ResponseData<CatModel[] | null> {
    try {
      return new ResponseData<CatModel[]>(
        this.catService.findAll(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<null>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): ResponseData<CatModel | undefined> {
    try {
      return new ResponseData<CatModel | undefined>(
        this.catService.findOne(+id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<undefined>(
        undefined,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): ResponseData<string | null> {
    try {
      return new ResponseData<string>(
        this.catService.update(+id, updateCatDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<null>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string): ResponseData<string | null> {
    try {
      return new ResponseData<string>(
        this.catService.remove(+id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<null>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
