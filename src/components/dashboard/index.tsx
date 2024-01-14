import {
  Box,
  Container,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import SidebarVendor from "./Sidebar";
import Topbar from "./Topbar";

type DashboardProps = {
  children: any;
  pageTitle: string;
  padding: string;
  background: string;
};

export default function DashboardWrapper({
  children,
  pageTitle = "Dashboard",
  padding = "4",
  background = "white",
}:DashboardProps) {
  const sidebar = useDisclosure();

  return (
    <Box as="section" bg={background} minH="100vh" overflowX={"hidden"}>
      <Topbar sidebar={sidebar} pageTitle={pageTitle} />
      <SidebarVendor display={{ base: "none", md: "unset" }} />

      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarVendor w="full" borderRight="none" close={sidebar.onClose} />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{ base: 0, md: "272px" }}
        transition=".3s ease"
        pos="relative"
        zIndex={"100"}
        bg={background}
      >
         
        <Box as="main" pos={"relative"}>
          <Container
            maxW="100%"
            borderRadius={"8px"}
            pos={"relative"}
            p={padding}
            overflow={"hidden"}
          >
            {children}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
