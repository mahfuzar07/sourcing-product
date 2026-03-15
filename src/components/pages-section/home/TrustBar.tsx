import { ShieldCheck, Truck, Factory, BadgeCheck } from 'lucide-react';
import Section from '../../ui/Section';
import Container from '../../ui/Container';

export default function TrustBar() {
	return (
		<Section className="bg-linear-to-r  from-[#ddd5c2] via-[#ece9e1] to-[#ddd5c2] border-y py-8! relative">
			<Container>
				<div className="text-center mb-6 font-bold leading-tight md:text-3xl uppercase">
					Trusted Sourcing From Across 30+ Chinese Manufacturing Hubs
				</div>

				<div className="md:flex grid grid-cols-1 items-center justify-evenly gap-5 text-center text-sm md:text-xl font-bold flex-wrap">
					<div className="flex items-center justify-center gap-2 ">
						<BadgeCheck className="fill-black text-white/80 md:h-9 md:w-9" />
						<span>Shenzhen Electronics Compliance</span>
					</div>

					<div className="flex items-center justify-center gap-2">
						<ShieldCheck className="fill-black text-white/80 md:h-9 md:w-9" />
						<span>Quality Control Certified</span>
					</div>

					<div className="flex items-center justify-center gap-2">
						<Factory className="fill-black text-white/80 md:h-9 md:w-9" />
						<span>Direct Factory Access</span>
					</div>

					<div className="flex items-center justify-center gap-2">
						<Truck className="fill-black text-white/80 md:h-9 md:w-9" />
						<span>Logistics & Shipping</span>
					</div>
				</div>
			</Container>
		</Section>
	);
}
