import TestimonialCard from '../../reusable/TestimonialCard';
import Section from '../../ui/Section';
import Container from '../../ui/Container';

export default function Testimonials() {
	const testimonials = [
		{
			quote: 'Sleek Scope transformed how we source products. We found quality suppliers in days instead of months. Highly recommended!',
			author: 'Sarah Johnson',
			title: 'CEO, EcoTech Solutions',
			rating: 5,
		},
		{
			quote: 'The verification process gives us peace of mind. We know every supplier on the platform is legitimate and reliable.',
			author: 'Michael Chen',
			title: 'Founder, Global Imports Co.',
			rating: 5,
		},
		{
			quote: 'Best investment for our sourcing team. The market intelligence alone has saved us thousands in unnecessary markups.',
			author: 'Emma Rodriguez',
			title: 'Operations Director, RetailMax',
			rating: 5,
		},
		{
			quote: 'The direct connection feature with suppliers has streamlined our negotiation process significantly.',
			author: 'David Park',
			title: 'Supply Chain Manager, TechHub',
			rating: 5,
		},
		{
			quote: 'Finally, a platform that understands the complexity of product sourcing. Exceptional support team too!',
			author: 'Lisa Thompson',
			title: 'Buyer, Fashion Forward Inc.',
			rating: 5,
		},
		{
			quote: "We've cut our sourcing costs by 30% since using Sleek Scope. The ROI has been incredible.",
			author: 'James Wilson',
			title: 'Business Manager, Urban Goods',
			rating: 5,
		},
	];

	return (
		<Section id="testimonials" className="bg-linear-to-br from-sky-50 via-purple-50 to-pink-50">
			<Container>
				<div className="mb-16 text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Trusted by Industry Leaders</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						See what companies across the globe are saying about their experience with Sleek Scope.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={index}
							quote={testimonial.quote}
							author={testimonial.author}
							title={testimonial.title}
							rating={testimonial.rating}
							index={index}
						/>
					))}
				</div>
			</Container>
		</Section>
	);
}
