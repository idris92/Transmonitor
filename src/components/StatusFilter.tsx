import { Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
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
            >
                Show <DownArrow color='primary.1000' boxSize='24px' justifyContent='center' alignItems='center'/>
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