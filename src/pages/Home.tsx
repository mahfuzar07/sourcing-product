import Navbar from '../components/layouts/Navbar';
import CTA from '../components/pages-section/home/CTA';
import FeaturedProducts from '../components/pages-section/home/FeaturedProducts';
import Hero from '../components/pages-section/home/Hero';
import HowItWorks from '../components/pages-section/home/HowItWorks';
import Services from '../components/pages-section/home/Services';
import Testimonials from '../components/pages-section/home/Testimonials';

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<Navbar />
			<main>
				<Hero />
				<Services />
				<HowItWorks />
				<FeaturedProducts />
				<Testimonials />
				<CTA />
			</main>
			<footer />
		</div>
	);
}
