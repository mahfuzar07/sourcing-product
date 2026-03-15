import { motion } from 'framer-motion';
import Section from '../../ui/Section';
import Container from '../../ui/Container';
import ProductCard from '../../reusable/ProductCard';
import Button from '../../ui/Button';

export default function FeaturedProducts() {
	const products = [
		{
			image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=500&fit=crop',
			title: 'Premium Wireless Earbuds',
			category: 'Electronics',
			price: '$89.99',
		},
		{
			image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
			title: 'Stainless Steel Watch',
			category: 'Accessories',
			price: '$199.99',
		},
		{
			image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
			title: 'Designer Sunglasses',
			category: 'Fashion',
			price: '$299.99',
		},
		{
			image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
			title: 'Premium Backpack',
			category: 'Travel',
			price: '$149.99',
		},
		{
			image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
			title: 'Leather Shoes',
			category: 'Footwear',
			price: '$129.99',
		},
		{
			image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop',
			title: 'Canvas Sneakers',
			category: 'Footwear',
			price: '$79.99',
		},
	];

	return (
		<Section id="products" className="bg-background">
			<Container className="w-full">
				<div className="mb-16 text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Featured Products</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Discover our curated selection of premium products from verified suppliers worldwide.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
					{products.map((product, index) => (
						<ProductCard key={index} image={product.image} title={product.title} category={product.category} price={product.price} index={index} />
					))}
				</div>

				<motion.div
					className="flex justify-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<Button size="lg">View All Products</Button>
				</motion.div>
			</Container>
		</Section>
	);
}
