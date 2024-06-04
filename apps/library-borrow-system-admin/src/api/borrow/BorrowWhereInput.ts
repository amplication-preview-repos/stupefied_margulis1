import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type BorrowWhereInput = {
  book?: BookWhereUniqueInput;
  endDueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  member?: MemberWhereUniqueInput;
  returnDate?: DateTimeNullableFilter;
  startDate?: DateTimeNullableFilter;
};
