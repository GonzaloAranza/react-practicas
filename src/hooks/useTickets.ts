
import { useState } from "react";
import type { Ticket, CreateTicketData, TicketStatus } from "@/lib/tickets";
import { mockTickets, closeTickets , createTicket, startTicket }  from "@/lib/tickets";


export function useTickets() {

// estado inicial: los mockTickets
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);

  const start = (id: number) => {
  setTickets((prev) => startTicket(prev, id));
};

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
  start
  };
}