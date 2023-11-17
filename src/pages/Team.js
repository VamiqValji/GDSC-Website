import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { MemberCard } from '../components/MemberCard';

export const Team = ({}) => {
    const members = [
        { name: "Vamiq Valji", linkedIn: "https://www.linkedin.com/in/vamiq-valji/", pfp: "https://media.licdn.com/dms/image/C4D03AQEfPNdqmfUCiw/profile-displayphoto-shrink_800_800/0/1596847659331?e=1705536000&v=beta&t=qeRMFrVOmeSfyUsauAOQIAELVWnQ25rnv3r-mdSn7uk", position: "Tech Lead"},
        { name: "Justin Abuyuan", linkedIn: "https://www.linkedin.com/in/justin-abuyuan/", pfp: "https://media.licdn.com/dms/image/D5603AQFA39Ep6OyU6Q/profile-displayphoto-shrink_800_800/0/1697921469015?e=1705536000&v=beta&t=2ARUlBpwPf1iWd8LicFaNwyqYbOxFod9K_Ecvvojt2I", position: "Tech Co-Lead"},
        { name: "Abdulmoez Akbar", linkedIn: "https://www.linkedin.com/in/moezakbar/", pfp: "https://media.licdn.com/dms/image/C5603AQGLXcVXfGF7oQ/profile-displayphoto-shrink_800_800/0/1644286713763?e=1705536000&v=beta&t=Y7MiBbHpX27ez4AraXlQDpRmfAHfczEusPz3KAUfUlk", position: "Lead"},
        { name: "Bavneet Kandola", linkedIn: "https://www.linkedin.com/in/bavneet-kandola-a6a036211/", pfp: "https://media.licdn.com/dms/image/D5635AQG07BypF2BXRw/profile-framedphoto-shrink_800_800/0/1694469016937?e=1700798400&v=beta&t=Ggc7Xthl6QTaR1S9HV_eYJ_SJWzGo0roikLGMdcP1BQ", position: "Operation Manager"}, // open to work
        { name: "Raif Rizwan Karkal", linkedIn: "https://www.linkedin.com/in/raif-rizwan-karkal-a045a4171/", pfp: "https://media.licdn.com/dms/image/D4D03AQFd6PXqxoS_VA/profile-displayphoto-shrink_800_800/0/1669917474151?e=1705536000&v=beta&t=79wcyTNUSWLF9d4cWtrlA4yNO6MikvrmMw5FF0j6-Ms", position: "Vice Lead"},
        { name: "Michael Jin", linkedIn: "https://www.linkedin.com/in/michael-jin-0823a2242", pfp: "https://media.licdn.com/dms/image/D5603AQGVtS2jbaJBZA/profile-displayphoto-shrink_800_800/0/1698963540001?e=1705536000&v=beta&t=AKiKFiDNXko8RM_VKv_rdNYgtA-Wf7ciS7zor_kMPNY", position: "Partnership Lead"},
        { name: "Sandy Mourad", linkedIn: "https://www.linkedin.com/in/sandy-mourad/", position: "Marketing Lead", pfp: "https://media.licdn.com/dms/image/D4D03AQGKgK441VfGdQ/profile-displayphoto-shrink_800_800/0/1695503237153?e=1705536000&v=beta&t=PMiTarhwqMVmuEPql_gnxALi3fXw3LpeAHesRWjw6E0" },
        // { name: "Ammar Lakdawala", linkedIn: "https://media.licdn.com/dms/image/C5603AQFZeRZ-mTMz-Q/profile-displayphoto-shrink_800_800/0/1661583311911?e=1705536000&v=beta&t=8g9EV23ZDwaQ5F5r3NMQem8hHqyXf3fMaLJ70TH8oZo", pfp: "https://media.licdn.com/dms/image/D5635AQG07BypF2BXRw/profile-framedphoto-shrink_800_800/0/1694469016937?e=1700798400&v=beta&t=Ggc7Xthl6QTaR1S9HV_eYJ_SJWzGo0roikLGMdcP1BQ", position: "Technical"}, // team member
        // { name: "Vu Thanh Loc Mai", linkedIn: "https://www.linkedin.com/in/loc-mai-44271a260/", pfp: "https://media.licdn.com/dms/image/D5635AQG07BypF2BXRw/profile-framedphoto-shrink_800_800/0/1694469016937?e=1700798400&v=beta&t=Ggc7Xthl6QTaR1S9HV_eYJ_SJWzGo0roikLGMdcP1BQ", position: "Technical"}, // team
        // { name: "Kevin Wang", linkedIn: "https://www.linkedin.com/in/kevin-wang-9b1650226/", pfp: "https://media.licdn.com/dms/image/D5635AQG07BypF2BXRw/profile-framedphoto-shrink_800_800/0/1694469016937?e=1700798400&v=beta&t=Ggc7Xthl6QTaR1S9HV_eYJ_SJWzGo0roikLGMdcP1BQ", position: "Operations Team Member"}, // member
        // { name: "Syarique Syahrizal", linkedIn: "https://www.linkedin.com/in/syariques/", position: "Marketing Team member", pfp: "https://media.licdn.com/dms/image/D5603AQFHpk6n0-v72A/profile-displayphoto-shrink_800_800/0/1699026788969?e=1705536000&v=beta&t=A9cJNJrT9ZWpPsJk4BHX5C67zL0EbWZNWd6OqTLf_HQ" },
        // { name: "Matthew Susko", linkedIn: "https://www.linkedin.com/in/matthew-mb-susko/", position: "Technical Team Member", pfp: "" }, // open to work
        // { name: "Kesiya Jacob", linkedIn: "https://www.linkedin.com/in/kesiyajacob/", position: "Partnership Team Member", pfp: "https://media.licdn.com/dms/image/D5603AQF2uEQ52FeWnA/profile-displayphoto-shrink_800_800/0/1694995359656?e=1705536000&v=beta&t=8iI9AqsNzdvW09RZmx6C9uPPx54OE5N2lZ_uP01mJfY" }, // team member
        // { name: "Paul Wu", linkedIn: "https://www.linkedin.com/in/paul-wu-on/", position: "Marketing Team Member", pfp: "https://media.licdn.com/dms/image/C5603AQEMMua5GZ-zSQ/profile-displayphoto-shrink_800_800/0/1658057034141?e=1705536000&v=beta&t=OS42AoOU6RXPZ3p3z7l1-G2f_jeELm2vvSDJ41RkQP4" }, // team member
        // { name: "Anne Santiago", linkedIn: "https://www.linkedin.com/in/santiagoanne", position: "Marketing Team Member", pfp: "" }, // no pfp // team member
        // { name: "Nashifah Ahmed", linkedIn: "https://www.linkedin.com/in/nashifah", position: "Marketing Team Member", pfp: "" }, // no pfp // team member
        // { name: "Hassan Hamid", linkedIn: "https://www.linkedin.com/in/hassan-hamid04", position: "Operations Team Member", pfp: "" }, // no pfp // team member
        // { name: "Danne Mohamed", linkedIn: "", position: "Partnership Team Member", pfp: "" } // no pfp // team member
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