import Head from 'next/head'
import { NextPage } from "next";
import { wrapper } from '../store';

const IndexPage: NextPage<{ title: string }> = ({ title }) => {
  return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <div>
          <h1>{title}</h1>
        </div>
      </>
    )
}

export const getStaticProps = wrapper.getStaticProps(
  ({store, preview}) => {
      return { props: { title: 'Index page' } }
  }
)

export default IndexPage;