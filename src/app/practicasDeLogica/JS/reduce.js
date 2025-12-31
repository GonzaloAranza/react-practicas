const tickets = [
  { id: 1, title: "No anda el mail", status: "open", priority: 2 },
  { id: 2, title: "No arranca la PC", status: "in_progress", priority: 1 },
  { id: 3, title: "No imprime", status: "open", priority: 3 },
  { id: 4, title: "Error 404 en sistema", status: "closed", priority: 2 },
  { id: 5, title: "No puedo acceder a la VPN", status: "open", priority: 1 },
];



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


countTicketsByStatus (tickets);