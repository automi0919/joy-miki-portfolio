/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Form } from './Form'
import { Description, Section, Title } from '../../styles/styles'
import { ContainerContact, ContactContent } from './styles'
import { BsSkype, BsWhatsapp } from 'react-icons/bs'
import { DiscordLogo, Envelope, TelegramLogo } from 'phosphor-react'

export function Contact() {
  return (
    <Section>
      <Title>
        Contact
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
        I'm always open to new work opportunities or collaborating on some amazing new projects. Just fill out the form and I will get back to you. 💪
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <BsSkype size={22} color="#00fffb" /> Skype{' '}
            </h4>
            <Link href="https://join.skype.com/invite/y1u3SNsabQed">
              <a target="_blank">
                <span>@automi</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              <DiscordLogo size={22} color="#00fffb" /> Discord{' '}
            </h4>
            <Link href="https://www.discordapp.com/users/joymiki">
              <a target="_blank">
                <span>@joy-miki</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {' '}
              <TelegramLogo size={22} color="#00fffb" /> Telegram{' '}
            </h4>
            <Link href="https://t.me/automi0919">
              <a target="_blank">
                <span>@automi0919</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {' '}
              <Envelope size={22} color="#00fffb" /> Email{' '}
            </h4>
            <Link href="ailto:cool.joy.miki@gmail.com">
              <a target="_blank">
                <span>cool.joy.miki@gmail.com</span>
              </a>
            </Link>
          </div>
        </ContactContent>

        <Form />
      </ContainerContact>
    </Section>
  )
}
