import { Box, Text, Flex, Image, Container, Stack, Heading, Icon } from '@chakra-ui/react'
import React from 'react'
import { MemberCard } from '../components/MemberCard';
import colors from "../GoogleColors.json";
import gdscGroupPic from "../assets/compressedGDSCGroup.jpg";

// pfps
import vamiqPFP from "../assets/pfps/vamiq.jpeg"
import moezPFP from "../assets/pfps/moez.jpeg"
import raifPFP from "../assets/pfps/raif.jpeg"
import bavneetPFP from "../assets/pfps/bavneet.jpeg"
import justinPFP from "../assets/pfps/justin.jpeg"
import michaelPFP from "../assets/pfps/michael.jpeg"
import sandyPFP from "../assets/pfps/sandy.jpeg"
import arjunPFP from "../assets/pfps/arjun.jpeg"

export const Team = () => {
    const members = [
        { name: "Abdulmoez Akbar", linkedIn: "https://www.linkedin.com/in/moezakbar/", pfp: moezPFP, position: "Lead"},
        { name: "Raif Rizwan Karkal", linkedIn: "https://www.linkedin.com/in/raif-rizwan-karkal-a045a4171/", pfp: raifPFP, position: "Vice Lead"},
        { name: "Vamiq Valji", linkedIn: "https://www.linkedin.com/in/vamiq-valji/", pfp: vamiqPFP, position: "Tech Lead"},
        { name: "Justin Abuyuan", linkedIn: "https://www.linkedin.com/in/justin-abuyuan/", pfp: justinPFP, position: "Tech Co-Lead"},
        { name: "Bavneet Kandola", linkedIn: "https://www.linkedin.com/in/bavneet-kandola-a6a036211/", pfp: bavneetPFP, position: "Operation Manager"},
        { name: "Michael Jin", linkedIn: "https://www.linkedin.com/in/michael-jin-0823a2242", pfp: michaelPFP, position: "Partnership Lead"},
        { name: "Sandy Mourad", linkedIn: "https://www.linkedin.com/in/sandy-mourad/", position: "Marketing Lead", pfp: sandyPFP },
        { name: "Arjun Devnani", linkedIn: "https://www.linkedin.com/in/arjun-devnani/", pfp: arjunPFP, position: "Core Team Manager"},
    ]

    const Blob = (props) => (
        <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
            fill="currentColor"
        />
        </Icon>
    )

    const landing = () => (
        <Container maxW={'7xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                    <Text
                        as={'span'}
                        position={'relative'}
                        // _after={{
                        //     content: "''",
                        //     width: 'full',
                        //     height: '20%',
                        //     position: 'absolute',
                        //     bottom: 1,
                        //     left: 0,
                        //     bg: colors.blue300,
                        //     zIndex: -1,
                        // }}
                    >
                    Core Team
                    </Text>
                    <br />
                </Heading>
                <Text color={'gray.500'}>
                    Our core team is composed of exceptional talents from Queen's University, 
                    representing a diverse range of faculties and academic years. Explore below 
                    to meet our team!
                </Text>
                
                </Stack>
                    <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>
                    <Blob
                        w={'100%'}
                        h={'120%'}
                        position={'absolute'}
                        top={'-10%'}
                        left={-3}
                        zIndex={-1}
                        color={colors.yellow200}
                    />
                    <Box
                        position={'relative'}
                        height={'330px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}>
                        <Image
                        alt={'Hero Image'}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '110%', lg: '115%' }}
                        src={gdscGroupPic}
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    )

    return (
        <>
            <Box mb={12}>
                <Text fontSize={"xxx-large"} fontWeight={"bold"} textAlign={"center"}></Text>
                {landing()}

                <Text textAlign={"center"} fontSize={"xx-large"} fontWeight={"bold"}>Club Leads</Text>
                <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" justify="center" align="center">
                    {[members[0], members[1]].map(lead => <MemberCard member={lead} />)}
                </Flex>

                <Text mt={8} textAlign={"center"} fontSize={"xx-large"} fontWeight={"bold"}>Tech Leads</Text>
                <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" justify="center" align="center">
                    {[members[2], members[3]].map(lead => <MemberCard member={lead} color={colors.blue500} />)}
                </Flex>

                <Text mt={8} textAlign={"center"} fontSize={"xx-large"} fontWeight={"bold"}>Operation, Partnership, Marketing Leads</Text>
                <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" justify="center" align="center">
                    {[{m:members[4], c:colors.red500}, {m:members[5], c:colors.green500}, {m:members[6], c:colors.yellow600}, {m:members[7], c:colors.blue500}].map(lead => 
                        <MemberCard member={lead.m} color={lead.c} />)}
                </Flex>
            </Box>
        </>
    )
}