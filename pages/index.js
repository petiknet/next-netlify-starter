import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    <a href="https://petik.net" title="Petiknet">
    <img src="https://petik.net/wp-content/uploads/2022/07/new-logos.webp" width="350" height="65" alt="Petiknet">
    </a>
        <Header title="PETIKNET" />
        <p className="description">
          Petiknet adalah situs yang menyajikan informasi terkini di Indonesia dan dunia seputar Teknologi, Digital , Bisnis, Game, Hingga Edukasi yang bermanfaat dan juga menyajikan tutorial menarik dan berita berita seru lainnya.


Ada banyak informasi tentang digital di media sosial tetapi tidak ada yang memastikan bahwa Anda membaca hal-hal yang bermanfaat di akun media sosial Anda, Anda dapat mengunjungi situs <a href="https://bit.ly/petiknet" title="PetikNet">PetikNet</a> untuk mendapatkan pengetahuan umum. Dapatkan Informasi Lowongan Kerja Terbaru & terupdate. Info Loker Gratis hanya di <a href="https://bit.ly/kerjabos" title="Kerjabos">Kerjabos</a>
    
        </p>
      </main>

      <Footer />
    </div>
  )
}
