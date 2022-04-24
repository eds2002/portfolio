import styled from 'styled-components'

const About = () => {
  return (
    <Container>
        <TextWrapper width = "100%">
            <p className = "preheading">About Me</p>
            <h1 className = "heading">Introducing myself</h1>
        </TextWrapper>
        <TextWrapper width = "50%">
            <p className = "about">
                Hi! My name is Eduardo Sanchez and I love creating things on the web.
                My first experience with web development was back in 2020, when I would
                create my own e-commerce pages with a Shopify plugin called Pagefly. Granted,
                they were the ugliest pieces of work I've ever made, but this experience sparked my interest into web dev.
            </p>
            <p className = "about">
                In September 2021, I took a web development class at my community college and decided to pursue 
                Front End Development around October of that year. I decided my best course of action was to self teach myself the fundamentals
                of web dev. Fast forward now, I'm ready to be part of the tech industry.
            </p>
            <div className = "about">
                <p>Some of my skills:</p>
                <span>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Scss</li>
                    <li>Javascript</li>
                    <li>React JS</li>
                    <li>Next JS</li>
                    <li>Styled Components</li>
                </span>
            </div>
        </TextWrapper>
    </Container>
  )
}

const Container = styled.section`
width:100%;
margin-bottom:100px;
`
const TextWrapper = styled.div`
width:${({width})=> width};
.preheading{
    font-size:1rem;
    font-weight:500;
    color: hsla(206, 97%, 61%,1);
}
.heading{
    font-size:32px;
    color:hsla(205, 84%, 22%,1);
    margin:10px 0px;
}
.about{
    line-height:1.6;
    font-size:18px;
    color:hsla(212, 13%, 43%,1);
    margin:20px 0px;
    span{
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
        height:100px;
        font-size:15px;
        margin-top:5px;
    }
}

.highlight{
    color: hsla(206, 97%, 61%,1);
    line-height:1.6;
    font-size:18px;
    display:inline;
}

@media (max-width: 768px) {
    width:100%;
}


`

export default About