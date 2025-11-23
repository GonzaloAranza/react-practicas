function countTicketsByStatus(tickets) {
  return tickets.reduce(
    (acc, ticket) => {
      if (ticket.status === "open") {
        acc.open++;
      } else if (ticket.status === "in_progress") {
        acc.in_progress++;
      } else if (ticket.status === "closed") {
        acc.closed++;
      }
      return acc; // SIEMPRE devolver el acumulador
    },
    { open: 0, in_progress: 0, closed: 0 } // valor inicial
  );
}