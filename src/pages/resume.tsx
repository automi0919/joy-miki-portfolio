import Head from 'next/head'
import { Header } from '../components/Header'
import { Links } from '../components/Links'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { CV } from '../components/CV'
import { Description, Section, Title } from '../styles/styles'
import { PageSection } from '../styles/resume'
import { BsFileText } from 'react-icons/bs'

export default function Resume() {
  const resumeData =
    'https://www.canva.com/design/DAFTFxhLLPw/ddljelrvwHm5zBTlNywJMQ/edit?utm_content=DAFTFxhLLPw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'

  const previewData = `${resumeData.substr(
    0,
    resumeData.lastIndexOf('/') + 1
  )}view?embed`

  return (
    <>
      <Head>
        <title>Resume | Joy Miki </title>
        <meta
          name="description"
          content="Here you can see or download my resume."
        />
        <meta property="og:title" content="Resume | Joy Miki" />
        <meta
          property="og:description"
          content="Here you can see or download my resume."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          カリキュラム
          <span>
            <BsFileText /> Resume
          </span>
        </Title>
        <PageSection>
          {/* <iframe
            src={previewData}
            allowFullScreen
            width="740"
            height="780"
            title="Joy Miki"
          /> */}

          <CV />
        </PageSection>
      </Section>
      <Footer />
    </>
  )
}
