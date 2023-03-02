"use client";
import "@fontsource/golos-ui/400.css";
import "@fontsource/golos-ui/500.css";
import "@fontsource/golos-ui/600.css";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "@/config/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
