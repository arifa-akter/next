import DashSideMenu from '../components/dashComponent/DashSideMenu'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar></Navbar>
      <DashSideMenu></DashSideMenu>
      <Component {...pageProps} />
  </div>
  )
}

export default MyApp
