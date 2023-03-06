"use client";
import Layout from "@/common/Layout";
import { Card, Container, Stack } from "@chakra-ui/react";
import HomeHeroSection from "@/components/Home/HomeHeroSection";
import HomeQuoteSection from "@/components/Home/HomeQuoteSection";
import HomeCitiesSection from "@/components/Home/HomeCitiesSection";
import AnimatedText from "@/common/AnimatedText";

export default function HomePage() {
  return (
    <Layout>
      <Container maxW={"8xl"} maxH="full">
        <HomeHeroSection />
        <HomeQuoteSection />
      </Container>
      <HomeCitiesSection />
      <Stack pb={16}>
        <Card shadow="xl" h="full" px={[10, 10, 52]} py={[16, 16, 24]}>
          <AnimatedText fontSize="4xl">
            The Program in a Nutshell: Earn while you learn
          </AnimatedText>
          <AnimatedText fontSize="md" px={[0, 0, 20]}>
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program’s beginning. It resembles a
            cross between a corporate venture and an educational project.
          </AnimatedText>
        </Card>
      </Stack>
    </Layout>
  );
}
