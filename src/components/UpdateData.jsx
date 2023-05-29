import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import app from '../firebaseconfig';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { BrandList, BrandEdit, BrandCreate } from './Update/Brand'
import { ModelList, ModelEdit, ModelCreate } from './Update/Model';
import { PartList, PartEdit, PartCreate } from './Update/Part';
import dataProvider from './dataProvider';
function UpdateData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
      const brandCollection = await getDocs(collection(db, 'brand'));
      const data = {};

      // Loop through all brand documents and add their models and parts to the data object
      brandCollection.forEach(async (brandDoc) => {
        data[brandDoc.id] = { makeName: brandDoc.data().makeName, models: {} };

        const modelsCollection = await getDocs(collection(db, `brand/${brandDoc.id}/models`));
        modelsCollection.forEach(async (modelDoc) => {
          data[brandDoc.id].models[modelDoc.id] = { modelName: modelDoc.data().modelName, parts: {} };

          const partsCollection = await getDocs(collection(db, `brand/${brandDoc.id}/models/${modelDoc.id}/parts`));
          partsCollection.forEach((partDoc) => {
            data[brandDoc.id].models[modelDoc.id].parts[partDoc.id] = partDoc.data();
          });
        });
      });
      console.log(data)
      setData(JSON.stringify(data));
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return(
<h1>fds</h1>
  )
}

export default UpdateData;
