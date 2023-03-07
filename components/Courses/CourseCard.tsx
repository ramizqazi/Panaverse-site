"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/util/animations";
import { CourseType } from "@/config/types";
import { Box, Button, Card, Heading, Image, Stack } from "@chakra-ui/react";

const CourseCard = ({
  course,
  index,
}: {
  course: CourseType;
  index: number;
}) => {
  return (
    <Card
      p={5}
      w={"full"}
      shadow="2xl"
      as={motion.div}
      initial="hidden"
      borderRadius="lg"
      overflow="hidden"
      whileInView="show"
      whileHover={{ scale: 1.1 }}
      maxW={{ base: "full", md: "275px" }}
      variants={fadeIn("up", "tween", 0.2, index ?? 1)}
    >
      <Stack align={"start"} spacing={2}>
        <Image
          w="full"
          h={["lg ", "lg ", "auto"]}
          src={course.image}
          alt={course.name}
        />
        <Box mt={2}>
          <Heading size="md">{course?.name}</Heading>
        </Box>
        <Button
          as={Link}
          href={`/courses/${course.id}`}
          variant={"link"}
          colorScheme={"blue"}
          size={"sm"}
        >
          Learn more
        </Button>
      </Stack>
    </Card>
  );
};
export default CourseCard;
