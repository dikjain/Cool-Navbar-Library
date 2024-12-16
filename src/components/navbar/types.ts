import { ReactNode } from 'react';

export interface NavbarProps {
  className?: string;
  logo?: ReactNode;
  children?: ReactNode;
}

export type NavbarVariant = 'glass' | 'neon' | 'holographic' | 'cyber';