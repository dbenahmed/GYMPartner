import { useEffect, useRef, useState } from 'react';
import { Plan } from '../../components/index.jsx'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from 'react-router-dom';

export default function PlanPage() {
   return (
      <div className='p-10 flex flex-col gap-4'>
         <Link className='underline text-main underline-offset-8' to={`..`}>
            <p> Home </p>
         </Link>

         <Plan />
      </div>
   )
}