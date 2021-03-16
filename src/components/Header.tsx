import { useRef, useState } from 'react'
import Link from 'next/link'

import RocketseatLogo from '../assets/rocketseat.svg'

import {
  Container,
  Div,
  Navbar,
  MobileButton,
  ButtonJoin,
  IconMobile
} from '../styles/pages/Home'
const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuOpen = (): void => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <Div ref={headerRef} isMenuOpen={menuOpen}>
        <Container as="header" isMenuOpen={menuOpen}>
          <div className="logo">
            <Link href="/" aria-label="Link para a página inicial">
              <RocketseatLogo aria-hidden="true" />
            </Link>
          </div>

          <Navbar isMenuOpen={menuOpen}>
            <Link href="/">
              <a aria-current="page">Início</a>
            </Link>
            <Link href="/sobre">
              <a aria-current="page">Sobre</a>
            </Link>
            <Link href="/entrar">
              <ButtonJoin isMenuOpen={menuOpen}>Entrar</ButtonJoin>
            </Link>
          </Navbar>

          <MobileButton
            onClick={handleMenuOpen}
            aria-label="Abrir menu do site"
          >
            <IconMobile isMenuOpen={menuOpen} />
          </MobileButton>
        </Container>
      </Div>
    </>
  )
}

export default Header
