import { Image, Link, Text, Card, CardBody, Stack, Heading } from '@chakra-ui/react'
import React from 'react'

export const LearningReasource = ({info}) => {
    let {title, desc, image, link, color} = info
  return (
        <>
            <Card maxW='xs' boxShadow={`0 8px 8px #0000001A`} mt={4} ml={4} mr={4} _hover={{boxShadow:`0 8px 10px ${color}2A`}} >
                <Link href={link} isExternal _hover={{textDecoration:"none"}}>
                    <CardBody>
                        <Image
                            src={image}
                            alt='resource image'
                            borderRadius='lg'
                            fallbackSrc='https://via.placeholder.com/800'
                        />
                        <Stack alignItems={"left"} mt='3' spacing='0.5'>
                            <Heading size='md'>{title}</Heading>
                            <Text fontSize='l'>{desc}</Text>
                        </Stack>
                    </CardBody>
                </Link>
            </Card>
        </>
  )
}
