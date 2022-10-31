import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
