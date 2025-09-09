/* eslint-disable prettier/prettier */
import { MinLength } from 'class-validator'
export class CreateCatDto {
    @MinLength(5)
    name: string;
    age: number;
    breed: string;
}
