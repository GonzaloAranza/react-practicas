import type { Ticket } from "@/lib/tickets";
import { TicketItem } from "./TicketItem";

type TicketListProps = {
    tickets: Ticket[];
    onClose: (id: number) => void;
};

export function TicketList ({tickets, onClose} : TicketListProps){
    if (tickets.length === 0){
        return <p>Lista de tickets vacía</p>
    }

    return (
        <ul>
            {tickets.map((t)=>(
                <TicketItem
                key={t.id}
                ticket={t}
                onClose={onClose}></TicketItem>
            ))}
        </ul>
    )


}