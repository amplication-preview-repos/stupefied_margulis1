import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BOOK_TITLE_FIELD } from "./BookTitle";
import { MEMBER_TITLE_FIELD } from "../member/MemberTitle";

export const BookShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="author" source="author" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="edition" source="edition" />
        <TextField label="ID" source="id" />
        <TextField label="isbn" source="isbn" />
        <BooleanField label="isBorrowable" source="isBorrowable" />
        <TextField label="publisher" source="publisher" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="year" source="year" />
        <ReferenceManyField reference="Borrow" target="bookId" label="Borrows">
          <Datagrid rowClick="show">
            <ReferenceField label="Book" source="book.id" reference="Book">
              <TextField source={BOOK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="endDueDate" source="endDueDate" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Member"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="returnDate" source="returnDate" />
            <TextField label="startDate" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
