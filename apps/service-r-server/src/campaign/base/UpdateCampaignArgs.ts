/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CampaignWhereUniqueInput } from "./CampaignWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CampaignUpdateInput } from "./CampaignUpdateInput";

@ArgsType()
class UpdateCampaignArgs {
  @ApiProperty({
    required: true,
    type: () => CampaignWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CampaignWhereUniqueInput)
  @Field(() => CampaignWhereUniqueInput, { nullable: false })
  where!: CampaignWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CampaignUpdateInput,
  })
  @ValidateNested()
  @Type(() => CampaignUpdateInput)
  @Field(() => CampaignUpdateInput, { nullable: false })
  data!: CampaignUpdateInput;
}

export { UpdateCampaignArgs as UpdateCampaignArgs };
