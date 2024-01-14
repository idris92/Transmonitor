import { Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'

type transaction = {
    title: string,
    total: number,
    currency?: boolean
}

const Transaction = ({title, total, currency}:transaction) => {
  return (
    <Flex w='100%' h='75px' p='18px' gap='17px' border='1px solid #EEF8FD' borderRadius='2px' bg='white'>
        <Flex w='70%' direction='column'>
            <Text fontSize='12px' fontFamily='Segoe UI' fontWeight='400' color='black.700'>{title}</Text>
            <Text fontSize='12px' fontFamily='Segoe UI' fontWeight='400' color='black.800'>{currency ?`₦${total.toLocaleString()}`: total.toLocaleString()}</Text>
        </Flex>
        <Flex w='30%'>
            <Flex w='62px' h='37px'>
                <Image src='/assets/images/small_chart.png' alt='small chart'/>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Transaction