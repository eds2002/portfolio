import styled from 'styled-components'
import * as React from 'react';
import Link from 'next/link'


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
        font-size:24px;
    }
}

`

const TextWrapper = styled.div`
    width:${({size})=> size};
    color:hsla(205, 84%, 22%,1);
    margin-top:${({marginT})=> marginT};
    .about-me{
        font-weight:500;
        line-height:1.6;
        font-size:20px;
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
            <h4 className = 'small-text text--non-prominent'>👋 Hello!</h4>
            <h1 className = "big-text text--non-prominent">My name is Eduardo Sanchez</h1>
            <h1 className = "big-text ">I'm a Front End Developer based in New Jersey.</h1>
        </TextWrapper>
        <TextWrapper size = "40%" marginT = '2rem'>
            <h3 className = "about-me small-text">
                Interested in creating beautiful user experiences <span className = "text--gray">through the web. I </span>love to learn
                <span className = "text--non-prominent"> and</span> love to push myself <span className = "text--gray">to eventually become the</span> best in my field.
            </h3>
        </TextWrapper>
    </Container>
  )
}

export default Hero