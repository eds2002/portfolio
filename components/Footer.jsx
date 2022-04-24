import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <TextWrapper>
            <p>Build by <b>Eduardo Sanchez. </b> <br/>Designed inspired by <b>Brittany Chiang</b></p>
        </TextWrapper>
    </Container>
  )
}

const Container = styled.section`
padding:20px 0px;
    display:flex;
    justify-content:center;
    align-items:Center;
    flex-direction:column;
`

const TextWrapper = styled.div`
    text-align:center;
    width:${({width})=> width};
    display:flex;
    justify-content:center;
    align-items:Center;
    flex-direction:column;
    font-size:14px;
    color:hsla(360,0%,50%,1);
`

export default Footer