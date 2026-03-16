'use client';

import * as React from 'react';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker';

import Button from './Button';
import { cn } from '../../utils/utils';

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	captionLayout = 'label',
	formatters,
	components,
	...props
}: React.ComponentProps<typeof DayPicker>) {
	const defaultClassNames = getDefaultClassNames();

	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn('bg-transparent p-3 rounded-md', className)}
			captionLayout={captionLayout}
			formatters={{
				formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
				...formatters,
			}}
			classNames={{
				root: cn('relative text-white', defaultClassNames.root),

				months: cn('flex flex-col md:flex-row gap-4', defaultClassNames.months),

				month: cn('flex flex-col w-full gap-4', defaultClassNames.month),

				nav: cn('flex items-center justify-between absolute top-2 left-0 right-0 px-2', defaultClassNames.nav),

				button_previous: cn('p-2 hover:bg-gray-100 rounded-md', defaultClassNames.button_previous),

				button_next: cn('p-2 hover:bg-gray-100 rounded-md', defaultClassNames.button_next),

				month_caption: cn('flex items-center justify-center h-10', defaultClassNames.month_caption),

				caption_label: cn('text-sm font-medium', defaultClassNames.caption_label),

				table: 'w-full border-collapse',

				weekdays: cn('flex', defaultClassNames.weekdays),

				weekday: cn('flex-1 text-center text-orange-500', defaultClassNames.weekday),

				week: cn('flex w-full mt-1', defaultClassNames.week),

				day: cn('w-full text-center aspect-square', defaultClassNames.day),

				today: cn('bg-blue-100 text-orange-600 rounded-md', defaultClassNames.today),

				outside: cn('text-gray-400', defaultClassNames.outside),

				disabled: cn('opacity-40', defaultClassNames.disabled),

				...classNames,
			}}
			components={{
				Root: ({ className, rootRef, ...props }) => {
					return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
				},

				Chevron: ({ className, orientation, ...props }) => {
					if (orientation === 'left') {
						return <ChevronLeftIcon className={cn('size-4', className)} {...props} />;
					}

					if (orientation === 'right') {
						return <ChevronRightIcon className={cn('size-4', className)} {...props} />;
					}

					return <ChevronDownIcon className={cn('size-4', className)} {...props} />;
				},

				DayButton: CalendarDayButton,

				...components,
			}}
			{...props}
		/>
	);
}

function CalendarDayButton({ className, day, modifiers, ...props }: React.ComponentProps<typeof DayButton>) {
	const ref = React.useRef<HTMLButtonElement>(null);

	React.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);

	return (
		<Button
			ref={ref}
			size="sm"
			variant={modifiers.selected ? 'primary' : 'default'}
			className={cn('h-9 w-9 p-0 flex items-center justify-center', className)}
			data-day={day.date.toLocaleDateString()}
			{...props}
		>
			{day.date.getDate()}
		</Button>
	);
}

export { Calendar };
