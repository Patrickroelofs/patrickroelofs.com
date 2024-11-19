import React, { type ReactElement, useRef } from 'react';
import { useScroll, motion, useTransform } from 'motion/react';
import type { Page } from '../../../payload-types';

type LargeMovableTitleProps = Extract<
  Page['blocks'][0],
  { blockType: 'large-movable-title' }
>;

export function LargeMovableTitle(props: LargeMovableTitleProps): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const { leftSide, rightSide } = props;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-200, 150]);
  const rightX = useTransform(scrollYProgress, [0, 1], [200, -150]);

  return (
    <motion.div
      ref={containerRef}
      className="mt-8xl mb-4xl flex flex-col items-center justify-between font-serif italic tracking-tighter drop-shadow-2xl"
    >
      <motion.p style={{ x: leftX }} className="text-6xl">
        {leftSide}
      </motion.p>
      <motion.p style={{ x: rightX }} className="text-6xl">
        {rightSide}
      </motion.p>
    </motion.div>
  );
}
