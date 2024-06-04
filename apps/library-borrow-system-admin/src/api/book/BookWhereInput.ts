import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BorrowListRelationFilter } from "../borrow/BorrowListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BookWhereInput = {
  author?: StringNullableFilter;
  borrows?: BorrowListRelationFilter;
  edition?: StringNullableFilter;
  id?: StringFilter;
  isbn?: StringNullableFilter;
  isBorrowable?: BooleanNullableFilter;
  publisher?: StringNullableFilter;
  title?: StringNullableFilter;
  year?: IntNullableFilter;
};
