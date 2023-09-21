import Link from 'next/link'
import { FaDiscord, FaSkype, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Joy Miki</h4>
      <div className="links">
        <Link href={'https://github.com/automi0919'}>
          <a target="_blank" aria-label="Link to Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/joy-miki'}>
          <a target="_blank" aria-label="Link to Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={'https://t.me/automi0919'}>
          <a target="_blank" aria-label="">
            <FaTelegramPlane />
          </a>
        </Link>
        <Link href={'https://join.skype.com/invite/y1u3SNsabQed'}>
          <a target="_blank" aria-label="">
            <FaSkype />
          </a>
        </Link>
        <Link href={'https://www.discordapp.com/users/joymiki'}>
          <a target="_blank" aria-label="">
            <FaDiscord />
          </a>
        </Link>
      </div>
    </FooterContainer>
  )
}
