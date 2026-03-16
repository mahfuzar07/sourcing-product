import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline' | 'gradient' | 'gradientoOutline' | 'default';
	size?: 'sm' | 'md' | 'lg' | 'xs';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
	const baseClasses = 'font-semibold rounded-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer';

	const variantClasses = {
		primary: 'bg-[#23659b] hover:bg-[#1b4e78] text-white',

		gradient: 'bg-gradient-to-r from-sky-200 to-purple-200 text-purple-700',

		gradientoOutline: 'border-2 border-black hover:bg-black hover:text-white',

		secondary: 'bg-gray-200 hover:bg-gray-300 text-black',

		default: 'bg-transparent',

		outline: 'border-2 border-sky-200 hover:bg-blue-600 hover:text-white',
	};

	const sizeClasses = {
		xs: 'px-2 py-1 text-xs',
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-5 py-2.5 text-base',
		lg: 'px-7 py-3 text-lg',
	};

	return (
		<button ref={ref} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
			{children}
		</button>
	);
});

Button.displayName = 'Button';

export default Button;
