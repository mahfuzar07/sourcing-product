import Section from '../../ui/Section';
import Container from '../../ui/Container';
import { PackageSearch, Search, Handshake, Truck, ChevronRight } from 'lucide-react';
import Button from '../../ui/Button';

const steps = [
	{
		title: 'Step 1',
		icon: PackageSearch,
		desc: 'Requirement Analysis & Product Specification',
	},
	{
		title: 'Step 2',
		icon: Search,
		desc: 'Supplier Sourcing & Factory Matching',
	},
	{
		title: 'Step 3',
		icon: Handshake,
		desc: 'Negotiation, Sampling & Quality Approval',
	},
	{
		title: 'Step 4',
		icon: Truck,
		desc: 'Production, Quality Control & Shipping',
	},
	{
		title: 'Step 5',
		icon: Handshake,
		desc: 'Negotiation, Sampling & Quality Approval',
	},
	{
		title: 'Step 6',
		icon: Truck,
		desc: 'Production, Quality Control & Shipping',
	},
];

export default function SourcingProcess() {
	return (
		<Section className="relative bg-[#edf2f6] py-16 md:py-20">
			<Container>
				<h2 className="md:text-5xl text-3xl font-bold text-center mb-12">Our Proven Sourcing Process</h2>

				<div className="grid md:grid-cols-6 gap-6 md:gap-4 relative">
					{steps.map((step, index) => (
						<div key={index} className="relative flex flex-col items-center">
							{/* Card */}
							<div className="bg-[#f2f3f5] rounded-2xl transition-all duration-300 p-6 text-center h-full w-full">
								<div className="mx-auto mb-5  rounded-2xl flex items-center justify-center">
									<step.icon className="w-12 h-12 text-[#96b1c7]" />
								</div>

								<h3 className="font-semibold text-xl mb-3 text-gray-800">{step.title}</h3>

								<p className="text-muted-foreground text-[15px] leading-relaxed">{step.desc}</p>
							</div>

							{/* Right Arrow - Hide on last item */}
							{index < steps.length - 1 && (
								<div className="hidden md:block absolute top-1/2 -right-3 translate-x-1/2 -translate-y-1/2 z-10">
									<div className="w-8 h-8 bg-[#edf2f6] shadow rounded-full flex items-center justify-center text-[#96b1c7]">
										<ChevronRight />
									</div>
								</div>
							)}
						</div>
					))}
				</div>
				<Button size="sm" className="py-3 rounded-full! mx-auto mt-5">
					Lorem ipsum dolor sit amet consectetur
				</Button>
			</Container>
		</Section>
	);
}
