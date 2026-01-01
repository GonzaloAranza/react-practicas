"use client";
import Link from "next/link"
import { mockTickets, type Ticket, type StatusFilter as StatusFilterType , closeTickets , searchTicketsByText, filterTicketsByStatus} from "@/lib/tickets";
import { useRouter } from "next/navigation";
import { TicketList } from "./TicketList";
import { SearchBar } from "./SearchBar"; 
import { TicketsCounter } from "./TicketsCounter";
import { StatusFilter } from "./StatusFilter";
import { useVisibleTickets } from "@/hooks/useVisibleTickets";
import { useTickets } from "@/hooks/useTickets";



export default function TicketsPracticePage() {
    const router = useRouter();





const{
  tickets,
  closeTicket,
} = useTickets();


const {
  visibleTickets,
  searchTicket,
  setSearchTicket,
  statusFilter,
  setStatusFilter
} = useVisibleTickets(tickets);



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
        <h1>Tickets Filtrados:</h1>
        <TicketList
        tickets={visibleTickets}
        onClose={closeTicket}>
        </TicketList>



        <TicketsCounter
        tickets = {visibleTickets}
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