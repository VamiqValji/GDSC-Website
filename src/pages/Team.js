import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { MemberCard } from '../components/MemberCard';

export const Team = ({}) => {
    const members = [
        { name: "Vamiq Valji", linkedIn: "https://www.linkedin.com/in/vamiq-valji/", pfp: "https://media.licdn.com/dms/image/C4D03AQEfPNdqmfUCiw/profile-displayphoto-shrink_800_800/0/1596847659331?e=1705536000&v=beta&t=qeRMFrVOmeSfyUsauAOQIAELVWnQ25rnv3r-mdSn7uk", position: "Tech Lead"},
        { name: "Justin Abuyuan", linkedIn: "https://www.linkedin.com/in/justin-abuyuan/", pfp: "https://media.licdn.com/dms/image/D5603AQFA39Ep6OyU6Q/profile-displayphoto-shrink_800_800/0/1697921469015?e=1705536000&v=beta&t=2ARUlBpwPf1iWd8LicFaNwyqYbOxFod9K_Ecvvojt2I", position: "Tech Co-Lead"}
    ];

    return (
        <>
            <Box>
                <Text fontSize={"xxx-large"} fontWeight={"bold"}>Core Team</Text>
                <Text>
                    Our core team is composed of exceptional talents from Queen's University, 
                    representing a diverse range of faculties and academic years. Explore below 
                    to meet our team!
                </Text>
                {members.map(member => (
                    <MemberCard member={member} />
                ))}
            </Box>
        </>
    )
}