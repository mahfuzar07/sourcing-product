'use client';

import * as React from 'react';
import Section from '../../ui/Section';
import Container from '../../ui/Container';
import { Calendar as CalendarIcon } from 'lucide-react';
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
		<Section className="bg-[#e3e8ec] py-16 md:py-20">
			<Container>
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Get a Personalized Consultation</h2>

				<div className="grid lg:grid-cols-12 gap-10 backdrop-blur-xl">
					{/* Left Form */}
					<div className="space-y-6 col-span-8">
						{/* Project Details */}
						<div className="space-y-2">
							<Label>Project Details</Label>
							<Input placeholder="Enter project details" />
						</div>

						<div className="grid grid-cols-2 gap-6">
							{/* Industry */}
							<div className="space-y-2">
								<Label>Industry</Label>
								<Select value={industry} onValueChange={setIndustry}>
									<SelectTrigger>
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
									<SelectTrigger>
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
						<div className="grid grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label>Current Volume</Label>
								<Select value={volume} onValueChange={setVolume}>
									<SelectTrigger>
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

					{/* Right Side - Calendar Preview */}
					<div className="bg-white rounded-2xl p-6 shadow text-gray-900 col-span-4">
						<div className="flex items-center gap-3 mb-6">
							<CalendarIcon className="w-6 h-6 text-amber-500" />
							<h3 className="font-semibold text-xl">Discovery 2024</h3>
						</div>

						<Calendar className='w-full' mode="single" required={true} selected={selectedDate} onSelect={setSelectedDate} />

						<Button className="w-full mt-8 bg-[#0a2540] hover:bg-[#132e4a] text-white">BOOK MY FREE CALL</Button>
					</div>
				</div>
			</Container>
		</Section>
	);
}
