import Section from '../../ui/Section';
import Container from '../../ui/Container';
import { ShieldCheck, DollarSign, SearchCheck } from 'lucide-react';

export default function WhyChooseUs() {
	return (
		<Section className="bg-linear-to-r  from-[#ddd5c2] via-[#ece9e1] to-[#ddd5c2] md:py-12!">
			<Container>
				<div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
					<div className="lg:col-span-8 space-y-5">
						<h2 className="md:text-5xl text-3xl font-bold mb-16">Why China Source Direct</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
							<div className="flex flex-col items-center justify-center gap-4 md:border-r-2 border-amber-100 pr-5 ">
								<div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center">
									<ShieldCheck className="text-white" />
								</div>
								<div className="text-center">
									<h4 className="font-semibold text-xl">Verified Supplier Network</h4>
									<p className="text-muted-foreground text-md">Factory audits & certifications</p>
								</div>
							</div>

							<div className="flex flex-col items-center justify-center gap-4 md:border-r-2 border-amber-100 pr-5">
								<div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center">
									<SearchCheck className="text-white" />
								</div>
								<div className="text-center">
									<h4 className="font-semibold text-xl">Verified Supplier Network</h4>
									<p className="text-muted-foreground text-md">Factory audits & certifications</p>
								</div>
							</div>

							<div className="flex flex-col items-center justify-center gap-4">
								<div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center">
									<DollarSign className="text-white" />
								</div>
								<div className="text-center">
									<h4 className="font-semibold text-xl">Verified Supplier Network</h4>
									<p className="text-muted-foreground text-md">Factory audits & certifications</p>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:col-span-4">
						<img src="/assets/map/map.jpg" className="w-full h-75 rounded-2xl shadow-lg object-cover" />
					</div>
				</div>
			</Container>
		</Section>
	);
}
