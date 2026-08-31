import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'success';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2";
  
  const variants = {
    default: "bg-brand-black text-brand-white",
    secondary: "bg-brand-gray text-brand-black",
    outline: "border border-brand-gray text-brand-black",
    destructive: "bg-red-100 text-red-800",
    success: "bg-green-100 text-green-800",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}
