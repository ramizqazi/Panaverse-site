"use client";
import Layout from "@/common/Layout";
import { Container, Stack } from "@chakra-ui/react";
import HomeHeroSection from "@/components/Home/HomeHeroSection";
import HomeQuoteSection from "@/components/Home/HomeQuoteSection";
import HomeCitiesSection from "@/components/Home/HomeCitiesSection";

export default function HomePage() {
  return (
    <Layout>
      <Container maxW={"8xl"} maxH="full">
        <HomeHeroSection />
        <HomeQuoteSection />
        <HomeCitiesSection />
        <Stack></Stack>
      </Container>
    </Layout>
  );
}
