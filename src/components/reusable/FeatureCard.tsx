import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FeatureCardProps {
	icon: ReactNode;
	title: string;
	description: string;
	index?: number;
}

export default function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
	return (
		<motion.div
			className="card-base p-6 md:p-8"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.1, duration: 0.5 }}
			whileHover={{ y: -4 }}
		>
			<div className="flex items-start gap-4 md:gap-6">
				<div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg  flex items-center justify-center text-white text-2xl bg-linear-to-r from-purple-300 to-sky-300">
					{icon}
				</div>
				<div className="flex-1">
					<h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{title}</h3>
					<p className="text-muted-foreground leading-relaxed">{description}</p>
				</div>
			</div>
		</motion.div>
	);
}
