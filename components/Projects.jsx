import styled from 'styled-components'
import {useState} from 'react'

import { projects } from '../constants/constant'
import ProjBox from './ProjBox'

import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'

const Projects = () => {

    const [showMore, setShowMore] = useState(false);
  return (
    <Container id = "projects">
        <TextWrapper width = "100%" size = "large">
            <p className = "preheading">Projects</p>
            <h1 className = "heading">Check out some of my recent projects</h1>
        </TextWrapper>
        <ProductWrapper displayMore = {showMore} >
            {projects.map((product)=>(
                <ProjBox name = {product.name} about = {product.about} tools = {product.tools} extra = {product.extra} gitLink = {product.resposLink} url = {product.webLink}/>
            ))}
            <p className = "show-more" onClick = {()=>setShowMore(!showMore)}>{showMore ? "Close" : "Show more"}</p>
        </ProductWrapper>
    </Container>
  )
}

const Container = styled.div``
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
`
const ProductWrapper = styled.div` 
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
overflow:hidden;
position:relative;
.show-more{
    display:none;
}
@media (max-width: 949px) {
    /* background:hsla(360,100%,50%,0.4); */
    height:835px;
    height:${({displayMore})=> displayMore ? "100%" : "805px"};
    .show-more{
        display:block;
        position:absolute;
        bottom:1.3rem;
        font-weight:400;
        color:hsla(360,0%,80%,1);
        transition:color 250ms ease;
        cursor:pointer;
        &:active{
            color:hsla(206, 50%, 61%,1);
        }
    }
}
`


export default Projects