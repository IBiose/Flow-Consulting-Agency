import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Primary: Orange Background, Black Text
    primary: "bg-accent text-black hover:bg-white hover:text-black shadow-[0_0_20px_rgba(255,111,59,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]",
    // Secondary: White/Off-White Background, Black Text
    secondary: "bg-secondary text-black hover:bg-accent hover:text-black shadow-lg",
    // Outline: Border Secondary, Text Secondary
    outline: "border border-secondary/30 text-secondary hover:border-accent hover:text-accent hover:bg-accent/5 bg-transparent",
    // Ghost: Subtle
    ghost: "text-muted hover:text-accent hover:bg-white/5",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;