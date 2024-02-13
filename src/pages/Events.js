import { Container, Heading, Stack, Text, Box, Image, Icon, Flex, Divider, AbsoluteCenter, Wrap, Card } from '@chakra-ui/react'
import { EventCard } from '../components/EventCard'
import React from 'react'

// Google brand colours
import colors from "../GoogleColors.json";
// Photos
import eventPic from "../assets/EventsHero.png";

export const Events = ({ }) => {

    const cardsData = [
        // GDSC & Google
        {
            heading: "GDSC & Google SWE",
            img: "https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/c_crop,h_640,w_2560,y_0.0_mul_h_sub_0.0_mul_640/c_crop,h_640,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/event_banners/dsc-bevy-chapterevents-03_JKl7ewJ.png",
            date: "Jan 15, 2024",
            text: "Join us for an exclusive online seminar, hosted by Queen's GDSC, featuring a special guest from Google - Alex Velazquez. This session is a must-attend for anyone aspiring to intern or work at Google.",
            type: "SPEAKER",
            color: colors.green300
        },
        // LeetCode Session w/ Anish Reddy
        {
            heading: "GDSC & Google SWE",
            img: "https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/c_crop,h_640,w_2560,y_0.0_mul_h_sub_0.0_mul_640/c_crop,h_640,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/event_banners/IMG_0553.jpg",
            date: "Jan 15, 2024",
            text: "Join our live LeetCode session with Anish Reddy from Conestoga!",
            type: "WORKSHOP",
            color: colors.yellow200
        }
    ]

    const Blob = (props) => (
        <Icon
            width={'100%'}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61.4,-33.3C73.1,-15.1,71.8,12.8,59.4,31.1C47,49.3,23.5,58,2.8,56.4C-17.9,54.8,-35.9,42.9,-49.2,24.1C-62.5,5.3,-71.3,-20.5,-62.3,-37.1C-53.4,-53.7,-26.7,-61.1,-0.9,-60.6C24.8,-60.1,49.7,-51.5,61.4,-33.3Z"
                transform="translate(50 60)"
                fill="currentColor"
            />
        </Icon>
    )

    const Head = () => (
        <>
            <Container maxW={'full'}>
                <Stack direction="column" spacing={'7rem'}>
                    <Stack direction={{ base: 'column', md: 'row-reverse' }} align={'center'}>
                        <Box mx={{ base: 40 }}>
                            <Stack direction='column' spacing={{ base: 5, md: 10 }}>
                                <Heading
                                    lineHeight={1.1}
                                    fontWeight={600}
                                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                                    my={{ base: 2 }}
                                >
                                    <Text as={'span'} position={'relative'}>
                                        Events
                                    </Text>
                                    <br />
                                </Heading>
                                <Text color={'gray.500'}>
                                    The GDSC holds events to help teach members how to thrive in the industry through technical and career workshops, and speaker events with individuals at the top of their fields.
                                </Text>
                            </Stack>
                        </Box>
                        <Box w={"100%"}>
                            <Stack>
                                <Flex
                                    flex={1}
                                    justify={'center'}
                                    align={'center'}
                                    position={'relative'}
                                    w={'100%'}
                                >
                                    <Blob
                                        w={'100%'}
                                        h={'100%'}
                                        position={'absolute'}
                                        left={'40%'}
                                        top={'28%'}
                                        zIndex={-1}
                                        color={colors.blue500}
                                    />
                                    <Box
                                        position={'relative'}
                                        height={'330px'}
                                        rounded={'2xl'}
                                        boxShadow={'2xl'}
                                        width={'100%'}
                                        overflow={'hidden'}
                                    >
                                        <Image
                                            alt={'Hero Image'}
                                            fit={'cover'}
                                            align={'center'}
                                            w={'100%'}
                                            h={{ base: '100%', sm: '110%', lg: '115%' }}
                                            src={eventPic}
                                        />
                                    </Box>
                                </Flex>
                            </Stack>
                        </Box>
                    </Stack>
                    <Box position='relative' padding='10'>
                        <Divider />
                        <AbsoluteCenter bg='white' px='4'>
                            <Text fontSize='2xl' color={'black'}>
                                Past Events
                            </Text>
                        </AbsoluteCenter>
                    </Box>
                    <Wrap spacing={'2rem'}>
                        {cardsData.map((card) => (
                            <EventCard
                                heading={card.heading}
                                img={card.img}
                                date={card.date}
                                text={card.text}
                                detail={card.detail}
                                type={card.type}
                                color={card.color}
                            />
                        ))}
                    </Wrap>
                </Stack>
            </Container>
        </>
    )

    return (
        <>
            <Container maxW={'7xl'}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}>
                    {Head()}
                </Stack>
            </Container>
        </>
    )
}