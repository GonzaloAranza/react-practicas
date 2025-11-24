export type TicketStatus = "open" | "in_progress" | "closed";

export type Ticket = {
  id: number;
  title: string;
  status: TicketStatus;
  priority: number;
};


 export {};