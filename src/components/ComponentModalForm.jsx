import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
    doc,
    setDoc,
    getDocs,
    collection,
    deleteDoc,
  } from "firebase/firestore";
const ComponentModalForm = () => {

  const handleForm = async () => {
    let name = document.getElementById("nombre-name").value;
    let mesa = document.getElementById("mesa-name").value;
    let hora = document.getElementById("hora-name").value;
    let quanty = document.getElementById("comensales-name").value;
    if (name == "" || mesa == "" || hora == "" || quanty == "") {
        return;
    } else {
        await setDoc(doc(db, 'usuarios', name), { name, mesa, hora, quanty });
        console.log("guardado");
        location.reload()
    }
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Ingresa los Datos:
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="nombre-name" className="col-form-label">
                {" "}
                Nombre:{" "}
              </label>
              <input type="text" className="form-control" id="nombre-name" />
            </div>
            <div className="mb-3">
              <label htmlFor="mesa-name" className="col-form-label">
                {" "}
                Mesa:{" "}
              </label>
              <input type="number" className="form-control" id="mesa-name" />
            </div>
            <div className="mb-3">
              <label htmlFor="hora-name" className="col-form-label">
                {" "}
                Hora:{" "}
              </label>
              <input type="time" className="form-control" id="hora-name" />
            </div>
            <div className="mb-3">
              <label htmlFor="comensales-name" className="col-form-label">
                {" "}
                Comensales:{" "}
              </label>
              <input
                type="number"
                className="form-control"
                id="comensales-name"
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button
            onClick={handleForm}
            type="button"
            className="btn btn-primary"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentModalForm;
