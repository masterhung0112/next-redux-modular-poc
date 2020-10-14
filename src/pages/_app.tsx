import '../styles/globals.css'
import { wrapper } from '../store'
import { ClockModule } from '../modules/clock/module'
import { DynamicModuleLoader, IModuleStore } from 'redux-dynamic-modules'
import { Layout } from '../components/layout/layout'
import App, { AppContext, AppInitialProps } from 'next/app'
import { END } from 'redux-saga'
import { SagaStore } from '../store/createStore'
import { allSagasDone } from '../store/all-sagas-done'

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
        const sagaStore = ctx.store as SagaStore
        const tasks = sagaStore ? sagaStore.getSagaTasks() : undefined
        if (tasks) {
            console.log('req now new ', tasks.length)

            await allSagasDone(tasks)
        }
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
