'use client';

import * as React from 'react';
import Section from '../../ui/Section';
import Container from '../../ui/Container';
import { Input } from '../../ui/input';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

import { Label } from '../../ui/label';
import { Calendar } from '../../ui/calendar';
import Button from '../../ui/Button';

export default function PersonalizedConsultation() {
	const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
	const [industry, setIndustry] = React.useState('');
	const [productType, setProductType] = React.useState('');
	const [volume, setVolume] = React.useState('');

	return (
		<Section className="bg-[#0a2540] relative py-16 md:py-20 text-white">
			<img src="/assets/hero/hero-bg.png" className="absolute inset-0 w-full h-full object-cover object-center opacity-40" />
			<Container className="relative">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Get a Personalized Consultation</h2>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
					{/* Left Form */}
					<div className="md:col-span-8  text-white bg-white/10 backdrop-blur-xl p-3  md:p-8 rounded-2xl">
						<div className="relative space-y-6 ">
							{/* Project Details */}
							<div className="space-y-2">
								<Label>Project Details</Label>
								<Input placeholder="Enter project details" className="placeholder:text-white/40" />
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								{/* Industry */}
								<div className="space-y-2">
									<Label>Industry</Label>
									<Select value={industry} onValueChange={setIndustry}>
										<SelectTrigger className="data-placeholder:text-white/40">
											<SelectValue placeholder="Select Industry" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Electronics">Electronics</SelectItem>
											<SelectItem value="Apparel & Textiles">Apparel & Textiles</SelectItem>
											<SelectItem value="Consumer Goods">Consumer Goods</SelectItem>
											<SelectItem value="Industrial Machinery">Industrial Machinery</SelectItem>
											<SelectItem value="Home & Kitchen">Home & Kitchen</SelectItem>
										</SelectContent>
									</Select>
								</div>

								{/* Product Type */}
								<div className="space-y-2">
									<Label>Product Type</Label>
									<Select value={productType} onValueChange={setProductType}>
										<SelectTrigger className="data-placeholder:text-white/40">
											<SelectValue placeholder="Select Type" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Custom Product">Custom Product</SelectItem>
											<SelectItem value="Private Label">Private Label</SelectItem>
											<SelectItem value="OEM/ODM">OEM/ODM</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							{/* Current Volume & Timeline */}
							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<Label>Current Volume</Label>
									<Select value={volume} onValueChange={setVolume}>
										<SelectTrigger className="data-placeholder:text-white/40">
											<SelectValue placeholder="Select Volume" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="1K - 5K units">1K - 5K units</SelectItem>
											<SelectItem value="5K - 20K units">5K - 20K units</SelectItem>
											<SelectItem value="20K - 50K units">20K - 50K units</SelectItem>
											<SelectItem value="50K+ units">50K+ units</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
						</div>
					</div>

					{/* Right Side - Calendar Preview */}
					<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 shadow text-gray-900 md:col-span-4 flex flex-col items-center justify-center">
						{/* <div className="flex items-center gap-3">
							<CalendarIcon className="w-6 h-6 text-amber-500" />
							<h3 className="font-semibold text-xl">Discovery 2024</h3>
						</div> */}

						<Calendar mode="single" required={true} selected={selectedDate} onSelect={setSelectedDate} />

						<Button className="w-full mt-3 bg-[#0a2540] hover:bg-[#132e4a] text-white">BOOK FREE CALL</Button>
					</div>
				</div>
			</Container>
		</Section>
	);
}
