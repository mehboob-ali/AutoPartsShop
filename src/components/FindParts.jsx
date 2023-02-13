import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebaseconfig';

const FindParts = () => {

    const [autoPartsData, setautoPartsData] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [selectedPart, setSelectedPart] = useState(null);
    const docRef = doc(db, "autoparts", "AutoParts");
  
    useEffect(() => {
      const fetchData = async () => {
        await getDoc(docRef).then(docSnap => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setautoPartsData(docSnap.data());
          } else {
            console.log("No such document!");
          }
        });
      };
  
      fetchData();
    }, []);
  
    const brandNames = autoPartsData.brands ? autoPartsData.brands.map(brand => brand.name) : [];
    const vehicles = selectedBrand
      ? autoPartsData.brands.find(brand => brand.name === selectedBrand).vehicles.map(vehicle => vehicle.name)
      : [];
    const parts = selectedVehicle
      ? autoPartsData.brands
        .find(brand => brand.name === selectedBrand)
        .vehicles.find(vehicle => vehicle.name === selectedVehicle)
        .parts.map(part => part.name)
      : [];
  
    const handleBrandChange = event => {
      setSelectedBrand(event.target.value);
      setSelectedVehicle(null);
      setSelectedPart(null);
    };
  
    const handleVehicleChange = event => {
      setSelectedVehicle(event.target.value);
      setSelectedPart(null);
    };
  
    const handlePartChange = event => {
      setSelectedPart(event.target.value);
    };
  
    let selectedBrandData = selectedBrand ? autoPartsData.brands.find(brand => brand.name === selectedBrand) : null;
    let selectedVehicleData = selectedBrandData ? selectedBrandData.vehicles.find(vehicle => vehicle.name === selectedVehicle) : null;
    let selectedPartData = selectedVehicleData ? selectedVehicleData.parts.find(part => part.name === selectedPart) : null;
  
    return (
      <div className='  '>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:px-36 w-full
         py-4 my-2 px-8 text-center items-center justify-center'>
          <div className=' p-4'>
            <h1 className=' text-gray-200 text-4xl'>Select your vehicle</h1>
          </div>
          <div className=' text-xl   w-full bg-gray-300  border-2 border-gray-400 p-6 gap-4 rounded-xl 
               grid grid-cols-1 lg:flex'>
  
            <select name='brand' id='brand' className='block w-full bg-white border border-gray-400
                hover:border-gray-500 px-4 py-2 pr-8 rounded shadow  leading-tight focus:outline-none focus:shadow-outline'
              onChange={handleBrandChange} value={selectedBrand || ''}>
              <option value="">Select brand</option>
  
              {brandNames.map(brandName => (
                <option key={brandName} value={brandName}>
                  {brandName}
                </option>
              ))}
            </select>
  
            <select name='vehicle' id='vehicle' className='block  w-full bg-white border border-gray-400
              hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
              onChange={handleVehicleChange} value={selectedVehicle || ''} disabled={!selectedBrand}>
              <option value="">Select vehicle</option>
              {vehicles.map(vehicle => (
                <option key={vehicle} value={vehicle}>
                  {vehicle}
                </option>
              ))}
            </select>
            <select name=' part' id=' part' className='block w-full bg-white border border-gray-400
              hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
              onChange={handlePartChange} value={selectedPart || ''} disabled={!selectedVehicle}>
              <option value="">Select part</option>
              {parts.map(part => (
                <option key={part} value={part}>
                  {part}
                </option>
              ))}
            </select>
          </div>
        </div>

          {selectedPart && (
          <div className=' grid md:grid-cols-2 grid-cols-1 text-white p-4 lg:text-center m-8 md:mx-32 text-center items-center  relative
           shadow-inner shadow-gray-600  md:divide-x-4 md:divide-x-gray-600 md:divide-y-0 divide-y-2 divide-gray-600'>
            <div className=' p-2'>
            <h1 className=' text-2xl lg:text-4xl'>Part Details</h1>
            </div>
            <div className=' p-2'>
            <label className=' text-lg md:text-2xl'>Price: </label>
                <label className=' font-bold text-lg md:text-2xl'>{selectedPartData.info.price} <br /></label>
            <label className=' text-lg md:text-2xl '>Inventory: </label>
                <label className=' font-bold text-lg md:text-2xl'>{selectedPartData.info.inventory}</label>
            </div>
          </div>
          )
  }
      </div>
    )
  }
  
export default FindParts