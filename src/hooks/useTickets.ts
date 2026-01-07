
import { useState } from "react";
import type { Ticket, CreateTicketData } from "@/lib/tickets";
import { mockTickets, closeTickets , createTicket}  from "@/lib/tickets";


export function useTickets() {

// estado inicial: los mockTickets
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);

  const closeTicket = (id: number) => {
    setTickets((prev) => closeTickets(prev, id));
  };

  const addTicket = (data: CreateTicketData) => {
     setTickets((prev) => [...prev, createTicket(data) ]);
  }
 


return{
  tickets,
  closeTicket,
  addTicket,
  };
}