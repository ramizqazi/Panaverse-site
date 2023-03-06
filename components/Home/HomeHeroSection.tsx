import Link from "next/link";
import HeroSvg from "@/assets/svg/hero-img.svg";
import { Flex, Heading, Stack, Text, Button } from "@chakra-ui/react";
import AnimatedText from "@/common/AnimatedText";

export default function HomeHeroSection() {
  return (
    <Stack
      pt={10}
      align={"center"}
      textAlign={"center"}
      spacing={{ base: 8, md: 10 }}
      pb={{ base: 10, md: 36 }}
    >
      <AnimatedText
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        lineHeight={"120%"}
      >
        <Text color={"red.500"}>
          Certified Web 3.0 and Metaverse Developer:
        </Text>{" "}
        A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
      </AnimatedText>
      <AnimatedText fontFamily="Golos UI" color={"gray.500"} maxW={"3xl"}>
        Getting Ready for the Next Generation and Future of the Internet - Join
        a 13 Trillion Dollar Industry with 5 Billion Users
      </AnimatedText>
      <Stack spacing={6} direction={"row"}>
        <Button
          as={Link}
          px={6}
          href="/courses"
          rounded={"full"}
          colorScheme={"red"}
          bg={"red.500"}
          _hover={{ bg: "red.400" }}
        >
          Learn More
        </Button>
      </Stack>
      <Flex w={"full"} justifyContent="center">
        <HeroSvg />
      </Flex>
    </Stack>
  );
}
