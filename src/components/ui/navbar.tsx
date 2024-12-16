import React from 'react';
import { Menu, X, ChevronDown, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  variant?: 'default' | 'transparent' | 'minimal' | 'centered' | 'split';
  className?: string;
  logo?: React.ReactNode;
  children?: React.ReactNode;
}

export function Navbar({ 
  variant = 'default',
  className,
  logo,
  children 
}: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const baseStyles = "w-full";
  const variantStyles = {
    default: "bg-white border-b shadow-sm",
    transparent: "bg-transparent text-white",
    minimal: "bg-white border-b",
    centered: "bg-white border-b text-center",
    split: "bg-white border-b grid grid-cols-3"
  };

  return (
    <nav className={cn(baseStyles, variantStyles[variant], className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {logo}
          <div className="hidden md:flex space-x-8">
            {children}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-turquoise-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {children}
          </div>
        </div>
      )}
    </nav>
  );
}