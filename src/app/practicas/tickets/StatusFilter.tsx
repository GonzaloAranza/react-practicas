import type { StatusFilter as StatusFilterType } from "@/lib/tickets";


type StatusFilterProps = {
  value: StatusFilterType;
  onChange: (value: StatusFilterType) => void;
};


export function StatusFilter({ value, onChange }: StatusFilterProps) {
  const options: { label: string; value: StatusFilterType }[] = [
    { label: "Todos", value: "all" },
    { label: "Abiertos", value: "open" },
    { label: "En progreso", value: "in_progress" },
    { label: "Cerrados", value: "closed" },
  ];

  return (
    <div className="flex gap-2">
      {options.map((opt) => {
        const isActive = opt.value === value;

        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={
              "border rounded px-2 py-1 text-sm " +
              (isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100")
            }
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}