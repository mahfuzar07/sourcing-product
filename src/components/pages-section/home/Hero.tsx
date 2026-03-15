import { ArrowRight } from 'lucide-react';
import Section from '../../ui/Section';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import TrustBar from './TrustBar';

export default function Hero() {
	return (
		<Section className="relative pt-8 pb-0 md:py-0! bg-gray-100 md:h-[calc(100vh-80px)] flex flex-col justify-between gap-10">
			{/* Background warehouse */}
			<div className="flex items-center justify-center w-full h-full">
				<img src="/assets/hero/hero-bg.png" className="absolute inset-0 w-full h-full object-cover object-center opacity-40" />

				<Container className="relative z-10 text-center">
					<h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
						Bridging Global Demand With
						<br />
						<span className="text-gray-900">China's Manufacturing Might</span>
					</h1>

					<p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
						End-to-End Product Sourcing and Quality Control Solutions from China. We manage the search, negotiations, and logistics.
					</p>

					<div className="flex justify-center gap-4 mt-8 flex-wrap">
						<Button size="md" className="bg-[#cf903f]! text-white uppercase">
							Start Sourcing Project
						</Button>

						<Button size="md" className="uppercase">
							Browse Products
							<ArrowRight size={18} />
						</Button>
					</div>
				</Container>
			</div>

			<TrustBar />
		</Section>
	);
}
