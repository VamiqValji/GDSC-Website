import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'

export const Section = ({float, header, content, picUrl}) => {
    return (
        <Flex style={
            {
                margin: "4rem",
            }
        }>
        {float === "right"? (
        <>
          <div>
            <Text fontSize="6xl">{header}</Text>
            <Box w="70px" h="10">
            <Text noOfLines={[1, 2, 3]}>
                {content}
            </Text></Box>
        </div>

        <div>
            <img style={
                {

                }
            } src={picUrl} alt="section picture"></img>
        </div>  
        </>
        )
        :(
            <>
            <div>
            <img style={
                {

                }
            } src={picUrl} alt="section picture"></img>
        </div>  
          <div>
            <Text fontSize="6xl">{header}</Text>
            <Box w="70px" h="10">
            <Text noOfLines={[1, 2, 3]}>
                {content}
            </Text></Box>
        </div>

        
        </>
      )
    }
    </Flex>
    
    )
}