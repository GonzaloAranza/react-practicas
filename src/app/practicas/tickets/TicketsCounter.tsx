import { Ticket } from "@/lib/tickets"
import { countTicketsByStatus } from "@/lib/tickets";

type TicketCounterProp = {
  tickets: Ticket[];
};



export function TicketsCounter({tickets} : TicketCounterProp) {

const {
    open,
    in_progress,
    closed,
} = countTicketsByStatus(tickets);

    return(
          <div>
    Abiertos: {open} — En progreso: {in_progress} — Cerrados: {closed}
  </div>
    )
}

