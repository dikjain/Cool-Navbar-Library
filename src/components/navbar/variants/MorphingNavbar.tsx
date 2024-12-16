
import React from 'react';
import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';
import { Hexagon } from 'lucide-react';

export function MorphingNavbar({ className, logo, children }: NavbarProps) {
  return (
    <nav className={cn(
      "bg-gradient-to-r from-purple-600 to-indigo-600",
      "clip-path-morphing shadow-lg",
      className
    )}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {logo || <Hexagon className="h-6 w-6 text-white animate-spin-slow" />}
            <div className="hidden md:flex items-center gap-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
