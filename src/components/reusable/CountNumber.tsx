import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

export default function CountNumber({ value }: { value: number }) {
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.floor(latest));

	useEffect(() => {
		const controls = animate(count, value, {
			duration: 3,
			ease: 'easeOut',
		});

		return controls.stop;
	}, [value, count]);

	return <motion.span>{rounded}</motion.span>;
}
