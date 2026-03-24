import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ label: 'About Us', href: '#' },
		{ label: 'Sourcing Services', href: '#' },
		{ label: 'Product Categories', href: '#' },
		{ label: 'Compliance', href: '#' },
		{ label: 'Contact', href: '#' },
		{ label: 'Blog', href: '#' },
	];

	return (
		<>
			<motion.nav
				className="bg-linear-to-r  from-[#d9dcde] via-[#ffffff] to-[#d9dcde] border-b"
				initial={{ y: -60 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.4 }}
			>
				<Container>
					<div className="flex items-center justify-between h-22">
						{/* logo */}
						<div className="flex items-center gap-2 font-bold text-xl">
							<div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
							<span>
								Source <span className="text-yellow-600">Product</span>
							</span>
						</div>

						{/* desktop menu */}
						<div className="hidden lg:flex items-center gap-8 font-medium">
							{navItems.map((item) => (
								<a key={item.label} href={item.href} className="hover:text-yellow-600 transition text-lg font-semibold">
									{item.label}
								</a>
							))}
						</div>

						{/* right actions */}
						<div className="hidden lg:flex items-center gap-6">
							<Search size={20} className="text-gray-600 cursor-pointer" />

							<Button className="hover:bg-blue-700 text-white px-5">Get a Quote</Button>
						</div>

						{/* mobile button */}
						<button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>

					{/* mobile menu */}
					{isOpen && (
						<div className="lg:hidden pb-6">
							<div className="flex flex-col gap-4">
								{navItems.map((item) => (
									<a key={item.label} href={item.href} className="py-2 border-b" onClick={() => setIsOpen(false)}>
										{item.label}
									</a>
								))}
								<Button className="mt-4 bg-blue-600 text-white">Get a Quote</Button>
							</div>
						</div>
					)}
				</Container>
			</motion.nav>
		</>
	);
}
