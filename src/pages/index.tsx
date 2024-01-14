import Head from 'next/head'
import Image from 'next/image'
import DashboardWrapper from '@/components/dashboard'
import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import Transaction from '@/components/Transaction'
import { OrderProgress } from '@/components/OrderProgress'
import { PaymentProgress } from '@/components/PaymentProgress'


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
          <Flex h='329px' w='100%'>
              <Flex w='65%' h='100%' bg='coral'>

              </Flex>
              <Flex w='0px' h='100%' border='4px solid #F7F8FA'></Flex>
              <Flex w='35%' h='100%' direction='column' >
                  <Flex w='100%' h='50%'>
                      <OrderProgress/>
                  </Flex>
                  <Flex w='100%' h='0px' border='4px solid #F7F8FA'/>
                  <Flex  w='100%' h='50%'>
                    <PaymentProgress/>
                  </Flex>
              </Flex>
          </Flex>
        </Flex>
        </DashboardWrapper>
      </main>
    </>
  )
}
