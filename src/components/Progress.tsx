import { Flex } from '@chakra-ui/react'
import React from 'react'

type progress={
    value: number
}
const Progress = ({value}:progress) => {
  return (
    <Flex w='100%' bg='yellow.1000' h='4px'>
        <Flex w={`${value}%`} bg='green.1000' h='4px'></Flex>
    </Flex>
  )
}

export default Progress