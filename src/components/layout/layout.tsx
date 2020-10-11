import React, { FC, Fragment } from 'react'
import { useRouter } from 'next/router'
import { PageTransition } from 'next-page-transitions'
import { Navigation } from './navigation'
import { Clock } from '../clock'
import { ClockModule } from '../../modules/clock/module'
import { DynamicModuleLoader } from 'redux-dynamic-modules'
import { Loader } from './loader'

const TIMEOUT = 400

const Layout: FC = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <Navigation />
      <DynamicModuleLoader modules={[ClockModule]}>
        <Clock />
      </DynamicModuleLoader>
      {/* <Xkcd small />
      <Dog /> */}
      <PageTransition
        skipInitialTransition
        timeout={TIMEOUT}
        classNames='page-transition'
        loadingComponent={<Loader />}
        loadingDelay={500}
        loadingTimeout={{ enter: TIMEOUT, exit: 0 }}
        loadingClassNames='loading-indicator'
      >
        <Fragment key={router.route}>{children}</Fragment>
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }

        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }

        .page-transition-exit {
          opacity: 1;
        }

        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }

        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }

        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }
      `}</style>
    </>
  )
}

export { Layout }
