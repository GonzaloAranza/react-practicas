"use client";

import { useState } from "react";
import { mockTickets, type Ticket, closeTickets } from "@/lib/tickets";
import Link from "next/link"
import { useRouter } from "next/navigation";


export default function TicketsPracticePage() {
        const router = useRouter();


    // estado inicial: los mockTickets
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);

  const handleClose = (id: number) => {
    setTickets((prev) => closeTickets(prev, id));
  };

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Práctica de Tickets</h1>

      <ul className="space-y-2">
        {tickets.map((t) => (
          <li
            key={t.id}
            className="border rounded p-3 flex items-center justify-between"
          >
            <div>
              <div className="font-medium">{t.title}</div>
              <div className="text-xs text-gray-500">
                Estado: {t.status} — Prioridad: {t.priority}
              </div>
            </div>

            {t.status !== "closed" && (
              <button
                className="text-sm border rounded px-2 py-1 hover:bg-gray-100"
                onClick={() => handleClose(t.id)}
              >
                Cerrar
              </button>
            )}
          </li>
        ))}
      </ul>

         <Link
         href="/"
        className="inline-block border rounded px-3 py-2 hover:bg-gray-100"
>            Link solo
      </Link>

        <button onClick={() => router.back()}>
        ⬅ Volver con router.back
        </button>
    </main>
  );
}