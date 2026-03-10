import { motion } from 'framer-motion';

interface ProductCardProps {
	image: string;
	title: string;
	category: string;
	price: string;
	index?: number;
}

export default function ProductCard({ image, title, category, price, index = 0 }: ProductCardProps) {
	return (
		<motion.div
			className="card-base overflow-hidden rounded-lg"
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.1, duration: 0.5 }}
		>
			<div className="aspect-square w-full h-[400px] bg-muted/20 overflow-hidden rounded-lg">
				<motion.img src={image} alt={title} className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} />
			</div>

			<div className="p-4 md:p-5">
				<p className="text-sm text-muted-foreground mb-1 uppercase tracking-wide">{category}</p>

				<h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>

				<p className="text-accent font-semibold text-lg">{price}</p>
			</div>
		</motion.div>
	);
}
