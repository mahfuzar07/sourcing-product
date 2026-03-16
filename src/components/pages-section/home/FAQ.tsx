'use client';

import { useState } from 'react';
import Section from '../../ui/Section';
import Container from '../../ui/Container';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
	{
		question: 'How long does the sourcing process usually take?',
		answer:
			'Typically 2-6 weeks depending on product complexity, quantity, and supplier availability. We provide a clear timeline after the initial requirement analysis.',
	},
	{
		question: 'Do you offer quality inspection and testing services?',
		answer:
			'Yes. We provide pre-shipment inspection, during-production checks, material testing, and full quality control reports. You can also request third-party inspections.',
	},
	{
		question: 'What is the minimum order quantity (MOQ)?',
		answer:
			'MOQ varies by product and factory. Many suppliers accept low MOQ (100-500 pcs) for new customers. We specialize in helping buyers find factories with flexible MOQ.',
	},
	{
		question: 'How do you ensure supplier reliability?',
		answer:
			'All suppliers go through strict verification including factory audits, business license checks, sample testing, and past client references. We only work with trusted partners.',
	},
	{
		question: 'What payment methods do you accept?',
		answer:
			'We accept T/T, PayPal, Western Union, and Letter of Credit (L/C) for large orders. Secure escrow payment options are also available for added protection.',
	},
	{
		question: 'Can you handle custom product development?',
		answer:
			'Absolutely. We help with product design, custom packaging, OEM/ODM manufacturing, and private labeling from prototype to mass production.',
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<Section className="bg-white py-16 md:py-24">
			<Container>
				<div className="max-w-4xl mx-auto">
					{/* Header */}
					<div className="flex flex-col items-center text-center mb-12">
						<div className="inline-flex items-center gap-2 bg-[#5a89ad] text-white px-5 py-2 rounded-full text-sm font-medium mb-4">
							<HelpCircle className="w-5 h-5" />
							HAVE QUESTIONS?
						</div>
						<h2 className="text-3xl md:text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
						<p className="mt-4 text-lg text-muted-foreground max-w-md">Everything you need to know about sourcing from China with us.</p>
					</div>

					{/* Accordion */}
					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div
								key={index}
								className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
							>
								<button
									onClick={() => toggleFAQ(index)}
									className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
								>
									<span className="font-semibold text-lg text-gray-800 pr-6">{faq.question}</span>
									<div
										className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0
                    ${openIndex === index ? 'bg-[#96b1c7] text-white' : 'bg-gray-100 text-gray-500'}`}
									>
										{openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
									</div>
								</button>

								<div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
									<div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed border-t border-gray-100">{faq.answer}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</Section>
	);
}
