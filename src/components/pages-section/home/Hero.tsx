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
		<Section
			className="relative pt-10 md:pt-18 2xl:pt-36 overflow-hidden
		bg-linear-to-br from-sky-50 via-purple-50 to-pink-50"
		>
			{/* decorative blobs */}
			<div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/30 blur-[120px]" />
			<div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-300/30 blur-[120px]" />

			<Container>
				<motion.div className="grid lg:grid-cols-2 gap-16 items-center" variants={containerVariants} initial="hidden" animate="visible">
					{/* LEFT */}
					<div>
						<motion.div variants={itemVariants} className="mb-6">
							<span
								className="inline-block px-4 py-1.5
							bg-linear-to-r from-sky-100 to-purple-100
							text-purple-700 rounded-full text-sm font-medium"
							>
								Global Product Sourcing
							</span>
						</motion.div>

						<motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
							Source Premium Products
							<span className="bg-linear-to-r from-purple-400 to-sky-300 bg-clip-text text-transparent"> Directly From China</span>
						</motion.h1>

						<motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8 max-w-xl">
							Work with verified factories, discover trending products, and streamline your import process with our professional product sourcing
							service.
						</motion.p>

						<motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
							<Button size="md" variant="primary" className="gap-2 shadow-lg shadow-purple-300/40">
								Start Sourcing
								<ArrowRight size={20} />
							</Button>

							<Button size="md" variant="outline" className="border-sky-200! hover:bg-sky-400">
								View Products
							</Button>
						</motion.div>
					</div>

					{/* RIGHT IMAGE */}
					<motion.div variants={itemVariants} className="relative">


						<img
							src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=900"
							alt="product sourcing"
							className="relative rounded-2xl shadow-2xl w-full object-cover"
						/>

						{/* floating card */}
						<div
							className="absolute -bottom-6 -left-6
						bg-white/80 backdrop-blur
						shadow-xl rounded-xl p-4 border flex items-center gap-3"
						>
							<div className="bg-linear-to-r from-purple-400 to-sky-300 text-white p-2 rounded-lg">
								<ShieldCheck size={20} />
							</div>

							<div>
								<p className="text-sm font-semibold">Trusted Suppliers</p>
								<p className="text-xs text-muted-foreground">Verified factories worldwide</p>
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* STATS */}
				<motion.div
					variants={itemVariants}
					className="mt-25 grid md:grid-cols-4 grid-cols-2 gap-8
					pt-14 border-t border-muted/20 justify-center md:py-8 py-5"
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
							<div
								className="md:text-6xl text-5xl font-bold
							bg-linear-to-r from-purple-400 to-sky-300
							bg-clip-text text-transparent"
							>
								<CountNumber value={stat.number} />
								{stat.suffix}
							</div>

							<p className="md:text-xl text-lg text-muted-foreground mt-2">{stat.label}</p>
						</div>
					))}
				</motion.div>
			</Container>
		</Section>
	);
}
