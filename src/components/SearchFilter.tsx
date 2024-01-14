import { Flex, Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from './icons/search'

const SearchFilter = () => {
  return (
    <Flex w='100%'>
         <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <SearchIcon color='black.600' />
            </InputLeftElement>
            <Input type='text' variant='flushed' placeholder='Search payments' />
        </InputGroup>
    </Flex>
  )
}

export default SearchFilter