import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';
import { Waves } from 'lucide-react';

export function AuroraNavbar({ className, logo, children }: NavbarProps) {
  return (
    <nav className={cn(
      "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
      "aurora-effect relative",
      className
    )}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {logo || <Waves className="h-6 w-6 text-white animate-wave" />}
            <div className="hidden md:flex items-center gap-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}