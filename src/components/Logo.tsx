import { Boxes } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Boxes className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold text-primary">Power CoE</span>
    </div>
  );
}