import React from 'react';
import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';
import { Sparkles } from 'lucide-react';

export function GradientBorderNavbar({ className, logo, children }: NavbarProps) {
  return (
    <nav className={cn(
      "bg-black p-[1px] rounded-lg mx-4 mt-4",
      "before:content-[''] before:absolute before:inset-0",
      "before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-cyan-500",
      "before:animate-gradient-x before:rounded-lg",
      "relative isolate",
      className
    )}>
      
    
      <div className="bg-black rounded-lg relative z-10 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {logo || <Sparkles className="h-6 w-6 text-purple-400" />}
            <div className="hidden md:flex items-center gap-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}