import React, { useState } from "react";
import s from "./Formulario.module.css";
export default function Formulario() {
  const [nuevo, setNuevo] = useState({
    nombre: "",
    edad: "",
    carrera: "",
    hobbie: "",
  });
  const [datos, setDatos] = useState([]);

  const setear = (e) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (
      nuevo.nombre != "" &&
      nuevo.edad != "" &&
      nuevo.carrera != "" &&
      nuevo.hobbie != ""
    ) {
      setDatos([...datos, nuevo]);
      setNuevo({
        nombre: "",
        edad: "",
        carrera: "",
        hobbie: "",
      });
    } else {
      alert("Faltan Rellenar Datos");
    }
  };
  return (
    <div>
      <form>
        <div className="row m-4">
          <div className="form-group col-md-6 row">
            <label for="inputEmail4">Nombre</label>
            <input
              value={nuevo.nombre}
              className="form-control"
              id="name"
              placeholder="Nombre"
              name="nombre"
              onChange={(e) => setear(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Edad</label>
            <input
              onChange={(e) => setear(e)}
              value={nuevo.edad}
              name="edad"
              type="number"
              className="form-control"
              placeholder="Edad"
            />
          </div>
        </div>
        <div className="row m-4">
          <div className="form-group col-md-6">
            <label for="Carrera">Carrera</label>
            <input
              onChange={(e) => setear(e)}
              className="form-control"
              placeholder="Carrera / Estudios"
              name="carrera"
              value={nuevo.carrera}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Hobbie</label>
            <input
              onChange={(e) => setear(e)}
              className="form-control"
              placeholder="Hobbie"
              name="hobbie"
              value={nuevo.hobbie}
            />
          </div>
        </div>
      </form>
      <div className={s.divButton}>
        <button onClick={(e) => submit(e)} className="btn btn-primary m-4">
          Enviar
        </button>
      </div>

      {datos.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table-primary">
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Carrera</th>
                <th>Hobbie</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((element) => (
                <tr>
                  <td>{element.nombre}</td>
                  <td>{element.edad}</td>
                  <td>{element.carrera}</td>
                  <td>{element.hobbie}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
