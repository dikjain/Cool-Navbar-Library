import { cn } from '@/lib/utils';
import { NavbarProps } from '../types';

export function FuturisticNavbar({ className, logo, children }: NavbarProps) {
  return (
    <nav
      className={cn(
        "bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b-2 border-cyan-400",
        "relative w-full top-0 z-50 overflow-hidden shadow-lg",
        "before:content-[''] before:absolute before:inset-0 before:bg-grid-small-cyan/20",
        "before:animate-gridMove",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="text-cyan-400 text-3xl font-extrabold tracking-widest neon-text animate-pulse">
              {logo}
            </div>
            <div className="hidden md:flex items-center gap-6">
              {children}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
              Sign In
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

