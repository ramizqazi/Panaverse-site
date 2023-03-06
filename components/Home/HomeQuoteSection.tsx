/* eslint-disable react/no-unescaped-entities */
"use client";
import { Card, Stack } from "@chakra-ui/react";
import AnimatedText from "@/common/AnimatedText";

export default function HomeQuoteSection() {
  return (
    <Stack mb={10}>
      <Card
        h="full"
        shadow="xl"
        justifyContent="center"
        py={24}
        px={[5, 5, 40]}
      >
        <AnimatedText fontSize={{ base: "24px", md: "28px", lg: "45px" }}>
          "The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
          Panaverse DAO is a movement to spread these technolgies globally. It
          is community of Web 3.0 and Metaverse developers, designers, trainers,
          startup founders and service providers."
        </AnimatedText>
        <AnimatedText
          textAlign="right"
          fontSize={{ base: "24px", md: "28px", lg: "45px" }}
        >
          ~ Zia Khan
        </AnimatedText>
      </Card>
    </Stack>
  );
}
