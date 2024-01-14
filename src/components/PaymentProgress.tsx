import React from 'react'
import { Flex, Text, Image} from '@chakra-ui/react'
import Progress from './Progress'

export const PaymentProgress = () => {
  return (
    <Flex w='100%' h='100%' p='22px 25px' direction='column' alignItems='left' gap='11px'>
        <Text
        fontSize='14px'
        fontWeight='700'
        fontFamily ='Segoe UI'
        color='black.800'
        >Payments</Text>
        <Progress value={80}/>
        <Text
        color="black.1000"
        fontFamily="Segoe UI" 
        fontSize = "14px"
        fontWeight ='700'
        >
            Un-reconcilled Payments: <Text
            as='small'
            color="yellow.900"
            fontFamily="Segoe UI" 
            fontSize = "14px"
            fontWeight ='700'
            >20</Text>
        </Text>
        <Text
        color="black.1000"
        fontFamily="Segoe UI" 
        fontSize = "14px"
        fontWeight ='700'
        >
            Reconcilled Payments: <Text
            as='small'
            color="green.1000"
            fontFamily="Segoe UI" 
            fontSize = "14px"
            fontWeight ='700'
            >80</Text>
        </Text>
        <Text
        color="black.1000"
        fontFamily="Segoe UI" 
        fontSize = "14px"
        fontWeight ='700'
        >
            Total Payments: <Text
            as='small'
            color="primary.1000"
            fontFamily="Segoe UI" 
            fontSize = "14px"
            fontWeight ='700'
            >100</Text>
        </Text>
    </Flex>
  )
}
