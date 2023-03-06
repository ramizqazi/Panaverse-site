import AnimatedText from "@/common/AnimatedText";
import { motion } from "framer-motion";
import { fadeIn } from "@/util/animations";
import { Card, Stack, Image, Grid, GridItem } from "@chakra-ui/react";

export default function HomeCitiesSection() {
  return (
    <Stack my={24}>
      <Card h="full" shadow="xl" px={[5, 5, 32]} py={[10, 10, 32]}>
        <AnimatedText fontSize="4xl" textAlign="left">
          Classes in Karachi, Lahore, Islamabad, and Peshawar
        </AnimatedText>
        <AnimatedText fontSize="md" textAlign="left">
          The internet is without a doubt the most important technological
          development in human history. Web3 and metaverse technologies expand
          the internet as we know it by introducing novel features and
          advancements. Metaverse will make use of all aspects of modern
          technology, including 3D, VR, AR, AI, blockchain, cloud computing,
          voice computing, ambient computing, and more. Citi is the latest Wall
          Street business to give a positive prognosis for Web 3.0 and the
          Metaverse, terms used to depict a future internet vision centred on
          decentralised technologies and virtual worlds.Citi stated in a March
          2022 research paper that the metaverse economy might have a total
          addressable market of up to $13 trillion and five billion people by
          2030.
        </AnimatedText>
        <Grid
          mt={8}
          gap={6}
          justifyContent="space-between"
          templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
        >
          <GridItem
            as={motion.div}
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "tween", 0.2, 1)}
            overflow="hidden"
            borderRadius="lg"
          >
            <Image
              as={motion.img}
              whileHover={{ scale: 1.1 }}
              w="full"
              h="full"
              alt="karachi"
              src="https://nextjs-panaverse-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkarachi.1a03404d.jpg&w=1080&q=75"
            />
          </GridItem>
          <GridItem
            as={motion.div}
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "tween", 0.2, 1)}
            overflow="hidden"
            borderRadius="lg"
          >
            <Image
              as={motion.img}
              whileHover={{ scale: 1.1 }}
              w="full"
              h="full"
              alt="karachi"
              src="https://nextjs-panaverse-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeshawar.45f61822.jpg&w=1200&q=75"
            />
          </GridItem>
          <GridItem
            as={motion.div}
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "tween", 0.2, 1)}
            overflow="hidden"
            borderRadius="lg"
          >
            <Image
              as={motion.img}
              whileHover={{ scale: 1.1 }}
              w="full"
              h="full"
              alt="karachi"
              src="https://nextjs-panaverse-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flahore.3912a89c.jpg&w=1080&q=75"
            />
          </GridItem>
          <GridItem
            as={motion.div}
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", "tween", 0.2, 1)}
            overflow="hidden"
            borderRadius="lg"
          >
            <Image
              as={motion.img}
              whileHover={{ scale: 1.1 }}
              w="full"
              h="full"
              alt="karachi"
              src="https://nextjs-panaverse-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fislamabad.635cc705.jpg&w=1080&q=75"
            />
          </GridItem>
        </Grid>
      </Card>
    </Stack>
  );
}
