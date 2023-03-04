/* eslint-disable react/no-unescaped-entities */
"use client";
import Layout from "@/common/Layout";
import { Container } from "@chakra-ui/react";
import HomeHeroSection from "@/components/Home/HomeHeroSection";
import HomeQuoteSection from "@/components/Home/HomeQuoteSection";

export default function HomePage() {
  return (
    <Layout>
      <Container maxW={"8xl"} maxH="full">
        <HomeHeroSection />
        <HomeQuoteSection />
      </Container>
    </Layout>
  );
}
