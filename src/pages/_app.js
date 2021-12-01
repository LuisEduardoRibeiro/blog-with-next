import UIKit from '../infra/UIKit'
import Navbar from '../patterns/Navbar'
import '../styles/globals.css'
import '../infra/UIKit/css/uikit.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <UIKit>
      <Navbar />
      <Component {...pageProps} />
    </UIKit>
  )
}

export default MyApp
