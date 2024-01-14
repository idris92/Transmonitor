import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Flex, Td, Text, Tr } from '@chakra-ui/react'
import React, {Fragment} from 'react'
import StatusButton from './StatusButton'


type listItem={
    image_url : string,
    item_name : string,
    price: string,
    transaction_no: number,
    time: string,
    status: "Reconcilled" | "Un-reconcilled" | "Pending"
    key: number;
}
const ListItem = ({image_url, item_name, price, transaction_no, time, status, key}:listItem) => {
  return (
    <AccordionItem borderTop='none' as={Fragment} key={key}>
            <Tr>
            <Td>
                <Flex gap='26px' alignItems='center'>
                <Avatar
                    src={image_url}
                    name={item_name}
                    boxSize="36px"
                    />
                <Text fontSize='14px' fontWeight='400' fontFamily='Segoe UI' color='black.300'>
                   {item_name}
                </Text>
                </Flex>
            </Td>
            <Td fontSize='14px' fontWeight='400' fontFamily='Segoe UI' color='black.300'>{price}</Td>
            <Td fontSize='14px' fontWeight='400' fontFamily='Segoe UI' color='black.300' isNumeric>{transaction_no}</Td>
            <Td fontSize='14px' fontWeight='400' fontFamily='Segoe UI' color='black.300'>{time}</Td>
            <Td>
                <h2>
                <AccordionButton _hover={{bg:'transparent'}} gap='33px'>
                    <StatusButton status={status}/>
                    <AccordionIcon/>
                </AccordionButton>
                </h2>
            </Td>
            </Tr>
            
            <AccordionPanel as={Tr} pb={4}>
            <Td whiteSpace='normal' colSpan={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </Td>
            
            </AccordionPanel>
        </AccordionItem>
  )
}

export default ListItem