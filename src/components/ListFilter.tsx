import { Flex, Menu, MenuButton,Button, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { DownArrow } from './icons/downArrow'

const ListFilter = () => {
  return (
    <Flex w={{base:'100%', md:'auto'}} justifyContent='flex-start' alignItems='flex-end' gap='20px'>
        <Text fontSize='13px' fontWeight='400' fontFamily=' Segoe UI' color='black.800'>Showing</Text>
        <Flex alignItems='center' >
        <Menu  matchWidth >
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
                20 
            </MenuButton>
            <MenuList  minW='80%' >
                <MenuItem>5</MenuItem>
                <MenuItem>10</MenuItem>
                <MenuItem>15</MenuItem>
                <MenuItem>20</MenuItem> 
            </MenuList>
            </Menu>
        </Flex>
        <Text fontSize='13px' fontWeight='400' fontFamily='Segoe UI' color='black.800'>out of 500 payments</Text>
    </Flex>
  )
}

export default ListFilter