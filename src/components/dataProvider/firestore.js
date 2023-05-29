import { getFirestore, collection, doc, updateDoc, addDoc, deleteDoc, getDocs, getDoc } from 'firebase/firestore';
import { fetchUtils } from 'react-admin';
import {app} from '../../firebaseconfig'
const firestoreDataProvider = async (type, resource, params) => {
  const firestore = getFirestore(app);

  if (type === 'GET_LIST') {
    // Get a collection of documents
    const querySnapshot = await getDocs(collection(firestore, resource));
    // Convert the documents to data objects
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log("this file is runnning....")
    // Return the data and total count
    return { data, total: data.length };
  } else if (type === 'GET_ONE') {
    // Get a single document by ID
    const docSnapshot = await getDoc(doc(firestore, `${resource}/${params.id}`));
    return { id: docSnapshot.id, ...docSnapshot.data() };
  } else if (type === 'UPDATE') {
    // Update a document by ID
    await updateDoc(doc(firestore, `${resource}/${params.id}`), params.data);
    return { id: params.id, ...params.data };
  } else if (type === 'CREATE') {
    // Create a new document
    const docRef = await addDoc(collection(firestore, resource), params.data);
    return { id: docRef.id, ...params.data };
  } else if (type === 'DELETE') {
    // Delete a document by ID
    await deleteDoc(doc(firestore, `${resource}/${params.id}`));
    return { id: params.id };
  } else {
    // Unsupported operation
    return Promise.reject(`Unsupported operation type ${type}`);
  }
};

const firestoreDataProviderWithFetch = (type, resource, params) => {
  const { fetchJson } = fetchUtils;
  const url = `/${resource}`;
  const options = {};
  return firestoreDataProvider(type, resource, params)
    .then((response) => ({
      data: response.data,
      total: response.total,
    }));
};

export default firestoreDataProviderWithFetch;
