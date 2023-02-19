import React, { useEffect, useState } from 'react'
import { addDoc, doc, getDoc, getDocs,where,   updateDoc, setDoc, collection, deleteDoc, query } from "firebase/firestore";
import { db } from '../firebaseconfig';
import { querystring } from '@firebase/util';
import {BiArrowBack} from "react-icons/bi"
import { Link } from 'react-router-dom';
const AddData = () => {
    const [autoPartsData, setautoPartsData] = useState([]);
    const colRef = collection(db, "brand")
    
      // State variables to store the input values
        //For selected values
      const [selectedBrand, setSelectedBrand] = useState('');
      const [selectedVehicle, setSelectedVehicle] = useState('');
      const [selectedPart, setSelectedPart] = useState('');
        //for input values
      const [brandName, setBrandName] = useState('');
      const [vehicleName, setVehicleName] = useState('')
      const [partName, setPartName] = useState('');
      const [partPrice, setPartPrice] = useState('');
      const [partInventory, setPartInventory] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        const snapshot = await getDocs(colRef);
        if (snapshot && snapshot.docs) {
          const data = snapshot.docs.map(doc => doc.data());
          setautoPartsData(data);
        }
      }

        fetchData();
      }, []);

      const submitData = async() =>{
        console.log("running...")
        const makeRef = await setDoc(doc(db, "brand", brandName), {makeName : brandName});
        console.log("makeref is " , makeRef);
        const makeDocRef = doc(db, "brand", brandName)
        const makeCollection = collection(makeDocRef, "models")
        await setDoc(doc(makeCollection, vehicleName) ,{modeName : vehicleName});
        const modeDocRef = doc(makeCollection, vehicleName);
        const modeCollection = collection(modeDocRef, "parts");
        await setDoc(doc(modeCollection, partName), {
          partName: partName, partPrice : partPrice, partInventory:partInventory
          });
        console.log("done")
      }

      const deleteData=async()=>{
        console.log('selefcet', selectedBrand)
        await deleteDoc(doc(db, "brand", selectedBrand))
        console.log("deleted")
      }

      const handleSelectChange = async(event)=>{
        console.log("selected is ", event.target.value);
        const q= query(colRef,where("name", "==", event.target.value))
        getDocs(q).then((snapshot) =>{
          if (snapshot.empty){
            console.log("no mathcing document")
          }else{
            const doc = snapshot.docs[0];
            const data=doc.data();
            console.log("********************",doc.id)
            setSelectedBrand(doc.id);
            setBrandName('fdasfdsf')
          }
        }).catch((error)=>{
          console.error("error getting document", error);
        })
        console.log("id found is", selectedBrand)
      }

      
      const handleBrandChange = (event) =>{
        setBrandName(event.target.value)
      }
      
      const handleVehicleChange=(event)=>{
        setVehicleName(event.target.value);
      }

      const handlePartNameChange = (event) =>{
        setPartName(event.target.value)
      }
      
      const handlePartPriceChange = (event) =>{
        setPartPrice(event.target.value)
      }

      const handlePartInventoryChange = (event) =>{
        setPartInventory(event.target.value)
      }
      console.log("what is is main state", autoPartsData)
      const brandNames = autoPartsData ? autoPartsData.map(brand => brand.makeName) : [];


  return (
    <div className=' bg-gray-800  p-8  text-xl text-gray-300 '>
      <div>
        <Link to={'/'}>
          <BiArrowBack className=' text-4xl rounded-lg bg-gray-300 p-2 text-gray-800'></BiArrowBack>
        </Link>
      </div>
        <div className=' text-3xl text-center p-2 underline'>
            <h3>Add New Data</h3>
        </div>
        <div className=' grid  grid-cols-1  p-4 md:px-32 md:mx-28 lg:mx-48 bg-gray-700 text-gray-300 text-left items-center
            border rounded-2xl border-gray-400 gap-2 '>

            <label className=' '>Enter Make/brand name</label>

                <input type='text' className=' text-black p-2 rounded-lg capitalize hover:bg-gray-300 
                 hover:ring-2 ' value={brandName} onChange={handleBrandChange}></input>
                {/* <label>OR</label>
                
                <select name='brand' id='brand' className='block w-full bg-white border border-gray-400 text-black
                hover:border-gray-500 px-4 py-2 pr-8 rounded shadow  leading-tight focus:outline-none focus:shadow-outline'
                onChange={handleSelectChange}>
                    <option value="">Select brand</option>
        
                    {brandNames.map(brandName => (
                        <option key={brandName} value={brandName}>
                        {brandName}
                        </option>
                    ))}
            </select> */}
            <label>Enter Model/vehicle name</label>
            <input type='text' className=' text-black p-2 rounded-lg capitalize hover:bg-gray-300
                 hover:ring-2 ' onChange={handleVehicleChange} value={vehicleName}></input>

            <label className=' pt-8'>Enter part name</label>
            <input type='text' className=' text-black p-2 rounded-lg capitalize hover:bg-gray-300 
                 hover:ring-2 ' value={partName} onChange={handlePartNameChange}></input>
            <label className=' ml-12'>Enter part price</label>
            <input type='text' className=' ml-11 text-black p-2 rounded-lg capitalize hover:bg-gray-300 
                 hover:ring-2 ' value={partPrice} onChange={handlePartPriceChange}></input>
            <label className=' ml-12'>Enter part inventory</label>
            <input type='text' className=' ml-12 text-black p-2 rounded-lg capitalize hover:bg-gray-300 
                 hover:ring-2 ' value={partInventory} onChange={handlePartInventoryChange}></input>
            <button className=' text-lg p-2 rounded-2xl mt-4 md:mx-24 border
                bg-gray-800 hover:ring-4' onClick={()=>submitData()} value='submit'>Submit data</button>
            {/* <button className=' text-lg border border-red-400' onClick={()=>deleteData()} value='delete'>Delete data</button> */}
        </div>
    </div>
  )
}

export default AddData