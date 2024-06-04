import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  address?: SortOrder;
  contact?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
