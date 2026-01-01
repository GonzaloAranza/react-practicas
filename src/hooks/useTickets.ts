
import { useState } from "react";
import type { Ticket } from "@/lib/tickets";
import { mockTickets, closeTickets } from "@/lib/tickets";


export function useTickets() {

// estado inicial: los mockTickets
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);

  const closeTicket = (id: number) => {
    setTickets((prev) => closeTickets(prev, id));
  };


return{
  tickets,
  closeTicket,
};
}