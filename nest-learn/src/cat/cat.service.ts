import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatModel } from '../models/cat.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}
  create(createCatDto: CreateCatDto): Promise<Cat> {
    const newCat = this.catsRepository.create(createCatDto);
    return this.catsRepository.save(newCat);
  }

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: number): Promise<Cat | null> {
    const cat = this.catsRepository.findOneBy({id});
    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    return cat;
  }

  async update(id: number, updateCatDto: UpdateCatDto): Promise<Cat> {
    const cat = await this.catsRepository.findOneBy({id})

    if(!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`)
    }

    const updateCat = this.catsRepository.merge(cat,updateCatDto)

    return this.catsRepository.save(updateCat)
  }

  async remove(id: number) {
    const result = await this.catsRepository.delete(id)

    if(result.affected === 0) {
      throw new NotFoundException(`Cat with id ${id} not found`)
    }

    return `delete Cat with ${id} success`
  }
}
