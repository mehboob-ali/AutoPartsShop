import { getFirestore, doc, getDoc, collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, writeBatch } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import app from '../firebaseconfig';

const db = getFirestore(app);
const dataProvider = {
  getList: async (resource, params) => {
    const collectionRef = collection(db, 'brand');
    const querySnapshot = await getDocs(collectionRef);
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return { data, total: data.length };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { target, id } = params;
    const brandRef = doc(db, resource, id);
    const modelsRef = collection(brandRef, 'models'); // Update the collection reference
    console.log(modelsRef)
  
    const querySnapshot = await getDocs(modelsRef);
    console.log(querySnapshot.docs.map(d=>({id : d.id, ...d.data()})))
    const total = querySnapshot.size;
  
    const start = (page - 1) * perPage;
    const end = page * perPage;
  
    const data = querySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() })) // Map the retrieved documents correctly
      .slice(start, end);
  
    return { data, total };
  },



  create: async (resource, params) => {
    const docRef = await addDoc(collection(db, resource), params.data);
    const docSnapshot = await getDoc(docRef);
    const data = { ...docSnapshot.data(), id: docSnapshot.id };
    return { data };
  },
  update: async (resource, params) => {
    const docRef = doc(db, resource, params.id);
    await updateDoc(docRef, params.data);
    const docSnapshot = await getDoc(docRef);
    const data = { ...docSnapshot.data(), id: docSnapshot.id };
    return { data };
  },
  delete: async (resource, params) => {
    const docRef = doc(db, resource, params.id);
    await deleteDoc(docRef);
    return { data: params.previousData };
  },
  deleteMany: async (resource, params) => {
    const { ids } = params;
    const batch = writeBatch(db);

    // Loop through each ID and delete the corresponding document
    ids.forEach((id) => {
      const docRef = doc(db, resource, id);
      console.log(docRef,"dfadsfdsf")
      batch.delete(docRef);
    });

    await batch.commit();
    return { data: ids };
  },
};

export default dataProvider;
