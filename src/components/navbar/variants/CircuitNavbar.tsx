import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';


export function CircuitNavbar({ className, logo, children }: NavbarProps) {
  return (
    <nav className={cn(
      "bg-gray-900 border-t border-b border-emerald-500/30",
      "circuit-pattern relative",
      className
    )}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {logo}
            <div className="hidden md:flex items-center gap-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
