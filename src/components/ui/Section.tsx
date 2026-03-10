import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
	return (
		<motion.section
			id={id}
			className={`py-16 md:py-24 ${className}`}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6 }}
		>
			{children}
		</motion.section>
	);
}
