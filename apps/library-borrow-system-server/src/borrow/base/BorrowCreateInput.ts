/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BookWhereUniqueInput } from "../../book/base/BookWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { MemberWhereUniqueInput } from "../../member/base/MemberWhereUniqueInput";

@InputType()
class BorrowCreateInput {
  @ApiProperty({
    required: false,
    type: () => BookWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BookWhereUniqueInput)
  @IsOptional()
  @Field(() => BookWhereUniqueInput, {
    nullable: true,
  })
  book?: BookWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDueDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => MemberWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MemberWhereUniqueInput)
  @IsOptional()
  @Field(() => MemberWhereUniqueInput, {
    nullable: true,
  })
  member?: MemberWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  returnDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;
}

export { BorrowCreateInput as BorrowCreateInput };