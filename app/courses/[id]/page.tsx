"use client";
import { useEffect, useState } from "react";
import Layout from "@/common/Layout";
import {
  Box,
  Heading,
  Container,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

import CourseData from "@/config/courses.json";
import AnimatedText from "@/common/AnimatedText";

export default function CallToActionWithIllustration({
  params,
}: {
  params: { id: string };
}) {
  const [course, setCourse] = useState({
    name: "",
    description: "",
    image: "",
    id: "",
  });

  function getCourseById() {
    setCourse(CourseData?.filter((course) => params?.id === course?.id)[0]);
  }

  useEffect(() => {
    if (params?.id) {
      getCourseById();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout h="full">
      <Container maxW={"7xl"} p={["10", "10", "20"]}>
        <AnimatedText fontSize="4xl" fontWeight="bold" textAlign="left">
          {course?.name}
        </AnimatedText>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Image
                w="full"
                borderRadius="lg"
                src={course?.image}
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(orange.600 1px, transparent 1px)",
                  "radial(orange.300 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <AnimatedText
              textAlign="left"
              fontSize="3xl"
              fontWeight="bold"
              marginTop="1"
            >
              Description:
            </AnimatedText>
            <AnimatedText
              marginTop="2"
              textAlign="left"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              {course?.description}
            </AnimatedText>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
