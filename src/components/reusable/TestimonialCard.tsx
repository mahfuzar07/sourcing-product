import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
	quote: string;
	author: string;
	title: string;
	rating: number;
	index?: number;
}

export default function TestimonialCard({ quote, author, title, rating, index = 0 }: TestimonialCardProps) {
	return (
		<motion.div
			className="card-base p-6 md:p-8"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.1, duration: 0.5 }}
		>
			<div className="flex gap-1 mb-4">
				{Array.from({ length: rating }).map((_, i) => (
					<Star key={i} size={20} className="fill-amber-300 text-accent" />
				))}
			</div>
			<p className="text-foreground mb-6 leading-relaxed italic">"{quote}"</p>
			<div>
				<p className="font-semibold text-foreground">{author}</p>
				<p className="text-sm text-muted-foreground">{title}</p>
			</div>
		</motion.div>
	);
}
