  const tickets = [
    { id: 1, title: "No anda el mail", status: "open", priority: 2 },
    { id: 2, title: "No arranca la PC", status: "in_progress", priority: 1 },
    { id: 3, title: "No imprime", status: "open", priority: 3 },
    { id: 4, title: "Error 404 en sistema", status: "closed", priority: 2 },
    { id: 5, title: "No puedo acceder a la VPN", status: "open", priority: 1 },
  ];


  function getOrderedOpenTickets(tickets) { 
      

      ticketsOpen = tickets
      .filter((t) => t.status === "open")
      .sort(( a , b) => a.priority - b.priority ) ;
      
      return ticketsOpen;

  }


  console.log(getOrderedOpenTickets (tickets));
