import type { Ticket } from "@/lib/tickets";

type TicketItemProps = {
  ticket: Ticket;
  onClose: (id: number) => void;
};

export function TicketItem({ ticket, onClose }: TicketItemProps) {
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

      {/* DESCRIPCIÓN */}
      <p className="text-gray-700">
        {ticket.description}
      </p>

      {/* PRIORIDAD / STATUS si querés */}
      <p className="text-sm">
        Prioridad: {ticket.priority}
      </p>

      <button
        onClick={() => onClose(ticket.id)}
        className="text-sm text-red-600 hover:underline"
      >
        Cerrar ticket
      </button>
    </li>
  );
}
