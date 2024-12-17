import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';

export function NeonNavbar({ className, logo, children }: NavbarProps) {
  return (
    <nav className={cn(
      "bg-black border-b-2 border-cyan-500",
      "shadow-[0_0_15px_rgba(0,255,255,0.5)]",
      "fixed w-full top-0 z-50",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
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