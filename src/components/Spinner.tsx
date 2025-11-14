import { Loader2 } from "lucide-react";

export function Spinner({ label = "Loading...", size = 42 }: { label?: string, size?: number }) {
  return (
    <div className="w-100 my-8 flex items-center justify-center gap-2 text-gray-500">
      <Loader2 size={size} className="animate-spin" />
      <span className="text-lg font-bold">{label}</span>
    </div>
  );
}