import { BorrowUpdateManyWithoutBooksInput } from "./BorrowUpdateManyWithoutBooksInput";

export type BookUpdateInput = {
  author?: string | null;
  borrows?: BorrowUpdateManyWithoutBooksInput;
  edition?: string | null;
  isbn?: string | null;
  isBorrowable?: boolean | null;
  publisher?: string | null;
  title?: string | null;
  year?: number | null;
};
