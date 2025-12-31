     
type searchBarProps = {
  value: string;
  onChange: (value:string) => void;
};
     
export function SearchBar ({value, onChange}:searchBarProps){
 
  return(
   
        <div className="space-y-2">
            <label className="block text-sm font-medium">
            Buscar por texto:
            </label>
        <input
          className="border rounded px-2 py-1 w-full max-w-md"
          value={value}                            // 👈 lee del estado
          onChange={(e) => onChange(e.target.value)} // 👈 actualiza estado
          placeholder="Ej: no, VPN, error..."
        />
        </div>
  )
}   
  