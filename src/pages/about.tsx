import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Links } from '../components/Links'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiTelegramFill, RiSkypeFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title } from '../styles/styles'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Joy Miki </title>
        <meta
          name="description"
          content="My name is Joy Miki, I'm a Web & Ecommerce Developer."
        />
        <meta property="og:title" content="About | Joy Miki" />
        <meta
          property="og:description"
          content="My name is Joy Miki, I'm a Web & Ecommerce Developer."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            について
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img
                className="AboutImg"
                src="/photo/joy.jpg"
                alt=""
              />

              <div className="links">
                <ul>
                  <Link href={'https://github.com/automi0919'}>
                    <a target="_blank" aria-label="Link para o Github">
                      <AiFillGithub size={25} /> @automi0919
                    </a>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/joy-miki'}>
                    <a target="_blank" aria-label="Link para o Linkedin">
                      <BsLinkedin size={25} /> @joy-miki
                    </a>
                  </Link>
                  <Link
                    href={'https://t.me/automi0919'}
                  >
                    <a target="_blank" aria-label="Link para o WhatsApp">
                      <RiTelegramFill size={25} /> @automi0919
                    </a>
                  </Link>
                  <Link
                    href={'https://join.skype.com/invite/y1u3SNsabQed'}
                  >
                    <a target="_blank" aria-label="Link para o WhatsApp">
                      <RiSkypeFill size={25} /> @automi
                    </a>
                  </Link>
                  <Link
                    href={'https://www.discordapp.com/users/joymiki'}
                  >
                    <a
                      className="dc"
                      target="_blank"
                      aria-label="Link para o Discord"
                    >
                      <FaDiscord size={25} /> @joymiki
                    </a>
                  </Link>
                  <Link href={'mailto:cool.joy.miki@gmail.com'}>
                    <a
                      className="email"
                      target="_blank"
                      aria-label="Link para o email"
                    >
                      <GrMail size={25} /> cool.joy.miki@gmail.com
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                  Let's talk, maybe create an incredible project together?
                </h3>
                <p>Send me a message! 😉</p>
                <Link href={'/contact'}>
                  <a>
                    <ButtonAlt>Contact</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p>
                I'm a highly motivated lead engineer with commercial experience in Web and Ecommerce development. 
                I have successfully delivered a wide range of custom Web and Ecommerce development projects with eye-catching user-friendly UI design and high-end functionalities.
              </p>
              <p>
                I have successfully worked with numerous clients to define requirements, design new system elements, implement new functionalities, and optimize existing systems.
                When working on a new project, I like to talk to my clients so that I can have a clear understanding of their needs and vision of the project.
              </p>
              <p>
                I am passionate about something new that makes me a faster learner in technology that can help my clients grow their projects or businesses.
                I always want to learn something new and hone my skills whenever I have the opportunity.
              </p>
              <p>
                I'm thorough and precise in everything I do, and have a keen interest in technology, and user experience.
                And I'm following only one rule that i found for myself long time ago "The Bus Factor" if someone need to support my code it should be without big pain and troubles.
              </p>
              <p>
                I like my job and I'm doing my best for your success because for me Your success is my success.
                Sometimes you need not just a plain software developer but a partner who will take a part of responsibility and who you can trust. I want to be that kind of person for you.
              </p>
              <p>
                I will bring to life all your ideas!
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  )
}
