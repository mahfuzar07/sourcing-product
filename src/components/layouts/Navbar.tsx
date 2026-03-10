import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';


export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ label: 'Services', href: '#services' },
		{ label: 'How It Works', href: '#how-it-works' },
		{ label: 'Products', href: '#products' },
		{ label: 'About', href: '#about' },
	];

	return (
		<motion.nav
			className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-muted/20"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Container>
				<div className="flex items-center justify-between h-20">
					<motion.div className="text-2xl font-bold text-primary" whileHover={{ scale: 1.05 }}>
						Sleek Scope
					</motion.div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<a key={item.label} href={item.href} className="text-foreground hover:text-primary transition-colors duration-200">
								{item.label}
							</a>
						))}
					</div>

					<div className="hidden md:flex gap-4">
						<Button variant="outline" size="sm">
							Sign In
						</Button>
						<Button size="sm">Get Started</Button>
					</div>

					{/* Mobile Menu Button */}
					<button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
						{isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<motion.div
						className="md:hidden pb-6 border-t border-muted/20"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
					>
						<div className="flex flex-col gap-4 pt-4">
							{navItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="text-foreground hover:text-primary transition-colors duration-200"
									onClick={() => setIsOpen(false)}
								>
									{item.label}
								</a>
							))}
							<div className="flex flex-col gap-2 pt-2">
								<Button variant="outline" size="sm">
									Sign In
								</Button>
								<Button size="sm">Get Started</Button>
							</div>
						</div>
					</motion.div>
				)}
			</Container>
		</motion.nav>
	);
}
