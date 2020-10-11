import { wrapper } from "../store";
import Head from 'next/head'
import React from 'react'
import { NextPage } from "next";
import { Clock } from "../components/clock";
import { ClockModule } from "../modules/clock/module";
import { DynamicModuleLoader, IModuleStore } from "redux-dynamic-modules";

const ClockPage: NextPage<{ title: string}> = ({ title }) => {
    return (
        <>
          <Head>
            <title>{title}</title>
          </Head>
          <div>
            <h1>{title}</h1>
            <DynamicModuleLoader modules={[ClockModule]}> 
                <Clock />
            </DynamicModuleLoader>
          </div>
        </>
      )
}

export const getStaticProps = wrapper.getStaticProps(
    ({store, preview}) => {
        (store as IModuleStore<any>).addModule(ClockModule)
        return { props: { title: 'Clock page' } }
    }
)

export default ClockPage;
