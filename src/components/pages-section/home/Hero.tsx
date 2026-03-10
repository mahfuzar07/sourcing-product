import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Section from '../../ui/Section';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import CountNumber from '../../reusable/CountNumber';

export default function Hero() {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, ease: 'easeOut' },
		},
	};

	return (
		<Section className="pt-10 md:pt-18 2xl:pt-36 bg-gradient-to-b from-accent/5 to-transparent">
			<Container>
				<motion.div className="grid lg:grid-cols-2 gap-16 items-center" variants={containerVariants} initial="hidden" animate="visible">
					{/* LEFT SIDE */}
					<div>
						<motion.div variants={itemVariants} className="mb-6">
							<span className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium">Global Product Sourcing</span>
						</motion.div>

						<motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
							Source Premium Products
							<span className="gradient-text"> Directly From China</span>
						</motion.h1>

						<motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8 max-w-xl">
							Work with verified factories, discover trending products, and streamline your import process with our professional product sourcing
							service.
						</motion.p>

						<motion.div variants={itemVariants} className="flex flex-col sm:flex-row  gap-4">
							<Button size="md" className="gap-2">
								Start Sourcing
								<ArrowRight size={20} />
							</Button>

							<Button size="md" variant="outline">
								View Products
							</Button>
						</motion.div>
					</div>

					{/* RIGHT SIDE IMAGE */}
					<motion.div variants={itemVariants} className="relative">
						<img
							src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=900"
							alt="product sourcing"
							className="rounded-2xl shadow-xl w-full object-cover"
						/>

						{/* floating card */}
						<div className="absolute -bottom-6 -left-6 bg-background shadow-lg rounded-xl p-4 border flex items-center gap-3">
							<div className="bg-primary/10 text-primary p-2 rounded-lg">
								<ShieldCheck size={20} />
							</div>

							<div>
								<p className="text-sm font-medium">Trusted Suppliers</p>
								<p className="text-xs text-muted-foreground">Verified factories worldwide</p>
							</div>
						</div>
					</motion.div>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="mt-25 grid md:grid-cols-4 grid-cols-2 gap-8 pt-14 border-t border-muted/20 justify-center md:py-8 py-5"
					initial="hidden"
					animate="visible"
				>
					{[
						{ number: 500, label: 'Factories', suffix: '+' },
						{ number: 50000, label: 'Products', suffix: '+' },
						{ number: 98, label: 'Clients Happy', suffix: '%' },
						{ number: 5, label: 'Countries', suffix: '' },
					].map((stat, i) => (
						<div key={i} className="text-center">
							<div className="md:text-6xl text-5xl font-semibold text-primary">
								<CountNumber value={stat.number} />
								{stat.suffix}
							</div>

							<p className="md:text-2xl text-xl text-muted-foreground mt-2">{stat.label}</p>
						</div>
					))}
				</motion.div>
			</Container>
		</Section>
	);
}
