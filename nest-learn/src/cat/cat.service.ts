import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatModel } from '../models/Cat.model';

@Injectable()
export class CatService {
  private cats: CatModel[] = [
    { id: 1, age: 3, name: 'Tabby', breed: 'Fish' },
    { id: 2, age: 4, name: 'Toby', breed: 'Meat' },
    { id: 3, age: 5, name: 'Tibi', breed: 'Meal' },
  ];
  create(createCatDto: CreateCatDto) {
    return createCatDto;
  }

  findAll(): CatModel[] {
    return this.cats;
  }

  findOne(id: number): CatModel | undefined {
    return this.cats.find((cat) => cat.id === id) || undefined;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
