import styled from 'styled-components'
import {useState} from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link'
import { motion } from 'framer-motion';


const ProjBox = ({name, about, tools, extra, gitLink, url}) => {
  const [moreDetails, setMoreDetails] = useState(false);
  return (
    <Project
        initial = {{y:100, opacity:0}}
        whileInView = {{ y:0, opacity:1 }}
        viewport = {{ once: true}}
    >
        <Top>
            <div>
                <h4>{name}</h4>
                <Link href = {gitLink}>
                    <a target = "_blank">
                        <GitHubIcon className = "git" sx={{ fontSize: 20 }}/>
                    </a>
                </Link>
                <Link href = {url}>
                    <a target = "_blank">
                        <ShortcutIcon className = "external" sx={{ fontSize: 20 }}/>
                    </a>
                </Link>
            </div>
            <h1 onClick = {()=> setMoreDetails(!moreDetails)} >{about}</h1>
        </Top>
        <Bottom>
            {tools.map((tool)=>(
                <li>{tool}</li>
            ))}
        </Bottom>
        <DetailBox show = {moreDetails}>
                <CloseIcon className = "close" onClick = {()=>setMoreDetails(!moreDetails)}/>
            <div className="top">
                <h3>-A little more about <span className = "highlight">{name}</span></h3>
                <h2>{extra}</h2>
            </div>
            <div className="bottom">
                <Link href = {gitLink} target = "_blank">
                    <a target = "_blank">
                        <GitHubIcon sx={{ fontSize: 32 }} />
                    </a>
                </Link>
                <Link href = {url}>
                    <a target = "_blank">
                        <ShortcutIcon className = "externalLink" sx={{ fontSize: 32 }}/>
                    </a>
                </Link>
            </div>
        </DetailBox>
    </Project>
  )
}
const Project = styled(motion.div)`
position:relative;
display:flex;
flex-direction:column;
justify-content:space-between;

width:450px;
height:300px;
border-radius:25px;

background:white;
padding:25px;
filter: drop-shadow(0px 0px 10px hsla(360,0%,89%,1));
margin:50px 10px;
overflow:hidden;
`



const Top = styled.div`
h1{
    margin:10px 0px;
    transition:color 250ms ease;
    cursor:pointer;
    &:hover{
        color:hsla(212, 13%, 60%,1);
    }
}
h4{
    color:hsla(212, 13%, 60%,1);
}

div{
    display:flex;
    align-items:center;
    gap:10px;
    .git,.external{
        color:hsla(360,0%,50%,1);
        &:hover{
            color:hsla(360,0%,70%,1);
        }
    }
}


`
const Bottom = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
width:100%;
flex-wrap:wrap;
li{
    display:inline;
    padding:5px 15px;    
    margin:5px;
    text-align:center;
    border:1px solid hsla(206, 97%, 61%,1);
    background:hsla(206, 97%, 61%,0.075);
    border-radius:5px;
    transition: background 0.2s ease;
}

`

const DetailBox = styled.div`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
background:hsla(360,0%,98%,1);
border-radius:25px;
padding:25px;
transition:transform 0.6s cubic-bezier(0.83, 0, 0.17, 1);
transform:translateY(${({show})=> show ? "0%" : "100%"});

.close{
    position:absolute;
    top:25px;
    right:25px;
    cursor:pointer;
}

h3{
    color:hsla(212, 13%, 60%,1)
}
h2{
    color:hsla(205, 84%, 22%,1);
    font-size:1.305rem;
    line-height:1.5;
    margin:20px 0px;
}
.bottom{
    .externalLink{
        margin-left:20px;
    }
    a{
        color: hsla(206, 97%, 61%,1);
    }
}

.highlight{
    color: hsla(206, 97%, 61%,1);
}

`
export default ProjBox