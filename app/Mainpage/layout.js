"use client";
import { motion, AnimatePresence } from "framer-motion";

// const variants = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
// };

import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";
const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
export default function MainpageLayout({
  children, // will be a page or nested layout
}) {
  const route = useRouter();
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="mainpage">
        <Sidebar />

        <span className="child">
          <AnimatePresence mode="popLayout" initial={true}>
            <motion.div
              // key={route.pathname}
              variants={animations}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </span>
      </div>
    </section>
  );
}
