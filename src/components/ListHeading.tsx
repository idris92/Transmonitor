import { Th } from '@chakra-ui/react'
import React from 'react'


type heading={
    title: string
    isNumeric?: boolean
    key: number
}
const ListHeading = ({title, isNumeric, key}:heading) => {
  return (
    <Th textTransform='capitalize' fontSize='14px' fontWeight='400' fontFamily='Segoe UI' color='black.300' isNumeric={isNumeric} key={key}>{title}</Th>
  )
}

export default ListHeading