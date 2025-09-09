/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export class CatModel {
    id?: number;
    name: string;
    age: number;
    breed: string;

    constructor({ id, name, age, breed }) {
        if (id !== null) this.id = id;
        if (name !== null) this.name = name;
        if (age !== null) this.age = age;
        if (breed !== null) this.breed = breed;
    }
}
