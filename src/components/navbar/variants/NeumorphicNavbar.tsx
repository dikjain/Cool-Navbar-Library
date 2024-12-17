import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';
import { Moon } from 'lucide-react';

export function NeumorphicNavbar({ className, logo, children }: NavbarProps) {
  return (
    <nav className={cn(
      "bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]",
      "rounded-xl mx-4 mt-4",
      className
    )}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {logo || <Moon className="h-6 w-6 text-gray-600" />}
            <div className="hidden md:flex items-center gap-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}