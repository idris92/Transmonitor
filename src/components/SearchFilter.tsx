import { Flex, Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from './icons/search'

type search={
    handleSearch : (value: string)=> void
}

const SearchFilter = ({handleSearch}:search) => {
  return (
    <Flex w='100%'>
         <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <SearchIcon color='black.600' />
            </InputLeftElement>
            <Input type='text' variant='flushed' placeholder='Search payments' onChange={(e)=>handleSearch(e.target.value)} />
        </InputGroup>
    </Flex>
  )
}

export default SearchFilter