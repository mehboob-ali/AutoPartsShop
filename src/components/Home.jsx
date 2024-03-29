import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebaseconfig';
import FindParts from './FindParts';
import Header from './Header';
import Footer from './Footer';
function Home() {
 return(
 <>
  {/* <Header></Header> */}
   <FindParts></FindParts>
   {/* <Footer></Footer> */}
   </>
 )
}
export default Home;