"use client";
import Link from "next/link"
import { useState } from "react";
import { mockTickets, type Ticket, type StatusFilter as StatusFilterType , closeTickets , searchTicketsByText, filterTicketsByStatus} from "@/lib/tickets";
import { useRouter } from "next/navigation";
import { TicketList } from "./TicketList";
import { SearchBar } from "./SearchBar"; 
import { TicketsCounter } from "./TicketsCounter";
import { StatusFilter } from "./StatusFilter";





export default function TicketsPracticePage() {
    const router = useRouter();


    // estado inicial: los mockTickets
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);
  const [searchTicket, setSearchTicket] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilterType>("all")




  const handleClose = (id: number) => {
    setTickets((prev) => closeTickets(prev, id));
  };



let visibleTickets = tickets;

visibleTickets = filterTicketsByStatus(searchTicketsByText(visibleTickets, searchTicket),statusFilter);



  return (
    <main className="p-6 space-y-4">
       <Link href={"/"}
        className="inline-block border rounded px-3 py-2 hover:bg-gray-100"
        >
               ⬅ Volver al inicio

       </Link>



      <h1 className="text-2xl font-bold">Práctica de Tickets</h1>
       

      <SearchBar
      value = {searchTicket}
      onChange={setSearchTicket}>
      </SearchBar>

      <StatusFilter
      value={statusFilter}
      onChange={setStatusFilter}>

      </StatusFilter>

      {/*}<ul className="space-y-2">
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
      </ul>{*/}

        <h1>Tickets Filtrados:</h1>

        <TicketList
        tickets={visibleTickets}
        onClose={handleClose}>
        </TicketList>



        <TicketsCounter
        tickets = {tickets}
        ></TicketsCounter>
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