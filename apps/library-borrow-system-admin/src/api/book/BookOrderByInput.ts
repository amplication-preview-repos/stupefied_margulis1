import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  author?: SortOrder;
  createdAt?: SortOrder;
  edition?: SortOrder;
  id?: SortOrder;
  isbn?: SortOrder;
  isBorrowable?: SortOrder;
  publisher?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
