import { wrapper } from "../store";
import Head from 'next/head'
import React from 'react'
import { NextPage } from "next";
import { DynamicModuleLoader, IModuleStore } from "redux-dynamic-modules";
import { CountModule } from "../modules/counter";
import { Count } from "../components/count";

const CountPage: NextPage<{ title: string}> = ({ title }) => {
    return (
        <>
          <Head>
            <title>{title}</title>
          </Head>
          <div>
            <h1>{title}</h1>
            <DynamicModuleLoader modules={[CountModule]}> 
                <Count />
            </DynamicModuleLoader>
          </div>
        </>
      )
}

export const getStaticProps = wrapper.getStaticProps(
    ({store, preview}) => {
        (store as IModuleStore<any>).addModule(CountModule)
        return { props: { title: 'Count page' } }
    }
)

export default CountPage;
