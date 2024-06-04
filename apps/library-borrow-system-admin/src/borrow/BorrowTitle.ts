import { Borrow as TBorrow } from "../api/borrow/Borrow";

export const BORROW_TITLE_FIELD = "id";

export const BorrowTitle = (record: TBorrow): string => {
  return record.id?.toString() || String(record.id);
};
