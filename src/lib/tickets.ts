export type TicketStatus = "open" | "in_progress" | "closed";

export type Ticket = {
  id: number;
  title: string;
  status: TicketStatus;
  priority: number;
};

export const mockTickets: Ticket[] = [
  { id: 1, title: "No anda el mail", status: "open", priority: 2 },
  { id: 2, title: "No arranca la PC", status: "in_progress", priority: 1 },
  { id: 3, title: "No imprime", status: "open", priority: 3 },
  { id: 4, title: "Error 404 en sistema", status: "closed", priority: 2 },
  { id: 5, title: "No puedo acceder a la VPN", status: "open", priority: 1 },
];

// función para cerrar un ticket SIN mutar el array
export function closeTickets(tickets: Ticket[], id: number): Ticket[] {
  return tickets.map((t) =>
    t.id === id ? { ...t, status: "closed" } : { ...t }
  );
}