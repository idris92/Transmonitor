import Head from 'next/head'
import Image from 'next/image'
import DashboardWrapper from '@/components/dashboard'
import { Accordion,Flex, SimpleGrid, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react'
import Transaction from '@/components/Transaction'
import { OrderProgress } from '@/components/OrderProgress'
import { PaymentProgress } from '@/components/PaymentProgress'
import StatusFilter from '@/components/StatusFilter'
import SearchFilter from '@/components/SearchFilter'
import ListFilter from '@/components/ListFilter'
import ListItem from '@/components/ListItem'
import { useState } from 'react'
import ListHeading from '@/components/ListHeading'



export default function Home() {

  const [payments, setPayments] = useState([
    {
      'image_url':'',
      'item_type':'Apple Mac Book 15” 250 SSD 12GB',
      'price':'$73430',
      'transaction_no':1234567890,
      'time':'12:30',
      'status':'Reconcilled',
      'more_info': "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      'image_url':'',
      'item_type':'Apple Mac Book 14” 250 SSD 12GB',
      'price':'$73430',
      'transaction_no':1234567890,
      'time':'12:30',
      'status':'Pending',
      'more_info': "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      'image_url':'',
      'item_type':'Apple Mac Book 13” 250 SSD 12GB',
      'price':'$73430',
      'transaction_no':1234567890,
      'time':'12:30',
      'status':'Un-reconcilled',
      'more_info': "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      'image_url':'',
      'item_type':'Apple Mac Book 12” 250 SSD 12GB',
      'price':'$73430',
      'transaction_no':1234567890,
      'time':'12:30',
      'status':'Reconcilled',
      'more_info': "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      'image_url':'',
      'item_type':'Apple Mac Book 11” 250 SSD 12GB',
      'price':'$73430',
      'transaction_no':1234567890,
      'time':'12:30',
      'status':'Pending',
      'more_info': "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      'image_url':'',
      'item_type':'Apple Mac Book 15” 250 SSD 12GB',
      'price':'$73430',
      'transaction_no':1234567890,
      'time':'12:30',
      'status':'Reconcilled',
      'more_info': "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      'image_url':'',
      'item_type':'Apple Mac Book 14” 250 SSD 12GB',
      'price':'$73430',
      'transaction_no':1234567890,
      'time':'12:30',
      'status':'Pending',
      'more_info': "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      'image_url':'',
      'item_type':'Apple Mac Book 13” 250 SSD 12GB',
      'price':'$73430',
      'transaction_no':1234567890,
      'time':'12:30',
      'status':'Un-reconcilled',
      'more_info': "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      'image_url':'',
      'item_type':'Apple Mac Book 12” 250 SSD 12GB',
      'price':'$73430',
      'transaction_no':1234567890,
      'time':'12:30',
      'status':'Reconcilled',
      'more_info': "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      'image_url':'',
      'item_type':'Apple Mac Book 11” 250 SSD 12GB',
      'price':'$73430',
      'transaction_no':1234567890,
      'time':'12:30',
      'status':'Pending',
      'more_info': "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
  ])

  const [params, setParams] = useState('')
  const [noParams, setNoparams] = useState(10)

  const tableHeading=[
    {
      title: 'Item Type',
      isNumeric: false
    },
    {
      title: 'Price',
      isNumeric: false
    },
    {
      title: 'Transaction No',
      isNumeric: true
    },
    {
      title: 'Timing',
      isNumeric: false
    },
    {
      title: 'Status',
      isNumeric: false
    },
  ]


  const handleSearch=(value:any)=>{
    setParams(value)
  }

  const handleStatusFilter=(value:any)=>{
    setParams(value)
  }

  const handleNoParams=(value:number)=>{
    setNoparams(value)
  }
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
              <ListFilter handleNoParams={handleNoParams} noParams={noParams}/>

              <Flex w={{base:'100%', md:'31%'}} justifyContent='flex-start'> 
                  <SearchFilter handleSearch={handleSearch}/>
              </Flex>

              <Flex  w={{base:'100%', md:'29%'}} justifyContent='flex-start'>
                  <StatusFilter handleStatusFilter={handleStatusFilter}/>
              </Flex>

          </Flex>
          <Flex w='100%'>
            <Accordion  w="100%" allowToggle>
              <TableContainer w='100%'>
                <Table variant='simple'>
                  <Thead>
                    <Tr bg='black.400' > 
                    {
                      tableHeading.map((value, index)=>(
                        <ListHeading title={value.title} isNumeric={value.isNumeric} key={index}/>
                      ))
                    }         
                    </Tr>
                  </Thead>
                  <Tbody > 
                    {
                      payments.filter(obj=>obj.item_type.includes(params)|| obj.status.includes(params)).slice(0,noParams).map((item, index)=>(
                              <ListItem 
                              image_url={item.image_url} 
                              item_name={item.item_type} 
                              price={item.price} 
                              time={item.time}
                              transaction_no={item.transaction_no}
                              status={item.status as "Reconcilled" | "Un-reconcilled" | "Pending"}
                              key={index}
                              />
                      ))
                    }            
                   
                  </Tbody>
                </Table>
              </TableContainer>
            </Accordion>
          </Flex>
        </Flex>
        </DashboardWrapper>
      </main>
    </>
  )
}
