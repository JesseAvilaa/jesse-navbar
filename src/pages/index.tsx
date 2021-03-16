import Head from 'next/head'

import Header from '../components/Header'

import { Wapper } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rocketseat | Evolua rápido como a tecnologia.</title>
      </Head>

      <Wapper>
        <Header />

        <h1>Olá, você está na página: Início</h1>
      </Wapper>
    </>
  )
}

export default Home
