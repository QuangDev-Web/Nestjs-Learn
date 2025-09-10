import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cats') // tên bảng trong DB, mặc định sẽ là 'cat' nếu không truyền
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;
}
