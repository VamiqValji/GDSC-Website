import React from 'react'
import { Box, Text, VStack, Image, Flex } from "@chakra-ui/react";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Testimonial = ({ testimonial }) => {
    console.log(testimonial)
    return (
    <Flex>
      {testimonial.image && (<Image borderRadius="full" boxSize="150px" src={testimonial.image} alt={testimonial.name} />)}
      <Text>{testimonial.text}</Text>
      <Text fontWeight="bold">{testimonial.name}asdasd</Text>
    </Flex>
)};
  
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
            name: "1",
            text: "rawdawidnaksdnm",
        },
        {
            name: "2",
            text: "rawdawidnaksdnm",
        },
        {
            name: "3",
            text: "rawdawidnaksdnm",
        },
        {
            name: "4",
            text: "rawdawidnaksdnm",
        },
    ]
  
    return (
      <Flex>
        <Slider {...settings}>
            {/* placeholder */}
        </Slider>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
      </Flex>
    );
  };
  
export default TestimonialCarousel;