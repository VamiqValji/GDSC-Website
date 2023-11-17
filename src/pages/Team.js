import { Box, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { MemberCard } from '../components/MemberCard';
import colors from "../GoogleColors.json";

export const Team = ({}) => {
    const members = [
        { name: "Abdulmoez Akbar", linkedIn: "https://www.linkedin.com/in/moezakbar/", pfp: "https://media.licdn.com/dms/image/C5603AQGLXcVXfGF7oQ/profile-displayphoto-shrink_800_800/0/1644286713763?e=1705536000&v=beta&t=Y7MiBbHpX27ez4AraXlQDpRmfAHfczEusPz3KAUfUlk", position: "Lead"},
        { name: "Raif Rizwan Karkal", linkedIn: "https://www.linkedin.com/in/raif-rizwan-karkal-a045a4171/", pfp: "https://media.licdn.com/dms/image/D4D03AQFd6PXqxoS_VA/profile-displayphoto-shrink_800_800/0/1669917474151?e=1705536000&v=beta&t=79wcyTNUSWLF9d4cWtrlA4yNO6MikvrmMw5FF0j6-Ms", position: "Vice Lead"},
        { name: "Vamiq Valji", linkedIn: "https://www.linkedin.com/in/vamiq-valji/", pfp: "https://media.licdn.com/dms/image/C4D03AQEfPNdqmfUCiw/profile-displayphoto-shrink_800_800/0/1596847659331?e=1705536000&v=beta&t=qeRMFrVOmeSfyUsauAOQIAELVWnQ25rnv3r-mdSn7uk", position: "Tech Lead"},
        { name: "Justin Abuyuan", linkedIn: "https://www.linkedin.com/in/justin-abuyuan/", pfp: "https://media.licdn.com/dms/image/D5603AQFA39Ep6OyU6Q/profile-displayphoto-shrink_800_800/0/1697921469015?e=1705536000&v=beta&t=2ARUlBpwPf1iWd8LicFaNwyqYbOxFod9K_Ecvvojt2I", position: "Tech Co-Lead"},
        { name: "Bavneet Kandola", linkedIn: "https://www.linkedin.com/in/bavneet-kandola-a6a036211/", pfp: "", position: "Operation Manager"}, // open to work
        { name: "Michael Jin", linkedIn: "https://www.linkedin.com/in/michael-jin-0823a2242", pfp: "https://media.licdn.com/dms/image/D5603AQGVtS2jbaJBZA/profile-displayphoto-shrink_800_800/0/1698963540001?e=1705536000&v=beta&t=AKiKFiDNXko8RM_VKv_rdNYgtA-Wf7ciS7zor_kMPNY", position: "Partnership Lead"},
        { name: "Sandy Mourad", linkedIn: "https://www.linkedin.com/in/sandy-mourad/", position: "Marketing Lead", pfp: "" }, // waiting
    ]

    return (
        <>
            <Box>
                <Text fontSize={"xxx-large"} fontWeight={"bold"}>Core Team</Text>
                <Text>
                    Our core team is composed of exceptional talents from Queen's University, 
                    representing a diverse range of faculties and academic years. Explore below 
                    to meet our team!
                </Text>

                <Text mt={4} textAlign={"center"} fontSize={"xx-large"} fontWeight={"bold"}>Club Leads</Text>
                <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" justify="center" align="center">
                    {[members[0], members[1]].map(lead => <MemberCard member={lead} />)}
                </Flex>

                <Text mt={4} textAlign={"center"} fontSize={"xx-large"} fontWeight={"bold"}>Tech Leads</Text>
                <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" justify="center" align="center">
                    {[members[2], members[3]].map(lead => <MemberCard member={lead} color={colors.blue500} />)}
                </Flex>

                <Text mt={4} textAlign={"center"} fontSize={"xx-large"} fontWeight={"bold"}>Operation Leads</Text>
                <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" justify="center" align="center"><MemberCard member={members[4]} color={colors.red500} /></Flex>

                <Text mt={4} textAlign={"center"} fontSize={"xx-large"} fontWeight={"bold"}>Partnership Leads</Text>
                <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" justify="center" align="center"><MemberCard member={members[5]} color={colors.green500} /></Flex>

                <Text mt={4} textAlign={"center"} fontSize={"xx-large"} fontWeight={"bold"}>Marketing Leads</Text>
                <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" justify="center" align="center"><MemberCard member={members[6]} color={colors.yellow600} /></Flex>
            </Box>
        </>
    )
}