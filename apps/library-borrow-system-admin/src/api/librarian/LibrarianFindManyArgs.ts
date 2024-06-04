import { LibrarianWhereInput } from "./LibrarianWhereInput";
import { LibrarianOrderByInput } from "./LibrarianOrderByInput";

export type LibrarianFindManyArgs = {
  where?: LibrarianWhereInput;
  orderBy?: Array<LibrarianOrderByInput>;
  skip?: number;
  take?: number;
};
