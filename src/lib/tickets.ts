export type TicketStatus = "open" | "in_progress" | "closed";
export type StatusFilter = "all" | TicketStatus;

export type Ticket = {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;
  priority: number;
};

export type CreateTicketData = {
  title: string;
  description : string;
  priority: number;
};

export const mockTickets: Ticket[] = [
  { id: 1, title: "No anda el mail", description: "", status: "open", priority: 2 },
  { id: 2, title: "No arranca la PC", description: "", status: "in_progress", priority: 1 },
  { id: 3, title: "No imprime", description: "", status: "open", priority: 3 },
  { id: 4, title: "Error 404 en sistema", description: "", status: "closed", priority: 2 },
  { id: 5, title: "No puedo acceder a la VPN", description: "", status: "open", priority: 1 },
  { id: 6, title: "VPN", description: "", status: "open", priority: 1 },
  { id: 7, title: "VPNdsaddsa", description: "", status: "open", priority: 1 },
];

// función para cerrar un ticket SIN mutar el array
export function closeTickets(tickets: Ticket[], id: number): Ticket[] {
  return tickets.map((t) =>
    t.id === id ? { ...t, status: "closed" } : { ...t }
  );
}

export function searchTicketsByText(
  tickets: Ticket[],
  text: string
): Ticket[] {
  if (text === "") return tickets;
  
  const lower = text.toLowerCase().trim();
  return tickets.filter((t) => t.title.toLowerCase().includes(lower));
}


export function countTicketsByStatus(tickets:Ticket[]) : {open: number;in_progress: number;closed: number}{

  return tickets.reduce((acc, t) => {

    if (t.status === "open")
      acc.open++;
    if (t.status === "in_progress")
      acc.in_progress++;
    if (t.status === "closed")
      acc.closed++;
    return acc;
  }, { open: 0, in_progress: 0, closed: 0 });
  

  
}


export function filterTicketsByStatus(
  tickets: Ticket[],
  status: StatusFilter
): Ticket[] {
  if (status === "all") {
    // NO filtramos por estado, solo ordenamos
    return [...tickets].sort((a, b) => a.priority - b.priority);
  }

  // Si no es "all", entonces es "open" | "in_progress" | "closed"
  return tickets
    .filter((t) => t.status === status)
    .sort((a, b) => a.priority - b.priority);
}

export function createTicket (data : CreateTicketData) : Ticket {
  
  const newTicket: Ticket = {
    id: Date.now(), // Genera un ID único basado en la marca de tiempo actual
    title: data.title,
    description: data.description,
    status: "open",
    priority: data.priority
  };
  return newTicket;

}

export function addTicket(ticket : Ticket , tickets: Ticket[]): Ticket[] {

  return [...tickets, ticket];
  }; 
