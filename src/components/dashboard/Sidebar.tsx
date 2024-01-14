import {
  Avatar,
  Box,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import NavItem from "./NavItem";

import { OverviewIcon } from "../icons/overview";
import { AllPayment } from "../icons/allPayment";
import { Reconcilled } from "../icons/reconcilled";
import { UnReconcilled } from "../icons/unreconcilled";
import { ManualIcon } from "../icons/manual";
import { AllOrder } from "../icons/allOrders";
import { PendingOrder } from "../icons/pendingOrders";
import { ReconcilledOrder } from "../icons/reconcilledOrder";
import { MerchantProfile } from "../icons/merchantProfile";
import { MdOutlineClose } from "react-icons/md";



const Dashboard_Links = {
  'Main':[
    {
      name: "Overview",
      link: "/dashboard/overview",
      // children: [],
      icon: <OverviewIcon color='black.1000'/>
    },
  ],
  'Payments':[
    {
      name: "All Payments",
      link: "/dashboard/overview",
      // children: [],
      icon: <AllPayment color='black.1000'/>
    },
    {
      name: "Reconcilled Payments",
      link: "/dashboard/overview",
      // children: [],
      icon: <Reconcilled color='black.1000'/>
    },
    {
      name: "Un-Reconcilled Payments",
      link: "/dashboard/overview",
      // children: [],
      icon: <UnReconcilled color='black.1000'/>
    },
    {
      name: "Manual Settlement",
      link: "/dashboard/overview",
      // children: [],
      icon: <ManualIcon color='black.1000'/>
    },
  ],
  'Orders':[
    {
      name: "All Orders",
      link: "/dashboard/overview",
      // children: [],
      icon: <AllOrder color='black.1000'/>
    },
    {
      name: "Pending Orders",
      link: "/dashboard/overview",
      // children: [],
      icon: <PendingOrder color='black.1000'/>
    },
    {
      name: "Reconcilled Orders",
      link: "/dashboard/overview",
      // children: [],
      icon: <ReconcilledOrder color='black.1000'/>
    },
  ],
}



export default function SidebarVendor(props:any) {

  
  const { close } = props;

  const [isOpen, setIsOpen] = useState("");

  const router = useRouter();
  const pathname = router.pathname;
  

  return (
    <Box
      as="nav"
      pos={{ base: "relative", md: "fixed" }}
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      bg={"white"}
      w={{ base: "50%", md: "260px" }}
      boxShadow="0px 8px 24px rgba(149, 157, 165, 0.2)"
      {...props}
      pt='78px'
    >

      
    <Flex
        p="0px 22px 22px 0px"
        justifyContent="Flex-start"
        alignItems="center"
        w="100%"
      >
        <Flex
          display={{ base: "flex", md: "none" }}
          w="100%"
          h="24px"
          justifyContent="flex-end"
          onClick={() => close()}
          color="black.1000"
        >
          <MdOutlineClose color='black.1000' size="24px" />
        </Flex>
      </Flex>
     

      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
        // mt={{ base: "0px", md: "60px" }}
        mb={{ base: "0px", md: "0px" }}
      >
        <Flex
          w="100%"
          alignItems="flex-start"
          display={{ base: "flex", md: "none" }}
          gap="8px"
          mb="40px"
          pl='42px'
        >
          <Avatar
            src='/assets/images/avatar.png'
            name='Oluwaleke Ojo'
            boxSize="80px"
          />
          <Flex w="100%" h='80px' alignItems="flex-start" justifyContent='center' direction="column" pl='8px'>
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
        </Flex>
        <Flex w="100%" h="33px" justifyContent='flex-start' pl='42px' >
            <Button 
            variant='actionGreen' 
            h='100%' 
            rounded='30px' 
            color='white'
            fontSize='12px'
            fontWeight='700'
            p='9px 25px'
            >
                  GENERATE INVOICE
            </Button>
          </Flex>
        {

          Object.keys(Dashboard_Links)?.map((key:string, index)=>{
            return(
              <Flex direction='column' key={key}>
                <Flex pl='42px' pb='14px' pt='35px'>
                  <Text fontSize='11px' fontWeight='400' fontFamily='Segoe UI'>{key}</Text>
                </Flex>
                
                {
                  Dashboard_Links[key as keyof typeof Dashboard_Links].map((item:any, index:any)=>(
                    <NavItem
                    key={index}
                    icon={item?.icon}
                    // onClick={() => router.push(item.link)}
                    active={pathname.includes(item.link)}
                    setIsOpen={setIsOpen}
                  >
                    {item.name}
                  </NavItem>
                  ))
                }
              
              </Flex>
            )
          }
          )

  
        }
      </Flex>

      <Box
        pos="absolute"
        mt='32px'
        w="100%"
        cursor="pointer"
      >
        <NavItem icon={<MerchantProfile color='black.1000'/>} >
          Merchant Profile
        </NavItem>
      </Box>
    </Box>
  );
}
