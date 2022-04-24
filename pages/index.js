import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { About, Contact, Footer, Hero, Navbar, Projects } from '../components'
import styled from 'styled-components'

const Container = styled.section`
width:100vw;
`

const Layout = styled.div`
max-width:1234px;
height:100%;
margin:0 auto;
padding:0px 25px;
`

export default function Home() {
  return (
    <Container>
      <Layout>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </Layout>
    </Container>
  )
}
