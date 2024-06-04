import { Borrow } from "../borrow/Borrow";

export type Book = {
  author: string | null;
  borrows?: Array<Borrow>;
  createdAt: Date;
  edition: string | null;
  id: string;
  isbn: string | null;
  isBorrowable: boolean | null;
  publisher: string | null;
  title: string | null;
  updatedAt: Date;
  year: number | null;
};
