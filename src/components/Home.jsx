import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebaseconfig';
import FindParts from './FindParts';
function Home() {
 return(
   <FindParts></FindParts>
 )
}
export default Home;