import '../styles/globals.css'

import MainConteiner from '../componets/MainContainer'

function MyApp({ Component, pageProps }) {
  return (
  <MainConteiner>
    <Component {...pageProps} />
  </MainConteiner>
  
  )
}

export default MyApp
