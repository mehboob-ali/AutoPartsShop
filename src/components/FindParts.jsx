import React, { useEffect, useState } from 'react'
import { doc, getDoc, getDocs, collection, getFirestore, query, where, updateDoc, setDoc } from "firebase/firestore";
import app  from '../firebaseconfig';
import { json } from 'react-router-dom';
import { Firestore, FieldValue } from 'firebase/firestore';
import { update } from 'firebase/database';
import { increment } from 'firebase/firestore';
const firestore = new Firestore();

const FindParts = () => {
  const db = getFirestore(app);

  const brandsRef = collection(db,"brand")

    const [autoPartsData, setautoPartsData] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedModel, setselectedModel] = useState(null);
    const [selectedPart, setSelectedPart] = useState(null);
    

    ///////
    const colRef = collection(db, "brand");
    const [brandList, setBrandList] = useState([]);
    const [modelList, setModelList] = useState([]);
    const [partList, setPartList] = useState([]);
    const [partInfo, setPartInfo] = useState([]);

    useEffect(() => {
      const fetchData = async () => {

        await getDocs(brandsRef).then((querySnapshot) => {
          const brands = [];
          querySnapshot.forEach((doc) => {
            brands.push({ id: doc.id, ...doc.data() });
          });
          setBrandList(brands);
        });
      }
      fetchData();
    }, []);


  
    // const vehicles = selectedBrand
    //   ? autoPartsData.find(brand => brand.makeName === selectedBrand).vehicles.map(vehicle => vehicle.name)
    //   : [];
    // const parts = selectedModel
    //   ? autoPartsData.find(brand => brand.makeName === selectedBrand)
    //     .vehicles.find(vehicle => vehicle.name === selectedModel)
    //     .parts.map(part => part.name)
    //   : [];

// Handle BrandChange
      
      const handleBrandChange = async(event) => {
        setSelectedBrand(event.target.value);
        const selectedBrandRef =  doc(db, "brand", event.target.value);
        const modelsRef = collection(selectedBrandRef, "models")

            // Query for all documents in the "models" subcollection

            getDocs(modelsRef).then((querySnapshot)=>{
              const models = [];
              querySnapshot.forEach((doc)=>{
                models.push({ id: doc.id, ...doc.data() })
              });
              setModelList(models);
            })
        setselectedModel(null);
        setSelectedPart(null);
    };


    const handleModelChange = async (event) => {
      const selectedBrandRef =  doc(db, "brand", selectedBrand);
      const modelsRef = collection(selectedBrandRef, "models")
      const selectedModelRef = doc(modelsRef, event.target.value);

      setselectedModel(event.target.value);
    
      const partsCol = collection(selectedModelRef, "parts");
    
      // Query for all documents in the "parts" subcollection
      const querySnapshot = await getDocs(partsCol);
      const parts = [];
      querySnapshot.forEach((doc) => {
        console.log("part name", doc.data());
        parts.push({ id: doc.id, ...doc.data() });
      });
      setPartList(parts);
      console.log("PArts are $$$$$$$$$$$$$$$$$$$$$$$$$", partList);
      setSelectedPart(null);
    };

    
    const handlePartChange = async event => {
      console.log("CHECKinG part in handlepartchange", event.target.value)
      const partData = JSON.parse(event.target.value);
      console.log('partttr data idididididi', partData.id);
      setSelectedPart(partData.id)
      console.log("json", partData);
      setPartInfo(partData)



    };

    const reduceInventory = async()=>{
      // const docRef = doc(`${db},brands/${selectedBrand}/collections/models/${selectedModel}/collection/parts/${selectedPart}`);
      const docRef = doc(db,'brand', selectedBrand, 'models', selectedModel, 'parts', selectedPart)
      const docSnap = await getDoc(docRef);
      console.log("show me the selected part yeaaaaaaaaaaaaaaa:", selectedPart, '\n')

      const updateData={
        partInventory : increment(-1)
        
      };
      await updateDoc(docRef, updateData);
      alert('item sold')
    }
  
    console.log("part list", partList)
    // let selectedBrandData = selectedBrand ? autoPartsData.brands.find(brand => brand.name === selectedBrand) : null;
    // let selectedModelData = selectedBrandData ? selectedBrandData.vehicles.find(vehicle => vehicle.name === selectedModel) : null;
    // let selectedPartData = selectedModelData ? selectedModelData.parts.find(part => part.name === selectedPart) : null;
  
    return (
      <div className=' m-8 bg-red-500 '>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:px-36 w-full
         py-4 mb-2 px-8 text-center items-center justify-center'>
          <div className=' p-4'>
            <h1 className=' text-gray-200 text-2xl md:text-4xl'>Select vehicle to show details </h1>
          </div>
          <div className=' text-xl   w-full bg-gray-300  border-2 border-gray-400 p-6 gap-4 rounded-xl 
               grid grid-cols-1 lg:flex'>
  
            <select name='brand' id='brand' className='block w-full bg-white border border-gray-400
                hover:border-gray-500 px-4 py-2 pr-8 rounded shadow  leading-tight focus:outline-none focus:shadow-outline'
              onChange={handleBrandChange} value={selectedBrand || ''}>
              <option value="">Select brand</option>
              {brandList.map(brandName => (
                        <option key={brandName.id} value={brandName.id}>
                        {brandName.makeName}
                        </option>
                    ))}
            </select>
  
            <select name='vehicle' id='vehicle' className='block  w-full bg-white border border-gray-400
              hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
              onChange={handleModelChange} value={selectedModel || ''} disabled={!selectedBrand}>
              <option value="">Select vehicle</option>
              {modelList.map(model => (
                <option key={model} value={model.id}>
                  {model.modeName}
                </option>
              ))}
            </select>


            <select name=' part' id=' part' className='block w-full bg-white border border-gray-400
              hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
              onChange={handlePartChange} value={selectedPart || ''} disabled={!selectedModel}>
              <option value="">Select part</option>
              {partList.map(part => (
                <option value={JSON.stringify(part)} key={part.id}>
                  {part.partName}
                </option>
              ))}
            </select> 
          </div>
        </div>

          {selectedPart && (
          <div className=' grid md:grid-cols-2 grid-cols-1 text-white p-4 lg:text-center py-4 my-2 md:mx-32 text-center items-center  
          relative shadow-inner shadow-gray-800  md:divide-x-4 md:divide-x-gray-600 md:divide-y-0 divide-y-2 divide-gray-600'>
            <div className=' p-2'>
            <h1 className=' text-2xl lg:text-4xl'>Part Details</h1>
            </div>
            <div className=' p-2'>
            <label className=' text-lg md:text-2xl'>Price: </label>
                <label className=' font-bold text-lg md:text-2xl'>{partInfo.partPrice} <br /></label>
            <label className=' text-lg md:text-2xl '>Inventory: </label>
                <label className=' font-bold text-lg md:text-2xl'>{partInfo.partInventory}</label> <br />
            
            <button className=' text-md md:text-lg border-2 rounded-md px-4 py-1 mt-6 bg-red-600'
              onClick={reduceInventory}>
                Sell
            </button>

            </div>
          </div>
          )
  }
      </div>
    )
  }
  
export default FindParts