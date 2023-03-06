"use client";
import { motion } from "framer-motion";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const currentRoute = usePathname();

  const variants = {
    hidden: { opacity: 0, x: currentRoute === "/" ? -250 : 250, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "keyframes" }}
      >
        {children}
      </motion.main>
    </Box>
  );
};

export default Layout;
