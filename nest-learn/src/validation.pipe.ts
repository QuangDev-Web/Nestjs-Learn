import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

@Injectable()

export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata) {
        const {metatype} = metadata
        if(!value || !metatype || !this.toValidate(metatype)) {
            return value
        }
        const object = plainToInstance(metatype,value)
        const errors = await validate(object)
        console.log("errors: ", errors)
        if(errors.length > 0) {
            const messages = errors.map(
                err => {
                    if(err.constraints) {
                        return `${err.property} - ${Object.values(err.constraints).join(', ')}`
                    }
                    return
                }
            );
            throw new BadRequestException(messages)
        }
        return value
    }

    private toValidate(metaType: Function) : boolean {
        const types : Function[] = [Boolean,String,Number,Array,Object]
        return !types.includes(metaType);
    }
}