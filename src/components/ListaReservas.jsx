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

  useEffect(() => {
    consultarData()
  }, []);


  const consultarData = async () => {
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    querySnapshot.forEach((doc) => {
      idArray.push(doc.data());
    });
    if(idArray.length !== usuarios.length){
      setUsuarios(idArray);
    }
  };

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
              <CardListaUsuarios key={a.name} arreglo={a} />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListaReservas;
