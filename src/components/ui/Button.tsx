import React from 'react';
// import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'sm' | 'md' | 'lg';
	children: React.ReactNode;
}

export default function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
	const baseClasses = 'font-semibold rounded-full transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer';

	const variantClasses = {
		primary: 'bg-primary hover:bg-primary-dark text-background',
		secondary: 'bg-accent hover:bg-accent/90 text-foreground',
		outline: 'border-2 border-foreground hover:bg-foreground hover:text-background text-foreground',
	};

	const sizeClasses = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg',
	};

	return (
		<button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
			{children}
		</button>
	);
}
