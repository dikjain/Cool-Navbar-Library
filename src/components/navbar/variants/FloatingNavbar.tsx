import React from 'react';
import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';
import { Cloud } from 'lucide-react';

export function FloatingNavbar({ className, logo, children }: NavbarProps) {
  return (
    <nav className={cn(
      "bg-white/5 backdrop-blur-xl border border-white/10",
      "rounded-full mx-4 mt-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
      "animate-float",
      className
    )}>
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {logo || <Cloud className="h-6 w-6 text-sky-400" />}
            <div className="hidden md:flex items-center gap-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
