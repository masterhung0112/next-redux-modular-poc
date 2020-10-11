import '../styles/globals.css'
import { wrapper } from '../store'
import { ClockModule } from '../modules/clock/module'
import { DynamicModuleLoader } from 'redux-dynamic-modules'
import { Layout } from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <DynamicModuleLoader modules={[ClockModule]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DynamicModuleLoader>
  )
}

export default wrapper.withRedux(MyApp)
