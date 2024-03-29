// in src/Brand.js
import { Edit, Create, SimpleForm, TextInput, List, Datagrid, TextField, Show, SimpleShowLayout, EditButton,  } from 'react-admin';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useQueryClient } from 'react-query';
import {   ReferenceArrayField, ReferenceManyField, SingleFieldList } from 'react-admin';
import { useGetMany } from 'react-admin';


export const BrandList = (props) => (
  <List {...props}>
    <Datagrid>
      {/* <TextField source="id" /> */}
      <TextField source="makeName" label="Make NAmes" />
      <ReferenceManyField label="MODELS" target = 'brandId' reference='brand'>
      <Datagrid>
          <TextField source="modeName" label="Model Name" />
        </Datagrid>

      </ReferenceManyField>
    </Datagrid>
  </List>
  
);     
export const BrandEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="makeName" />
    </SimpleForm>
  </Edit>
);

export const BrandCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="makeName" />
    </SimpleForm>
  </Create>
);  

export const BrandShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="makeName" />
    </SimpleShowLayout>
  </Show>
);

