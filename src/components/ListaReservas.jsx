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
  const [usuarios, setUsuarios] = useState([]);
  const [ deleting, setDeleting] = useState(false)

  useEffect(() => {
    consultarData()
  }, [deleting]);

  const consultarData = async () => {
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    querySnapshot.forEach((doc) => {
      idArray.push(doc.data());
    });
    if(idArray.length !== usuarios.length){
      setUsuarios(idArray);
    }
  };  
  
  const  handleClick = async(name)=>{
    setDeleting(!deleting)
    await deleteDoc(doc(db, 'usuarios', name));
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Hora</th>
            <th scope="col">Nombre</th>
            <th scope="col">Personas</th>
            <th scope="col">Mesa</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>
            {usuarios.map((a) => (
                  <tr key={a.name}>
                  <th scope="row">{ a.hora }</th>
                  <td>{ a.name }</td>
                  <td>{ a.quanty }</td>
                  <td>{ a.mesa }</td>
                  <td><button className="btn btn-danger" onClick={ ()=>handleClick(a.name) }>X</button></td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListaReservas;
