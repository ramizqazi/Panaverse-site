"use client";
import Layout from "@/common/Layout";
import CourseCard from "@/components/Courses/CourseCard";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import CoursesData from "@/config/courses.json";

export default function CallToActionWithIllustration() {
  return (
    <Layout>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Courses
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
            This curriculum is intended for beginners who want to learn software
            development from the ground up.
          </Text>
        </Stack>

        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            {CoursesData.map((course, index) => (
              <CourseCard key={course.id} index={index} course={course} />
            ))}
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
}
