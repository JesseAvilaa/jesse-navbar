import Head from 'next/head'

import Header from '../components/Header'

import { Wapper } from '../styles/pages/Home'

const Sobre: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mais informações</title>
      </Head>

      <Wapper>
        <Header />

        <h1>Olá, você está na página: Sobre</h1>
      </Wapper>
    </>
  )
}

export default Sobre
