import { SortOrder } from "../../util/SortOrder";

export type BorrowOrderByInput = {
  bookId?: SortOrder;
  createdAt?: SortOrder;
  endDueDate?: SortOrder;
  id?: SortOrder;
  memberId?: SortOrder;
  returnDate?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
