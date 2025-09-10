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
import { CatModel } from '../models/cat.model';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) { }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<ResponseData<CatModel | null>> {
    try {
      const newCat = await this.catService.create(createCatDto)
      return new ResponseData<CatModel>(
        newCat,
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
  async findAll(): Promise<ResponseData<CatModel[] | null>> {
    const allCats = await this.catService.findAll();
    try {
      return new ResponseData<CatModel[]>(
        allCats,
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
  async findOne(@Param('id') id: string): Promise<ResponseData<CatModel | null>> {
    try {
      const cat = await this.catService.findOne(+id)
      return new ResponseData<CatModel | null>(
        cat,
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

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): Promise<ResponseData<CatModel | null>> {
    const updatedCat = this.catService.update(+id, updateCatDto)
    try {
      return new ResponseData<CatModel>(
        await updatedCat,
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
  async remove(@Param('id') id: string): Promise<ResponseData<string | null>> {
    const result = await this.catService.remove(+id)
    try {
      return new ResponseData<string>(
        result,
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
