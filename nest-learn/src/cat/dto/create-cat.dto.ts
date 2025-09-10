/* eslint-disable prettier/prettier */
import { MinLength, IsNumber,IsNotEmpty } from 'class-validator'
export class CreateCatDto {
    @MinLength(5, {message: 'Tối thiểu phải nhập 5 kí tự'})
    name: string;
    @IsNumber()
    age: number;
    @IsNotEmpty()
    breed: string;
}
