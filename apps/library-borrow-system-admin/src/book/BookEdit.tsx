import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { BorrowTitle } from "../borrow/BorrowTitle";

export const BookEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <ReferenceArrayInput
          source="borrows"
          reference="Borrow"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BorrowTitle} />
        </ReferenceArrayInput>
        <TextInput label="edition" source="edition" />
        <TextInput label="isbn" source="isbn" />
        <BooleanInput label="isBorrowable" source="isBorrowable" />
        <TextInput label="publisher" source="publisher" />
        <TextInput label="title" source="title" />
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Edit>
  );
};
