import Head from 'next/head';
import Banner from '../components/Banner';
import SignIn from '../components/SignIn';
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>react project</title>
      </Head>

      <main>
        <Banner></Banner>
        <SignIn></SignIn>
      </main>

      <footer>
      <Footer></Footer>
      </footer>
    </div>
  )
}
