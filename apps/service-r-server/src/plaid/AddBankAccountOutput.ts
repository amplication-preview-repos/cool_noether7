import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("AddBankAccountOutputObject")
class AddBankAccountOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    bankAccountId!: string;
}

export { AddBankAccountOutput as AddBankAccountOutput };