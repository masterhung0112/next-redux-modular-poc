import '../styles/globals.css'
import { wrapper } from '../store'
import { ClockModule } from '../modules/clock/module'
import { DynamicModuleLoader, IModuleStore } from 'redux-dynamic-modules'
import { Layout } from '../components/layout/layout'
import App, { AppContext, AppInitialProps } from 'next/app'
import { END } from 'redux-saga'

class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = async ({Component, ctx}: AppContext) => {
      // 1. Wait for all page actions to dispatch
      const pageProps = {
          ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      };

      // 2. Stop the saga if on server
      if (ctx.req) {
        (ctx.store as IModuleStore<any>).addModule(ClockModule)
        // ctx["moduleManager"].

          // ctx.store.dispatch(END);
          // await (ctx.store as SagaStore).sagaTask.toPromise();
      }

      // 3. Return props
      return {
          pageProps,
      };
  };

  public render() {
      const {Component, pageProps} = this.props;
      return <Layout><Component {...pageProps} /></Layout>;
  }
}

export default wrapper.withRedux(WrappedApp)
