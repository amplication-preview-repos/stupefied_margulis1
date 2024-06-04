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
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BorrowOrderByInput } from "./BorrowOrderByInput";

@ArgsType()
class BorrowFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BorrowWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BorrowWhereInput, { nullable: true })
  @Type(() => BorrowWhereInput)
  where?: BorrowWhereInput;

  @ApiProperty({
    required: false,
    type: [BorrowOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BorrowOrderByInput], { nullable: true })
  @Type(() => BorrowOrderByInput)
  orderBy?: Array<BorrowOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BorrowFindManyArgs as BorrowFindManyArgs };