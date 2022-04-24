import styled from 'styled-components'
import * as React from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion';


const Container = styled.section`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
    height:100vh;
    padding-bottom:6rem;

.text--non-prominent{
    color:hsla(212, 13%, 60%,1)
}

.small-text{
    font-size:16px;
    font-weight:500;
}

.big-text{
    font-size:54px;
    font-weight:600;
    line-height:1.105;
    @media (max-width: 768px) {
        font-size:32px;
    }
}

`

const TextWrapper = styled.div`
    width:${({size})=> size};
    color:hsla(205, 84%, 22%,1);
    margin-top:${({marginT})=> marginT};
    .about-me{
        font-weight:600;
        line-height:1.6;
        font-size:22px;
    }
    *{
        margin:6px 0px;
    }
    @media (max-width: 768px) {
        width:100%;
    }
`




const Hero = () => {
  return (
    <Container>
        <TextWrapper size = "100%">
            <motion.h4 className = 'small-text text--non-prominent'
                initial = {{y:100, opacity:0}}
                whileInView = {{ y:0, opacity:1 }}
                viewport = {{ once: true}}
            >👋 Hello!</motion.h4>

            <motion.h1 className = "big-text text--non-prominent"
                initial = {{y:100, opacity:0}}
                whileInView = {{ y:0, opacity:1,bounce:0.3 }}
                transition = {{delay:0.1}}
                viewport = {{ once: true}}
            >My name is Eduardo Sanchez</motion.h1>

            <motion.h1 className = "big-text "
                initial = {{y:100, opacity:0}}
                whileInView = {{ y:0, opacity:1,bounce:0.3 }}
                transition = {{delay: 0.2}}
                viewport = {{ once: true}}
            >I'm a Front End Developer based in New Jersey.</motion.h1>
        </TextWrapper>
        <TextWrapper size = "40%" marginT = '2rem'>
            <motion.h3 className = "about-me small-text"
                initial = {{y:100, opacity:0}}
                whileInView = {{ y:0, opacity:1,bounce:0.3 }}
                transition = {{delay: 0.3}}
                viewport = {{ once: true}}
            >
                Interested in creating beautiful user experiences <span className = "text--non-prominent">through the web. </span>I love to learn
                <span className = "text--non-prominent"> and</span> love to push myself <span className = "text--non-prominent">to eventually become the</span> best in my field.
            </motion.h3>
        </TextWrapper>
    </Container>
  )
}

export default Hero