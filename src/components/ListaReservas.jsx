import React, { useEffect, useState } from "react";
import {
    doc,
    setDoc,
    getDocs,
    collection,
    deleteDoc,
  } from "firebase/firestore";
  import { db } from "../firebase";
import CardListaUsuarios from "./CardListaUsuarios";

  
  const ListaReservas = () => {
      let idArray = []; 
      
      const [usuarios, setUsuarios] = useState([])
      useEffect(() => {
        consultarData()
    }, [])

    const consultarData = async () => {
        const querySnapshot = await getDocs(collection(db, 'usuarios'));
        querySnapshot.forEach((doc) => {
            idArray.push(doc.data())
        });
        setUsuarios(idArray)
    };

  return <>
    {
        usuarios.map(a=> 
            <CardListaUsuarios key={a.name} arreglo={a}/>)
    }
  </>;
};

export default ListaReservas;
