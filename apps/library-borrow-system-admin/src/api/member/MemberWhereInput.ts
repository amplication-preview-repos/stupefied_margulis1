import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BorrowListRelationFilter } from "../borrow/BorrowListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type MemberWhereInput = {
  address?: StringNullableFilter;
  borrows?: BorrowListRelationFilter;
  contact?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
};
