import React, { useState, useMemo } from 'react'
import { Button } from "antd";

import "antd/dist/antd.css";

import '../App.css';

export default function Counter() {
   const [conOne, setconOne] = useState(0);
   const [conTwo, setconTwo] = useState(0);
   
   const incrementOne = () => {
     setconOne(conOne + 1) 
   }
   const incrementTwo = () =>{
     setconTwo(conTwo + 1)
   }

   const isEven = useMemo(() =>{
    let i = 0
    while(i < 2000000000) i++
    return conOne % 2 === 0
  }, [conOne]) 

  const isOdd = () =>{
    return conTwo % 2 === 0
  }

    return (
      <div>
        <div>
          <Button type='danger' size='large' style={{fontSize: '20px'}} onClick={incrementOne}>Counter One = {conOne}</Button>
          <p className="text">{isEven ? 'Genap' : 'Ganjil'}</p>
          <Button type='primary' size='large' style={{fontSize: '20px'}} onClick={incrementTwo}>Counter Two = {conTwo}</Button>
          <p className="text">{isOdd() ? 'Genap' : 'Ganjil'}</p>
        </div>
      </div>
    )
  }