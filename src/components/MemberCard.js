import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import colors from "../GoogleColors.json";

export const MemberCard = ({member, color=colors.yellow600}) => {
    let { name, linkedIn, pfp, position } = member;
    return (
        <>
            <Card maxW='xs' boxShadow={"md"} mt={4} ml={4} mr={4}>
                <Link href={linkedIn} isExternal _hover={{textDecoration:"none"}}>
                    <CardBody>
                        <Image
                            src={pfp}
                            alt='LinkedIn Profile'
                            borderRadius='lg'
                            fallbackSrc='https://via.placeholder.com/800'
                        />
                        <Stack alignItems={"center"} mt='3' spacing='2'>
                            <Heading size='md'>{name}</Heading>
                            <Text fontWeight={"black"} color={color} fontSize='l'>{position}</Text>
                        </Stack>
                    </CardBody>
                </Link>
            </Card>
        </>
    )
}