import { Search, Shield, TrendingUp, Zap } from 'lucide-react';
import FeatureCard from '../../reusable/FeatureCard';
import Section from '../../ui/Section';
import Container from '../../ui/Container';

export default function Services() {
	const services = [
		{
			icon: <Search size={32} />,
			title: 'Smart Discovery',
			description: 'AI-powered search finds the perfect suppliers and products for your specific needs in seconds.',
		},
		{
			icon: <Shield size={32} />,
			title: 'Verified Partners',
			description: 'Every supplier is vetted and verified for quality, reliability, and compliance with international standards.',
		},
		{
			icon: <TrendingUp size={32} />,
			title: 'Market Intelligence',
			description: 'Access real-time market trends, pricing analytics, and competitive insights to make informed decisions.',
		},
		{
			icon: <Zap size={32} />,
			title: 'Instant Connections',
			description: 'Connect directly with suppliers, negotiate terms, and close deals faster than ever before.',
		},
	];

	return (
		<Section id="services" className="bg-background">
			<Container>
				<div className="mb-16 text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
						Why Choose <span className="bg-linear-to-r from-purple-400 to-sky-300 bg-clip-text text-transparent"> Sleek Scope?</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						We've revolutionized the product sourcing experience with cutting-edge technology and unmatched reliability.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6 md:gap-8">
					{services.map((service, index) => (
						<FeatureCard key={index} icon={service.icon} title={service.title} description={service.description} index={index} />
					))}
				</div>
			</Container>
		</Section>
	);
}
