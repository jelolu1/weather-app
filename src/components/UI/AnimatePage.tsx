import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const animations = {
	initial: { opacity: 0, x: 100 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: -100 },
};

type AnimatePagePropsType = {
	pageName: string;
	children: ReactNode;
};

export const AnimatePage = ({ pageName, children }: AnimatePagePropsType) => {
	return (
		<motion.div
			key={pageName}
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.25 }}
		>
			{children}
		</motion.div>
	);
};
