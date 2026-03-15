import Footer from '../components/layouts/Footer';
import Navbar from '../components/layouts/Navbar';
// import CTA from '../components/pages-section/home/CTA';
import FeaturedProducts from '../components/pages-section/home/FeaturedProducts';
import Hero from '../components/pages-section/home/Hero';
// import HowItWorks from '../components/pages-section/home/HowItWorks';
import IndustriesSection from '../components/pages-section/home/IndustriesSection';
// import Services from '../components/pages-section/home/Services';
// import Testimonials from '../components/pages-section/home/Testimonials';
import WhyChooseUs from '../components/pages-section/home/WhyChooseUs';
// import TrustBar from '../components/pages-section/home/TrustBar';

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<Navbar />
			<main>
				<Hero />
				<IndustriesSection />
				<WhyChooseUs />
				{/* <TrustBar/> */}
				{/* <Services /> */}
				{/* <HowItWorks /> */}
				<FeaturedProducts />
				{/* <Testimonials /> */}
				{/* <CTA /> */}
				<Footer />
			</main>
			<footer />
		</div>
	);
}
