import Section from '../../ui/Section';
import Container from '../../ui/Container';

export default function AboutProjects() {
	return (
		<Section className="bg-blue-900 text-white">
			<Container>
				<div className="grid md:grid-cols-2 gap-10">
					<div>
						<h3 className="text-xl font-bold mb-4">About China Source Direct</h3>

						<p className="text-sm opacity-80">
							We help global businesses source reliable products from Chinese factories with quality control and logistics support.
						</p>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-4">View Open Projects</h3>

						<input className="w-full rounded p-3 text-black" placeholder="Search..." />
					</div>
				</div>
			</Container>
		</Section>
	);
}
