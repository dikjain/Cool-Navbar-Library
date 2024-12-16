import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';
import { Zap } from 'lucide-react';

export function GlitchNavbar({ className, logo, children }: NavbarProps) {
  return (
    <nav className={cn(
      "bg-black border-t-2 border-b-2 border-red-500",
      "glitch-effect relative",
      className
    )}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {logo || <Zap className="h-6 w-6 text-red-500 animate-glitch" />}
            <div className="hidden md:flex items-center gap-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

