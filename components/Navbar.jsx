import styled from 'styled-components'
import Link from 'next/link'
import Button from '@mui/material/Button';
import {motion} from 'framer-motion'
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react'
import {isMobile} from 'react-device-detect';
import Image from 'next/image'
import logo from '../src/logo.svg'

const Navbar = () => {

    const [mobNav, setMobNav] = useState(false)

  return (
    <Container
        id = "home"
        initial = {{opacity:0}}
        whileInView = {{opacity:1 }}
        transition = {{delay: 0.2}}
        viewport = {{ once: true}}
    >
        <Left className = "desk-left">
          <Link href = "/">
          <Image
            src = {logo}
            alt = "logo picture"
            width = {32}
            height = {32}
          />
          </Link>
        </Left>
        <Right className = "desk-right">
            <ul>
                <li>
                    <Link href = "#home">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href = "#about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href = "#projects">
                        <a>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href = "#contact">
                        <Btn variant = "outlined">Contact Me</Btn>
                    </Link>
                </li>
            </ul>
        </Right>
        <MobileNav classname = "mobile-nav" active = {mobNav}>
            <div>
                <MobLeft className = "mob-left">
                <Link href = "/">
                  <Image
                    src = {logo}
                    alt = "logo picture"
                    width = {32}
                    height = {32}
                  />
                </Link>
                </MobLeft>
                <MobRight>
                    <GridViewSharpIcon fontSize = "medium" style = {{cursor:"pointer"}} onClick = {()=>setMobNav(!mobNav)}/>
                </MobRight>
            </div>
            <MobLinks>
                <div className = "links-wrapper">
                    <li onClick = {()=>setMobNav(!mobNav)}>
                        <Link href = "#home">
                          <a><HomeIcon/></a>
                        </Link>
                        <p>Home</p>
                    </li>
                    <li onClick = {()=>setMobNav(!mobNav)}>
                      <Link href = "#about">
                        <a>
                          <PersonIcon/>
                        </a>
                      </Link>
                      <p>About</p>
                    </li>
                    <li onClick = {()=>setMobNav(!mobNav)}>
                      <Link href = "#projects">
                        <a>
                          <WorkIcon/>
                        </a>
                      </Link>
                      <p>Projects</p>
                    </li>
                    <li onClick = {()=>setMobNav(!mobNav)}>
                      <Link href = "#contact">
                        <a>
                          <EmailIcon/>
                        </a>
                      </Link>
                      <p>Contact</p>
                    </li>
                </div>
            </MobLinks>
        </MobileNav>
    </Container>
  )
}

const Container = styled(motion.section)`
display:flex;
justify-content:space-between;
align-items:center;
height:5rem;
scroll-behavior:smooth;
.desk-left{
  cursor:pointer;
}
.mob-left{
  cursor:pointer;
}

@media (max-width: 768px) {
    .desk-left{
        display:none;
    }
    .desk-right{
        display:none;
    }
}
`
const Left = styled.div`
.logo{
    font-size:24px;
}
`
const Right = styled.div`
ul{
    list-style-type:none;
}
li{
    display:inline;
    margin:0px 20px;
    cursor:pointer;
    a{
        font-size:14px;
        font-weight:400;
        color:hsla(212, 13%, 50%,1);
        text-decoration:none;
        padding:10px 5px;
        position:relative;
        &:after{
            content:'';
            position:absolute;
            left:0;
            bottom:0px;
            height:1.5px;
            width:0%;
            background:black;
            border-radius:500px;
            transition: width 0.6s cubic-bezier(0.85, 0, 0.15, 1);

        }
        &:hover:after{
            width:100%;
        }
    }
}

`

const Btn = styled(Button)`
border-radius:10px;
text-transform:none;
font-size:14px;
font-weight:400;
border:1px solid hsla(206, 97%, 61%,1);
color: hsla(206, 97%, 61%,1);
scroll-behavior:smooth;
`

const MobileNav = styled.div`
display:none;
@media (max-width: 768px) {
    display:block;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    height:200px;
    z-index:99999;
    display:flex;
    flex-direction:column;
    padding:0px 50px;
    background:white;
    padding:25px;
    border-top-left-radius:25px;
    border-top-right-radius:25px;
    transition:transform 0.6s cubic-bezier(0.83, 0, 0.17, 1), filter 0.6s cubic-bezier(0.83, 0, 0.17, 1);
    transform:translateY(${({active})=> active ? '0px' : "125px"});
    filter: drop-shadow(0px 0px 50px hsla(360,0%,${({active})=> active ? "50%" : "90%"},1));
    div{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    .links-wrapper{
      width:90%;
      height:100%;
      margin:0 auto;
      li{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        list-style-type:none;
        background:white;
        padding:10px;
        width:70px;
        border-radius:10px;
        filter:drop-shadow(0px 0px 10px hsla(360,0%,80%,1));
        transform:scale(1);
        transition:0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        cursor:pointer;
        user-select: none; /* supported by Chrome and Opera */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        &:hover{
          transform:scale(0.950);
          filter:drop-shadow(0px 0px 20px hsla(220,100%,83%,1));
          transition:0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        p{
          font-size:12px;
        }

        a{
          color:black;
        }
      }
    }

}
`
const MobLeft = styled.div``
const MobRight = styled.div`
height:100%;
display:flex;
justify-content:center;
align-items:flex-start;
`

const MobLinks = styled.div`
width:100%;
height:100%;
`




export default Navbar