import {Ticket} from "@/lib/tickets"

type TicketItemProps = {
  ticket: Ticket;
  onClose: (id: number) => void;
};

export function TicketItem({ ticket, onClose }: TicketItemProps) {
  return (
    <li className="border rounded p-3 flex items-center justify-between">
      <div>
        <div className="font-medium">{ticket.title}</div>
        <div className="text-xs text-gray-500">
          Estado: {ticket.status} — Prioridad: {ticket.priority}
        </div>
      </div>

      {ticket.status !== "closed" && (
        <button
          className="text-sm border rounded px-2 py-1 hover:bg-gray-100"
          onClick={() => onClose(ticket.id)}
        >
          Cerrar
        </button>
      )}
    </li>
  );
}
