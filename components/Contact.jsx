import styled from 'styled-components'
import Button from '@mui/material/Button';


const Contact = () => {

  const email = () =>{
    window.location = "mailto:es23jr@gmail.com"
  }  

  return (
    <Container>
        <TextWrapper width  = "100%">
            <p className = "preheading">Contact</p>
            <h1 className = "heading">Intersted? I'm one email away.</h1>
        </TextWrapper>
        <TextWrapper>
            <p className = "memo">Actively looking for job positions at the moment!</p>
        </TextWrapper>
        <Btn variant="outlined" onClick = {()=>email()}>Contact Me</Btn>
    </Container>
  )
}


const Container = styled.section`
    width:100%;
    height:90vh;
    display:flex;
    justify-content:center;
    align-items:Center;
    flex-direction:column;
`

const Btn = styled(Button)`
    padding:10px 20px;
    border-radius:10px;
    text-transform:none;
    font-size:14px;
    font-weight:400;
    border:1px solid hsla(206, 97%, 61%,1);
    color: hsla(206, 97%, 61%,1);
    margin-top:20px;
    background:hsla(206,97%,61%,0.1);
`

const TextWrapper = styled.div`
    text-align:center;
    width:${({width})=> width};
    display:flex;
    justify-content:center;
    align-items:Center;
    flex-direction:column;
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


    .memo{
        font-size:24px;
        color:hsla(205, 84%, 22%,1);
        margin:10px 0px;
        font-weight:400;
        width:70%;
    }

`

export default Contact