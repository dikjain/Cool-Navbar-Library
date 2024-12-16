import React from 'react';
import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';

export function HolographicNavbar({ className, logo, children }: NavbarProps) {
  return (
    <nav className={cn(
      "bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20",
      "backdrop-blur-lg border-b border-white/10",
      "animate-gradient-x",
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