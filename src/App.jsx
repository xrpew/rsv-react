import React from "react";
import ComponentModalForm from "./components/ComponentModalForm";
import ListaReservas from "./components/ListaReservas";

const MyModalComponent = () => {
  return (
    <>
      <div id="rellenar"></div>
      <button
        type="button"
        className="btn btn-primary m-4"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Open modal for @mdo
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <ComponentModalForm />
      </div>

      <ListaReservas/>
    </>
  );
};

export default MyModalComponent;
