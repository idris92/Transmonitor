import { Flex, Menu, MenuButton,Button, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { DownArrow } from './icons/downArrow'

const StatusFilter = () => {
  return (
    <Flex w='100%'>
        <Menu matchWidth>
            <MenuButton
                bg='transparent'
                border='none'
                color='primary.1000' 
                _hover={{
                    bg:'transparent',
                    border:'none'
                }}
                _expanded={{ bg: 'transparent', border:'none' }}
                _focus={{ bg: 'transparent', border:'none' }}
                as={Button}
                rightIcon={<DownArrow color='primary.1000' boxSize='24px'/> }  
                fontSize='13px'
                fontWeight='400'
                fontFamily='Segoe UI'    
            >
                 
                Show 
            </MenuButton>
            <MenuList >
                <MenuItem>All</MenuItem>
                <MenuItem>Reconcilled</MenuItem>
                <MenuItem>Un-reconcilled</MenuItem>
                <MenuItem>Settled</MenuItem> 
                <MenuItem>Unsettled</MenuItem> 
            </MenuList>
        </Menu>
    </Flex>
  )
}

export default StatusFilter