import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebaseconfig';
 function Home() {

  const [autoPartsData, setautoPartsData] = useState([]);
  const docRef = doc(db, "autoparts", "AutoParts");

  useEffect(()=>{
    const fetchData=async()=>{
      await getDoc(docRef).then(docSnap=>{
        if (docSnap.exists()){
          console.log("Document data:", docSnap.data());
          setautoPartsData(docSnap.data())
        }
        else{
          console.log("No such document!");
        }
    })
  }
fetchData();
},[])
const brandNames = autoPartsData.brands ? autoPartsData.brands.map(brand => brand.name) : [];
console.log("Brand names:", brandNames);


  return (
    <div className='  '>
        <div className=' grid grid-cols-1 w-full py-8 px-8 text-center items-center justify-center'>
        <div className=' p-4'>
        <h1 className=' text-gray-200 text-4xl'>Select your vehicle</h1>
        </div>
        <div className=' text-xl   w-full bg-gray-300 border-2 border-gray-400  px-4 py-4 gap-4 rounded-xl 
             grid grid-cols-1'>

              <select name='brand' id='brand' className='block w-full bg-white border border-gray-400
              hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
                  {autoPartsData.brands && autoPartsData.brands.map(brand => (
                    <option key={brand.name} value={brand.name}>{brand.name}</option>
                    ))}
            </select>

            <select name='vehicle' id='vehicle' className='block  w-full bg-white border border-gray-400
             hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
                <option>Bharat01</option>
                <option>Tata Prima</option>
                <option>Leyland Tusker </option>
                <option>Lyland Hino</option>
            </select>
            <select name=' part' id=' part' className='block w-full bg-white border border-gray-400
             hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' >
                <option>main seal</option>
                <option>taped adj screw</option>
                <option>stanle cable</option>
                <option>head valve cap</option>
                <option>clutch release</option>
            </select>
            </div>
        </div>
    </div>
  )
}

export default Home