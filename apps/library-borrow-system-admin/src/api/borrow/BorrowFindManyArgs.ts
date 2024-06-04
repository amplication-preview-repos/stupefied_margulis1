import { BorrowWhereInput } from "./BorrowWhereInput";
import { BorrowOrderByInput } from "./BorrowOrderByInput";

export type BorrowFindManyArgs = {
  where?: BorrowWhereInput;
  orderBy?: Array<BorrowOrderByInput>;
  skip?: number;
  take?: number;
};
