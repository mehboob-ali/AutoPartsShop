import { Edit, Create, SimpleForm, TextInput, List, Datagrid, TextField, ReferenceField, ReferenceInput, SelectInput } from 'react-admin';

export const ModelList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="brandId" reference="brands">
        <TextField source="makeName" />
      </ReferenceField>
      <TextField source="modelName" />
    </Datagrid>
  </List>
);

export const ModelEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="brandId" reference="brands">
        <SelectInput optionText="makeName" />
      </ReferenceInput>
      <TextInput source="modelName" />
    </SimpleForm>
  </Edit>
);

export const ModelCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="brandId" reference="brands">
        <SelectInput optionText="makeName" />
      </ReferenceInput>
      <TextInput source="modelName" />
    </SimpleForm>
  </Create>
);
