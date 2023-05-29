
import { Edit, Create, SimpleForm, TextInput, List, Datagrid, TextField, ReferenceField, ReferenceInput, SelectInput } from 'react-admin';

export const PartList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="modelId" reference="models">
        <ReferenceField source="brandId" reference="brands">
          <TextField source="makeName" />
        </ReferenceField>
      </ReferenceField>
      <TextField source="partName" />
      <TextField source="lastDocument" />
    </Datagrid>
  </List>
);

export const PartEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="modelId" reference="models">
        <SelectInput optionText="modelName" />
      </ReferenceInput>
      <TextInput source="partName" />
      <TextInput source="lastDocument" />
    </SimpleForm>
  </Edit>
);

export const PartCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="modelId" reference="models">
        <SelectInput optionText="modelName" />
      </ReferenceInput>
      <TextInput source="partName" />
      <TextInput source="lastDocument" />
    </SimpleForm>
  </Create>
);