import React from "react";
import {
  Flex,
  Box,
  Link,
  Icon,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const boxShadowStyle =
    "0px 5px 15px 0px rgba(0,0,0,0.75), 0px 0px 10px 0px rgba(0,0,0,0.75)";
  return (
    <Box boxShadow={boxShadowStyle}>
      <Flex
        alignItems="center"
        p="4"
        bg="teal.500"
        color="white"
        backgroundColor="black"
        style={{
          position: "relative",
          boxShadow:
            "0px 5px 15px 0px rgba(0,0,0,0.75), 0px 0px 10px 0px rgba(0,0,0,0.75)",
          zIndex: 1,
        }}
      >
        <Box p="2">
          <Link
            href="#"
            fontSize="lg"
            fontWeight="bold"
            display="flex"
            alignItems="center"
          >
            <Icon as={HamburgerIcon} boxSize={6} mr={2} />
            <Heading
              as="h1"
              size="md"
              display="inline-block"
              verticalAlign="middle"
            >
              Coffe and Chill
            </Heading>
          </Link>
        </Box>
        <Box flex="1" textAlign="center" p="1" paddingRight="20">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="unstyled"
            >
              Inicio
            </MenuButton>
            <MenuList color="white" backgroundColor="black">
              <MenuItem backgroundColor="black">
                <Link href="#">Cafes</Link>
              </MenuItem>
              <MenuItem backgroundColor="black">
                <Link href="#">Tazas</Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="unstyled"
            >
              Experiencias
            </MenuButton>
            <MenuList backgroundColor="black">
              <MenuItem color="white" backgroundColor="black">
                <Link href="#">Big Box</Link>
              </MenuItem>
              <MenuItem color="white" backgroundColor="black">
                <Link href="#">Reserva de mesa</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
