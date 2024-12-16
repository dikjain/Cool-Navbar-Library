import React from 'react';
import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';
import { Minimize2 } from 'lucide-react';

export function MinimalNavbar({ className, logo, children }: NavbarProps) {
  return (
    <nav className={cn(
      "bg-white/5 backdrop-blur-sm",
      "border-b border-white/10",
      "animate-fade-in",
      className
    )}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {logo || <Minimize2 className="h-6 w-6 text-gray-400" />}
            <div className="hidden md:flex items-center gap-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}