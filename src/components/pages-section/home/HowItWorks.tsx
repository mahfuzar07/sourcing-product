import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section from '../../ui/Section';
import Container from '../../ui/Container';

export default function HowItWorks() {
	const steps = [
		{
			number: '01',
			title: 'Create Your Profile',
			description: "Set up your account and tell us what you're looking for in just a few minutes.",
		},
		{
			number: '02',
			title: 'Browse & Search',
			description: 'Explore thousands of verified suppliers and products with detailed information and ratings.',
		},
		{
			number: '03',
			title: 'Connect & Negotiate',
			description: 'Reach out directly to suppliers, discuss terms, and get the best possible prices.',
		},
		{
			number: '04',
			title: 'Order & Track',
			description: 'Place orders, track shipments in real-time, and manage your entire supply chain seamlessly.',
		},
	];

	return (
		<Section id="how-it-works" className="bg-linear-to-br from-sky-50 via-purple-50 to-pink-50">
			<Container>
				<div className="mb-16 text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
						Four Simple <span className="bg-linear-to-r from-purple-400 to-sky-300 bg-clip-text text-transparent">Steps</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">Getting started with Sleek Scope is straightforward and intuitive.</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
					{steps.map((step, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							className="relative"
						>
							<div className="card-base p-6 md:p-8 h-full">
								<div className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-b from-purple-300 to-sky-300 bg-clip-text text-transparent">
									{step.number}
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
								<p className="text-muted-foreground leading-relaxed">{step.description}</p>
							</div>

							{index < steps.length - 1 && (
								<div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
									<ArrowRight size={24} className="text-muted" />
								</div>
							)}
						</motion.div>
					))}
				</div>
			</Container>
		</Section>
	);
}
