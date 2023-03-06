import {
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
  HStack,
  Text,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

function NavBar() {
  const currentRoute = usePathname();
  const { colorMode, toggleColorMode } = useColorMode();
  1;

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={[3, 5, 9]}
      py={[0, 0, 2]}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Link href="/">
          <Image
            src="https://nextjs-panaverse-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpanaverse.b0e734e6.png&w=640&q=75"
            alt="Picture of the author"
            width={50}
            height={40}
          />
        </Link>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {currentRoute === "/" ? (
              <Button as={Link} href="/courses" pr="8px">
                <HStack spacing="2px">
                  <Text>Courses</Text>
                  <ChevronRightIcon h="22px" w="22px" />
                </HStack>
              </Button>
            ) : (
              <Button as={Link} href="/" pl="8px">
                <HStack spacing="2px">
                  <ChevronLeftIcon h="22px" w="22px" />
                  <Text>Home</Text>
                </HStack>
              </Button>
            )}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;
