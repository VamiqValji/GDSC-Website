import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import colors from "../GoogleColors.json";

export const MemberCard = ({member, color=colors.yellow600}) => {
    let { name, linkedIn, pfp, position } = member;
    return (
        <>
            <Card maxW='xs' boxShadow={`0 8px 8px #0000001A`} mt={4} ml={4} mr={4} _hover={{boxShadow:`0 8px 10px ${color}2A`}} >
                {/* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];
                 */}
                <Link href={linkedIn} isExternal _hover={{textDecoration:"none"}}>
                    <CardBody>
                        <Image
                            src={pfp}
                            alt='LinkedIn Profile'
                            borderRadius='lg'
                            fallbackSrc='https://via.placeholder.com/800'
                            // boxShadow={"0 0px 5px #0000001A"}
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