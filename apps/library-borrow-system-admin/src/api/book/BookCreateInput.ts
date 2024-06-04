import { BorrowCreateNestedManyWithoutBooksInput } from "./BorrowCreateNestedManyWithoutBooksInput";

export type BookCreateInput = {
  author?: string | null;
  borrows?: BorrowCreateNestedManyWithoutBooksInput;
  edition?: string | null;
  isbn?: string | null;
  isBorrowable?: boolean | null;
  publisher?: string | null;
  title?: string | null;
  year?: number | null;
};
