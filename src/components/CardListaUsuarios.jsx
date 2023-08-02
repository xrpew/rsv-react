import React, { useEffect, useState } from "react";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const CardListaUsuarios = ({ arreglo }) => {
  const { name, hora, mesa, quanty } = arreglo;

  const  handleClick = async(name)=>{
    await deleteDoc(doc(db, 'usuarios', name));
  }

  return (
    <tr>
      <th scope="row">{ hora }</th>
      <td>{ name }</td>
      <td>{ quanty }</td>
      <td>{ mesa }</td>
      <td><button className="btn btn-danger" onClick={ ()=>handleClick(name) }>X</button></td>
    </tr>
  );
};

export default CardListaUsuarios;
