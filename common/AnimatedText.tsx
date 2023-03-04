//@ts-nocheck
"use client";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";
import { textVariant2 } from "@/util/animations";

export default function AnimatedText({ children, ...textStyles }) {
  return (
    <Text
      as={motion.h2}
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      textAlign="center"
      {...textStyles}
    >
      {children}
    </Text>
  );
}
