import { BorrowCreateNestedManyWithoutMembersInput } from "./BorrowCreateNestedManyWithoutMembersInput";

export type MemberCreateInput = {
  address?: string | null;
  borrows?: BorrowCreateNestedManyWithoutMembersInput;
  contact?: string | null;
  name?: string | null;
  typeField?: "Option1" | null;
};
