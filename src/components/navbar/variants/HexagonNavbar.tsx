import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';
import { Hexagon } from 'lucide-react';

export function HexagonNavbar({ className, logo, children }: NavbarProps) {
  return (
    <nav className={cn(
      "bg-gradient-to-r from-violet-600 to-indigo-600",
      "clip-path-hexagon relative",
      className
    )}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {logo || <Hexagon className="h-6 w-6 text-white" />}
            <div className="hidden md:flex items-center gap-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}