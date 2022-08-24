import React, { useMemo } from "react";
import s from "./Home.module.css";
import { useTable } from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  const datos = [
    {
      nombre: "Pedro",
      edad: 20,
      carrera: "Ingeniería",
      hobbie: "Futbol",
    },
    {
      nombre: "Rodrigo",
      edad: 22,
      carrera: "Arquitectura",
      hobbie: "Bajo eléctrico",
    },
    {
      nombre: "Romina",
      edad: 21,
      carrera: "Abogacía",
      hobbie: "Acrobacia",
    },
    {
      nombre: "Ana",
      edad: 23,
      carrera: "Contadora",
      hobbie: "Astronomía",
    },
  ];

  return (
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
  );
}

export default Home;
