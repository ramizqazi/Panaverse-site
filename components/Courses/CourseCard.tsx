"use client";
import { fadeIn } from "@/util/animations";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

type CourseType = {
  id: number;
  name: string;
  image: string;
  description: string;
};

const CourseCard = ({
  course,
  index,
}: {
  course: CourseType;
  index: number;
}) => {
  return (
    <Card
      as={motion.div}
      initial="hidden"
      whileInView="show"
      whileHover={{ scale: 1.1 }}
      variants={fadeIn("up", "tween", 0.2, index ?? 1)}
      shadow="2xl"
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderRadius="lg"
      overflow="hidden"
      p={5}
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
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Card>
  );
};
export default CourseCard;
