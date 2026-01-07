import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Children {
  children: ReactNode;
}

const HeadingTag = ({ children }: Children) => {
  return (
    <>
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}>
        {children}
      </motion.h1>
    </>
  );
};

export default HeadingTag;
