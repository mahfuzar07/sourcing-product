import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline' | 'gradient' | 'gradientoOutline';
	size?: 'sm' | 'md' | 'lg';
	children: React.ReactNode;
}

export default function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
	const baseClasses = 'font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer px-5';

	const variantClasses = {
		primary: 'bg-sky-400 hover:bg-primary-dark text-background',

		gradient: 'bg-linear-to-r from-sky-200 to-purple-200 text-purple-700',

		gradientoOutline: 'border-2 border-foreground hover:bg-foreground hover:text-background text-foreground',

		secondary: 'bg-accent hover:bg-accent/90 text-foreground',

		outline: 'border-2 border-sky-200 hover:bg-sky-400 hover:text-white',
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
