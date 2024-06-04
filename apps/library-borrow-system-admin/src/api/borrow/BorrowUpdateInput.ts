import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type BorrowUpdateInput = {
  book?: BookWhereUniqueInput | null;
  endDueDate?: Date | null;
  member?: MemberWhereUniqueInput | null;
  returnDate?: Date | null;
  startDate?: Date | null;
};
