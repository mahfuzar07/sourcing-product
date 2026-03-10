import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section from '../../ui/Section';
import Container from '../../ui/Container';
import Button from '../../ui/Button';

export default function CTA() {
	return (
		<Section id="cta" className="bg-primary">
			<Container>
				<motion.div
					className="text-center max-w-3xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-background mb-6 text-balance">Ready to Transform Your Sourcing?</h2>

					<p className="text-lg text-background/90 mb-8 leading-relaxed">
						Join thousands of businesses that are already sourcing smarter with Sleek Scope. Start your free trial today.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="bg-background hover:bg-background/90 text-primary gap-2">
							Start Free Trial
							<ArrowRight size={20} />
						</Button>
						<Button variant="outline" size="lg" className="border-background text-background hover:bg-background/10">
							Schedule Demo
						</Button>
					</div>

					<p className="text-sm text-background/70 mt-6">No credit card required. 14 days free access. Cancel anytime.</p>
				</motion.div>
			</Container>
		</Section>
	);
}
