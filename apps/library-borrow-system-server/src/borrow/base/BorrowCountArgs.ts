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
import { BorrowWhereInput } from "./BorrowWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class BorrowCountArgs {
  @ApiProperty({
    required: false,
    type: () => BorrowWhereInput,
  })
  @Field(() => BorrowWhereInput, { nullable: true })
  @Type(() => BorrowWhereInput)
  where?: BorrowWhereInput;
}

export { BorrowCountArgs as BorrowCountArgs };