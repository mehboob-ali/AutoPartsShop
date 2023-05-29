import React from 'react';
import { Admin, Resource } from 'react-admin';
import {
  FirebaseAuthProvider,
  FirebaseDataProvider
} from 'react-admin-firebase';
import { firebaseConfig as config, firebaseApp as firebaseAppInstance } from './firebaseconfig.js';
import { CommentList, CommentEdit, CommentCreate, CommentShow} from './comment'
import { BrandList, BrandCreate, BrandEdit, BrandShow } from './components/Update/Brand.jsx';
import dataProvider from './components/dataProvider.js';
import { ModelList, ModelCreate } from './components/Update/Model';


function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      title="Admin Dashboard"
    >
    <Resource name="brand" list={BrandList}  create={BrandCreate} edit={BrandEdit} />
  </Admin>
  );
}

export default App;
