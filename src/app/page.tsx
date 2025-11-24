"use client";

import React, { useState } from "react";
import Link from "next/link"

export default function Page() {
  const [nombreInput, setNombreInput] = useState("");
  const [nombreMostrado, setNombreMostrado] = useState("");

  function manejarCambio(event: React.ChangeEvent<HTMLInputElement>) {
    setNombreInput(event.target.value);
  }
  
  function manejarClick() {
    setNombreMostrado(nombreInput);
  }

  const tickets = [
  { id: 1, title: "No anda el mail", status: "open", priority: 2 },
  { id: 2, title: "No arranca la PC", status: "in_progress", priority: 1 },
  { id: 3, title: "No imprime", status: "open", priority: 3 },
  { id: 4, title: "Error 404 en sistema", status: "closed", priority: 2 },
  { id: 5, title: "No puedo acceder a la VPN", status: "open", priority: 1 },
];

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        backgroundColor: "#a33434ff",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          minWidth: "280px",
        }}
      >
        <h1 style={{ marginBottom: "16px", fontSize: "20px" }}>
          Saludo interactivo
        </h1>

        <input
          type="text"
          placeholder="Escribí tu nombre"
          value={nombreInput}
          onChange={manejarCambio}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={manejarClick}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            marginBottom: "12px",
          }}
        >
          Saludar
        </button>

        {nombreMostrado && (
          <p style={{ fontSize: "16px" }}>Hola {nombreMostrado}</p>
        )}

         <Link href="/practicas/tickets">
        <button className="border rounded px-3 py-2 hover:bg-gray-100">
          Buton
         </button>
      </Link>
      
      <Link
         href="/practicas/tickets"
        className="inline-block border rounded px-3 py-2 hover:bg-gray-100"
>     Link solo
      </Link>

      </div>
    </main>
  );
}