import { Book } from "../book/Book";
import { Member } from "../member/Member";

export type Borrow = {
  book?: Book | null;
  createdAt: Date;
  endDueDate: Date | null;
  id: string;
  member?: Member | null;
  returnDate: Date | null;
  startDate: Date | null;
  updatedAt: Date;
};
