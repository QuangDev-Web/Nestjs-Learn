import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatModel } from '../models/Cat.model';

@Injectable()
export class CatService {
  private Cats: CatModel[] = [
    { id: 1, age: 3, name: 'Tabby', breed: 'Fish' },
    { id: 2, age: 4, name: 'Toby', breed: 'Meat' },
    { id: 3, age: 5, name: 'Tibi', breed: 'Meal' },
  ];
  create(createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  findAll(): CatModel[] {
    return this.Cats;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
