import { Facebook, Twitter, Instagram, Linkedin, Search } from 'lucide-react'; // or use heroicons/react
import Section from '../ui/Section';
import Container from '../ui/Container';

export default function Footer() {
	return (
		<Section className="bg-[#0a2540] text-white pb-5!">
			<Container className="relative">
				<div className="grid md:grid-cols-2 gap-10">
					{/* Left Column - About */}
					<div>
						<h3 className="text-2xl font-semibold mb-4">About China Source Direct</h3>
						<p className="text-gray-300 text-lg leading-relaxed mb-6">
							Work China Source Direct is a professional sourcing agency, and is conscious of getting accurate and concise contacts, and biological
							categories.
						</p>

						{/* Social Icons */}
						<div className="flex gap-4">
							<a href="#" className="text-gray-200 hover:text-white transition-colors">
								<Facebook size={22} />
							</a>
							<a href="#" className="text-gray-200 hover:text-white transition-colors">
								<Twitter size={22} />
							</a>
							<a href="#" className="text-gray-200 hover:text-white transition-colors">
								<Instagram size={22} />
							</a>
							<a href="#" className="text-gray-200 hover:text-white transition-colors">
								<Linkedin size={22} />
							</a>
						</div>
					</div>

					{/* Right Column - View Open Projects */}
					<div>
						<h3 className="text-2xl font-semibold mb-4">View Open Projects</h3>

						<div className="relative mb-8">
							<input
								type="text"
								placeholder="Search..."
								className="w-full bg-white text-black border border-white/20 rounded-md py-3 px-5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-white/40"
							/>
							<button className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-400 hover:bg-orange-500 text-white h-full px-8 rounded-md transition-colors">
								<Search />
							</button>
						</div>

						{/* City Contacts */}
						<div className="grid grid-cols-3 gap-6 text-sm">
							<div>
								<div className="text-orange-400 font-medium">Shenzhen</div>
								<div className="text-gray-400">Shenzhen</div>
								<div className="text-gray-400">+1 (915) 257 3590</div>
							</div>
							<div>
								<div className="text-orange-400 font-medium">Guangzhou</div>
								<div className="text-gray-400">Guangzhou</div>
								<div className="text-gray-400">+1 (915) 252 5530</div>
							</div>
							<div>
								<div className="text-orange-400 font-medium">Hong Kong</div>
								<div className="text-gray-400">Hong Kong</div>
								<div className="text-gray-400">+1 (915) 357 6965</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 border-t border-white/10 pt-6">
					<div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
						<div>© 2024 China Source Direct. All Rights Reserved.</div>

						<div className="flex items-center gap-8">
							<div className="flex gap-6">
								<a href="#" className="hover:text-white transition-colors">
									Shenzhen
								</a>
								<a href="#" className="hover:text-white transition-colors">
									Guangzhou
								</a>
								<a href="#" className="hover:text-white transition-colors">
									Hong Kong
								</a>
							</div>

							{/* Decorative star (you can replace with an SVG or image) */}
							<div className="text-2xl text-white/30">✧</div>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}
