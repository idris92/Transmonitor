import {
  Box,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function NavItem(props) {
  const { icon, children, submenu, isOpen, setIsOpen, active, ...rest } = props;
  const [hover, setHover] = useState(active);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (submenu && active) {
        setIsOpen(children);
      }
    }, 500);
  }, [submenu]);

  return (
    <Flex
      h={{ base: "45px", xl: "36px" }}
      cursor="pointer"
      color={isOpen === children || hover ? "black.1000" : "black.1000"}
      bg={(isOpen === children || hover) && "primary.900"}
      _hover={{
        bg: "primary.900",
        color: "black.1000",
      }}
      role="group"
      textTransform={"capitalize"}
      fontSize="11px"
      pos={"relative"}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        if (!active) {
          setHover(false);
        }
      }}
      {...rest}
    >
      {
        hover && (
          <Flex w='4px' bg='primary.1000' h='100%'>

          </Flex>
        )
      }
     
      <Flex
        align="center"
        h="100%"
        fontSize="11px"
        fontWeight='400'
        fontFamily='Segoe UI'
        pl={hover  ? '38px' : '42px'}
      >
        {icon && (
          <Box
            fontSize="16"
            color='black.1000'
            mr="16px"
            align='center'
            h='auto'
            
          >
            {icon}
          </Box>
        )}
        {children}
        
      </Flex>
     
    </Flex>
  );
}
