"use client";

import { useForm } from "react-hook-form";
import type { CreateTicketData } from "@/lib/tickets";

type CreateTicketFormProps = {
  onCreateTicket: (data: CreateTicketData) => void;
};

export function CreateTicketForm({ onCreateTicket }: CreateTicketFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTicketData>({
    defaultValues: {
      title: "",
      description: "",
      priority: 1,
    },
  });

  const onSubmit = (data: CreateTicketData) => {
    onCreateTicket(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* TÍTULO */}
      <div>
        <label>Título</label>
        <input
          type="text"
          {...register("title", {
            required: "El título es obligatorio",
            minLength: {
              value: 3,
              message: "Mínimo 3 caracteres",
            },
          })}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      {/* DESCRIPCIÓN */}
      <div>
        <label>Descripción</label>
        <textarea
          {...register("description", {
            required: "La descripción es obligatoria",
          })}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      {/* PRIORIDAD */}
      <div>
        <label>Prioridad (1 a 3)</label>
        <input
          type="number"
          {...register("priority", {
            required: "La prioridad es obligatoria",
            min: {
              value: 1,
              message: "La prioridad mínima es 1",
            },
            max: {
              value: 3,
              message: "La prioridad máxima es 3",
            },
            valueAsNumber: true,
          })}
        />
        {errors.priority && <p>{errors.priority.message}</p>}
      </div>

      <button type="submit">Crear ticket</button>
    </form>
  );
}
