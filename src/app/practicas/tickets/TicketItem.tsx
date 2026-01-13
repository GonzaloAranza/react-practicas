import type { Ticket } from "@/lib/tickets";


type TicketItemProps = {
  ticket: Ticket;
  onClose: (id: number) => void;
  onStart: (id: number) => void;
};

export function TicketItem({ ticket, onClose, onStart }: TicketItemProps) {
  return (
    <li className="border rounded p-3 space-y-1">
      {/* ID */}
      <p className="text-sm text-gray-500">
        Ticket #{ticket.id}
      </p>

      {/* TÍTULO */}
      <h3 className="font-semibold">
        {ticket.title}
      </h3>

         {/* Status */}
      <h3 className="font-semibold">
        {ticket.status}
      </h3>

      {/* DESCRIPCIÓN */}
      <p className="text-gray-700">
        {ticket.description}
      </p>

      {/* PRIORIDAD / STATUS si querés */}
      <p className="text-sm">
        Prioridad: {ticket.priority}
      </p>




        {ticket.status === "open" && (
        <button  onClick={() => onStart(ticket.id)}>
          Start
        </button>
      )}

      {ticket.status === "in_progress" && (
         <button
        onClick={() => onClose(ticket.id)}
        className="text-sm text-red-600 hover:underline"
      >
        Cerrar ticket
      </button>
      )}
    </li>
  );
}
