import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';

export function GlassNavbar({ className, logo, children }: NavbarProps) {
  return (
    <nav className={cn(
      "backdrop-blur-md bg-white/10 border border-white/20 shadow-lg",
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