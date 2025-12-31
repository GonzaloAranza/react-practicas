"use client";

import Link from "next/link"


     

export default function HomePage() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Inicio</h1>
      <p className="text-sm text-gray-600">
        Este es el laboratorio de prácticas con React + Next.
      </p>

      <Link href="/practicas/tickets">
        <button className="border rounded px-3 py-2 hover:bg-gray-100">
          Ir a práctica de tickets
        </button>
      </Link>
    </main>
  );
}
   

