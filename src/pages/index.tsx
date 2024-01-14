import Head from 'next/head'
import Image from 'next/image'
import DashboardWrapper from '@/components/dashboard'
import { Flex, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Text } from '@chakra-ui/react'
import Transaction from '@/components/Transaction'
import { OrderProgress } from '@/components/OrderProgress'
import { PaymentProgress } from '@/components/PaymentProgress'
import { DownArrow } from '@/components/icons/downArrow'
import { SearchIcon } from '@/components/icons/search'
import StatusFilter from '@/components/StatusFilter'
import SearchFilter from '@/components/SearchFilter'
import ListFilter from '@/components/ListFilter'


export default function Home() {
  return (
    <>
      <Head>
        <title>Merchant Module</title>
        <meta name="description" content="Merchant Section of the app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        
        <DashboardWrapper
        pageTitle="TransMonitor"
        background="white"
        padding="30px"
      >
        <Flex direction='column' gap='27px'>
          <SimpleGrid columns={[1, null, 4]} spacing='9px'>
            <Transaction title='Daily Transaction Volume' total={2342}/>
            <Transaction title='Daily Transaction Value' total={4000000} currency={true}/>
            <Transaction title='Total Transaction Volume' total={452000}/>
            <Transaction title='Total Transaction Value' total={4000000} currency={true}/>
          </SimpleGrid>
          <Flex h='329px' w='100%' direction={{base:'column', md:'row'}}>
              <Flex w={{base:'100%', md:'65%'}} h='100%' bg='coral'>
                  hgvjbknlkmbjnkml;v bjvnkjlkml
              </Flex>
              <Flex w='0px' h='100%' border='4px solid #F7F8FA' display={{base:'none', md:'flex'}}/>
              <Flex w={{base:'100%', md:'35%'}} h='100%' direction='column' >
                  <Flex w='100%' h='50%'>
                      <OrderProgress/>
                  </Flex>
                  <Flex w='100%' h='0px' border='4px solid #F7F8FA' display={{base:'none', md:'flex'}}/>
                  <Flex  w='100%' h='50%'>
                    <PaymentProgress/>
                  </Flex>
              </Flex>
          </Flex>
          <Flex w='100%' justifyContent='flex-start' mt='16px'>
                <Text color='black.800' fontSize='36px' fontWeight='400' fontFamily=' Segoe UI'> Payments</Text>
          </Flex>
          <Flex w='100%' maxH='30px' justifyContent='space-between' alignItems='flex-end' overflow='hidden' direction={{base:'column', md:'row'}}>
              <ListFilter/>

              <Flex w={{base:'100%', md:'31%'}} justifyContent='flex-start'> 
                  <SearchFilter/>
              </Flex>

              <Flex  w={{base:'100%', md:'29%'}} justifyContent='flex-start'>
                  <StatusFilter/>
              </Flex>

          </Flex>
        </Flex>
        </DashboardWrapper>
      </main>
    </>
  )
}
