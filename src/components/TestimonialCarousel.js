import React from 'react'
import { Box, Text, VStack, Image, Flex } from "@chakra-ui/react";

const Testimonial = ({ testimonial }) => (
    <Flex>
      {testimonial.image && (<Image borderRadius="full" boxSize="150px" src={testimonial.image} alt={testimonial.name} />)}
      <Text>{testimonial.text}</Text>
      <Text fontWeight="bold">{testimonial.name}</Text>
    </Flex>
);
  
const TestimonialCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };

    const testimonials = [
        {
            name: "adamsd",
            text: "rawdawidnaksdnm",
        },
        {
            name: "adamd",
            text: "rawdawidnaksdnm",
        },
        {
            name: "adaam",
            text: "rawdawidnaksdnm",
        },
        {
            name: "adasm",
            text: "rawdawidnaksdnm",
        },
    ]
  
    return (
      <Flex>
        {/* <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </Slider> */}
      </Flex>
    );
  };
  
export default TestimonialCarousel;