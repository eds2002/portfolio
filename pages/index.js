import Head from 'next/head'
import Image from 'next/image'
import { About, Contact, Footer, Hero, Navbar, Projects } from '../components'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled(motion.section)`
width:100vw;
overflow:hidden;
`

const Layout = styled.div`
max-width:1234px;
height:100%;
margin:0 auto;
padding:0px 25px;
overflow-x:hidden;
overflow:hidden;
`

export default function Home() {

  return (
    <>
      <Head>
        <title>Eduardo Sanchez</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name = "description" content = "Welcome to my portfolio. Learn more about me." />
      </Head>
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
    </>
  )
}
