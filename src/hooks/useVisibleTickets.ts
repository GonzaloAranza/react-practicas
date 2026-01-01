import { useState, useMemo } from "react";
import type { Ticket, StatusFilter as StatusFilterType } from "@/lib/tickets";
import { filterTicketsByStatus, searchTicketsByText } from "@/lib/tickets";



export function useVisibleTickets(tickets : Ticket[]) {
  const [searchTicket, setSearchTicket] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilterType>("all");

  const visibleTickets = useMemo(() => {
    return filterTicketsByStatus(
      searchTicketsByText(tickets, searchTicket),
      statusFilter
    );
  }, [tickets, searchTicket, statusFilter]);

  return {
    visibleTickets,
    searchTicket,
    setSearchTicket,
    statusFilter,
    setStatusFilter
  };
}
