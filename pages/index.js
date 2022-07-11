import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Petiknet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    <a href="https://petik.net" title="Petiknet">
    <img src="https://petik.net/wp-content/uploads/2022/07/new-logos.webp" width="350" height="65" alt="Petiknet">
    </a>
        <Header title="PETIKNET" />
        <p className="description">
          Petiknet adalah situs yang menyajikan informasi terkini di Indonesia dan dunia seputar Teknologi, Digital , Bisnis, Game, Hingga Edukasi yang bermanfaat dan juga menyajikan tutorial menarik dan berita berita seru lainnya.
        </p>
      </main>

      <Footer />
    </div>
  )
}
