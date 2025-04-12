import { motion } from "framer-motion"; 
import { FC } from "react";

interface LoaderProps {
    height?: [number, number, number];
    backgroundColor?: [string, string, string];
    width?: string;
    radius?: string;
}

const Loader: FC<LoaderProps> = ({
    height = [30, 50, 30],
    backgroundColor = ["#aaaaff", "#0000FE", "#aaaaff"], // CSS variables
    width = "md:w-[32px]",
    radius = "rounded-[--radius-xxl]"
}) => {

    const variants = {
        animate: (i: number) => ({
            height: height,
            scaleY: [1, 1.5, 1], // Expands only vertically
            backgroundColor: backgroundColor, // Now using resolved colors
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: i * 0.2, // Staggered effect
            },
        }),
    };

    return (
        <div className="fixed top-0 left-0 z-[9999] flex items-center justify-center h-screen w-screen bg-[--gray-01]">
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={variants}
                animate="animate"
                className={`w-[16px] ${width} ${radius} origin-center`}
              />
            ))}
          </div>
        </div>
    );
      
};

export default Loader;
