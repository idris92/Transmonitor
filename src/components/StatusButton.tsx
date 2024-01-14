import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { CircleIcon } from './icons/circleIcon'


type status={
    status : 'Reconcilled'|'Un-reconcilled'| 'Pending',
}

const StatusButton = ({status}:status) => {
  return (
    <Flex w='120px' h='33px'  bg='transparent' borderRadius='30px' border='1px solid #CCCFD4' justifyContent='flex-start' alignItems='center' p='12px' gap='8px'>
            <Flex h='100%' alignItems='center'>
                <CircleIcon color={status==='Un-reconcilled'? 'black.500':status === 'Pending'? 'yellow.900' :'green.1000'} boxSize='9px'/>
            </Flex>
            <Text fontSize='12px' fontWeight='400' fontFamily='Segoe UI'>{status}</Text>
    </Flex>
  )
}

export default StatusButton