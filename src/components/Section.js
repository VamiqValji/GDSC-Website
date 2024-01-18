import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const Section = ({float, header, content, picUrl}) => {
    
        if(float === "right")
            return (
        <div style={
            {
                padding: "4rem",
                backgroundColor:"#F3F3F3",
                display:'flex',
                justifyContent:'space-between'
            }
        }> 
        <div style={{
                width:'21rem',
            }}>
            <Text fontSize="6xl">{header}</Text>
            <Box>
            <Text noOfLines={[1, 2, 3, 4, 5]}>
                {content}
            </Text></Box>
        </div>

        <div style={
                {
                    width:'40%'
                }
            }>
            <img  src={picUrl} alt='pic'></img>
        </div>  
        </div>
        )
        
        
        return (
        <div style={
            {
                padding: "4rem",
                display:'flex',
                justifyContent:'space-between'
            }
        }>
        <div style={
                {
                    width:'40%'
                }} >
            <img
            src={picUrl} alt='pic'></img>
        </div>  
        
        <div style={{
                width:'21rem'
            }}>
            <Text fontSize="6xl">{header}</Text>
            <Box >
            <Text noOfLines={[1, 2, 3, 4]}>
                {content}
            </Text>
            </Box>
        </div>

        </div>
      )
    }
