import styled from 'styled-components'
import Link from 'next/link'
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <Container>
        <Left>
            <p className = "logo">...</p>
        </Left>
        <Right>
            <ul>
                <li>
                    <Link href = "/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href = "/">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href = "/">
                        <a>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href = "/">
                        <Btn variant = "outlined">Contact Me</Btn>
                    </Link>
                </li>
            </ul>
        </Right>
    </Container>
  )
}

const Container = styled.section`
display:flex;
justify-content:space-between;
align-items:center;
height:5rem;
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
border-radius:500px;
text-transform:none;
font-size:14px;
font-weight:400;
border:1px solid hsla(206, 97%, 61%,1);
color: hsla(206, 97%, 61%,1);
`





export default Navbar