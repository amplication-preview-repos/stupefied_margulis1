import { Borrow } from "../borrow/Borrow";

export type Member = {
  address: string | null;
  borrows?: Array<Borrow>;
  contact: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
