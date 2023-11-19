"use client";
import { motion, AnimatePresence } from "framer-motion";

// const variants = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
// };

import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";

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
          <AnimatePresence mode="wait">
            <motion.main
              key={route.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.65 }}
            >
              {children}
            </motion.main>
          </AnimatePresence>
        </span>
      </div>
    </section>
  );
}
