import { BorrowUpdateManyWithoutMembersInput } from "./BorrowUpdateManyWithoutMembersInput";

export type MemberUpdateInput = {
  address?: string | null;
  borrows?: BorrowUpdateManyWithoutMembersInput;
  contact?: string | null;
  name?: string | null;
  typeField?: "Option1" | null;
};
