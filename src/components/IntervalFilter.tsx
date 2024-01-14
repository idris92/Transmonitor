import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { DownArrow } from './icons/downArrow'

const IntervalFilter = () => {
  return (
    <Menu  matchWidth>
        <MenuButton
            bg='transparent'
            border='none'
            color='black.300' 
            _hover={{
                bg:'transparent',
                border:'none'
            }}
            _expanded={{ bg: 'transparent', border:'none' }}
            _focus={{ bg: 'transparent', border:'none' }}
            as={Button}
            rightIcon={<DownArrow color='black.300' boxSize='8px'/> }  
            fontSize='12px'
            fontWeight='400'
            fontFamily='Segoe UI'        
        >
            1 Jan - 1 Jun
        </MenuButton>
        <MenuList  minW='80%' >
            <MenuItem >1 Jan - 1 Jun</MenuItem>
            <MenuItem >1 Jul - 1 Dec</MenuItem>
 
        </MenuList>
    </Menu>
  )
}

export default IntervalFilter