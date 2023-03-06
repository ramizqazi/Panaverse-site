"use client";
import "@fontsource/golos-ui/400.css";
import "@fontsource/golos-ui/500.css";
import "@fontsource/golos-ui/600.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import "./globals.css";
import theme from "@/config/theme";
import NavBar from "@/common/NavBar";
import { AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <NavBar />
            <AnimatePresence
              mode="wait"
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              {children}
            </AnimatePresence>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
