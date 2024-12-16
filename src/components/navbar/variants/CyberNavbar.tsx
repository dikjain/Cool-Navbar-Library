import React from 'react';
import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';
import { PrinterIcon } from 'lucide-react';

export function CyberNavbar({ className, logo, children }: NavbarProps) {


  return (
    <nav className={cn(
      "bg-black border-t-2 border-b-2 border-yellow-500",
      "before:content-[''] before:absolute before:inset-0",
      "before:bg-grid-small-yellow/10",
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
