import { motion } from "framer-motion";
import { cn } from "../utils";

interface TextAnimateProps {
  children: string;
  className?: string;
  animation?: "fadeIn" | "blurIn" | "slideUp";
  by?: "word" | "character";
  delay?: number;
}

export const TextAnimate = ({
  children,
  className,
  animation = "fadeIn",
  by = "character",
  delay = 0,
}: TextAnimateProps) => {
  const segments = by === "word" ? children.split(/(\s+)/) : children.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    fadeIn: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    },
    blurIn: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      show: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.3 } },
    },
    slideUp: {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={cn("whitespace-pre-wrap", className)}
    >
      {segments.map((segment, i) => (
        <motion.span
          key={i}
          variants={itemVariants[animation]}
          className="inline-block"
        >
          {segment}
        </motion.span>
      ))}
    </motion.span>
  );
};