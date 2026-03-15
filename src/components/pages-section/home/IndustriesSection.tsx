import Section from '../../ui/Section';
import Container from '../../ui/Container';

const industries = [
	{
		title: 'Electronics & Tech',
		img: '/assets/services/electronics.jpg',
		desc: 'From custom PCBs to smart home devices.',
	},
	{
		title: 'Consumer Goods',
		img: '/assets/services/consumer.png',
		desc: 'From custom POBs to smart home devices.',
	},
	{
		title: 'Industrial Machinery',
		img: '/assets/services/machine.jpg',
		desc: 'From custom POBs to smart home devices.',
	},
	{
		title: 'Textiles & Apparel',
		img: '/assets/services/textile.jpg',
		desc: 'From custom POBs to smart home devices.',
	},
];

export default function IndustriesSection() {
	return (
		<Section className="relative bg-[#edf2f6]">
			<Container>
				<h2 className="md:text-5xl text-3xl font-bold text-center mb-12">Core Industries We Serve</h2>

				<div className="grid md:grid-cols-4 gap-8">
					{industries.map((item, i) => (
						<div key={i} className="bg-white rounded-xl hover:shadow transition p-4 text-center">
							<img src={item.img} className="rounded-lg mb-4 h-35 w-full object-cover" />

							<h3 className="font-semibold mb-2 text-lg">{item.title}</h3>

							<p className="text-md text-muted-foreground">{item.desc}</p>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}
