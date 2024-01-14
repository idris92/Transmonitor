import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Text,
  Input
} from "@chakra-ui/react";
import React from "react";
import { MdMenu } from "react-icons/md";
import { NotificationIcon } from "../icons/notification";
import { SearchIcon } from "../icons/search";

type side = {
  pageTitle: string;
  sidebar: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    isControlled: boolean;
    getButtonProps: (props?: any) => any;
    getDisclosureProps: (props?: any) => any;
  };
};

export default function Topbar({ pageTitle, sidebar }: side) {

  return (
    <Flex >
        <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px={{ base: "8px", md: "42px" }}
            background="white"
            boxShadow={"0px 4px 8px rgba(208, 220, 250, 0.25)"}
            h="60px"
            zIndex='2000'
           
          >
            <Flex >

              <Text
                as="h1"
                fontSize="24px"
                fontWeight="900"
                color="primary.1000"
                lineHeight="28.13"
                textTransform="capitalize"
                display={{ base: "none", md: "flex" }}
              >
                {pageTitle}
              </Text>
            </Flex>

            <Flex w='40%'>
                <Flex w='100%'>
                  <Flex alignItems='center' justifyContent='center' h='full' >
                    <SearchIcon color='black.1000' boxSize='16px' />
                  </Flex>
                  <Input type='tel' placeholder='Search...' border='none' variant='unStyled'/>
                </Flex>
            </Flex>
      
            <HStack  pos={"relative"}>
              
              <Flex gap={{base:'24px', md:'36.66px'}} mr={{base:'25px', md:'55px'}}>
                  <Text fontSize='14px' color='black.1000' fontFamily='Segoe UI'>Support</Text>
                  <Text fontSize='14px' color='black.1000' fontFamily='Segoe UI'>FAQ</Text>
              </Flex>
              <Flex marginRight={{base:'0px', md:'48px'}} gap={{base:'8px', md:'0px'}}>
                <Flex
                  alignItems="center"
                  position='relative'
                >
                    <NotificationIcon boxSize='24px' color='primary.1000'/>
                  
                    <Flex position='absolute' top={-2} right={0}>
                        <Flex boxSize='15px' bg='primary.1000' rounded='100%' justifyContent='center' alignItems='center'>
                              <Text fontSize='10px' fontFamily='Segoe UI' color='white'>8</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex display={{ base: "flex", md: "none" }}>
                    <IconButton
                      aria-label="Menu"
                      display={{ base: "inline-flex", md: "none" }}
                      onClick={sidebar.onOpen}
                      icon={<MdMenu size={24} color="black.600" />}
                      size="sm"
                    />
                </Flex>
                
              </Flex>
      
              <Flex>
                  <Flex
                      alignItems="center"
                      gap="12px"
                      display={{ base: "none", md: "flex" }}
                    >
                      <Flex direction='column' alignItems='left'>
                        <Text
                          fontSize="10px"
                          fontFamily='Segoe UI'
                          color="black.1000"
                          textAlign='right'
                        >
                          Hello
                        </Text>
                        <Text
                          fontSize="14px"
                          fontFamily='Segoe UI'
                          color="black.1000"
                          textAlign='right'
                        >
                          Oluwaleke Ojo
                        </Text>

                      </Flex>
                      <Avatar
                        src="/assets/images/avatar.png"
                        name=' Oluwaleke Ojo'
                        boxSize="36px"
                      />
                    </Flex>
              </Flex>
            </HStack>
          </Flex>
     
  </Flex>
  
  );
}
