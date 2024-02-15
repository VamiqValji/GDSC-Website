import { Card, CardBody, Image, Stack, Text, CardFooter, Button, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent, useDisclosure, Wrap, Badge } from '@chakra-ui/react'
import React from 'react';

// Google colours
import colors from "../GoogleColors.json";
const defaultImg = "https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/c_crop,h_640,w_2560,y_0.0_mul_h_sub_0.0_mul_640/c_crop,h_640,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/event_banners/dsc-bevy-chapterevents-03_JKl7ewJ.png";

export const EventCard = ({ heading, img = defaultImg, date, text, detail = text, type, color = colors.green300 }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Card
                as="Button"
                textAlign="left"
                maxW='20rem'
                transform='rotate(0)'
                _hover={{
                    transition: "transform 0.2s ease-in-out",
                    transform: "rotate(2deg) translateY(-1rem)"
                }}
                onClick={onOpen}
            >
                {/* Modal */}
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            <Stack marginTop='2.5rem' spacing='1rem'>
                                <Image
                                    minH='100px'
                                    maxH='100px'
                                    minW='full'
                                    objectFit='cover'
                                    src={img}
                                    borderRadius='lg'
                                />
                                <Stack>
                                    <Text>{heading}</Text>
                                    <Wrap><Badge>{type}</Badge></Wrap>
                                </Stack>
                            </Stack>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>{detail}</Text>
                        </ModalBody>
                        <ModalFooter />
                    </ModalContent>
                </Modal>
                {/* Card Body */}
                <CardBody>
                    <Image
                        minH='100px'
                        maxH='100px'
                        minW='full'
                        objectFit='cover'
                        src={img}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Text color={color} fontSize='2xl'>{heading}</Text>
                        <Text color='gray.500'>{text}</Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <Text fontSize='sm' color='gray.500'>{date}</Text>
                </CardFooter>
            </Card>
        </>
    )
}