import { wrapper } from "../store";
import Head from 'next/head'
import React from 'react'
import { NextPage } from "next";
import { ClockModule } from "../modules/clock/module";
import { DynamicModuleLoader, IModuleStore } from "redux-dynamic-modules";
import { AviasalesModule } from "../modules/aviasales/module";
import { Aviasales } from "../components/aviasales";

const AviasalesPage: NextPage<{ title: string}> = ({ title }) => {
    return (
        <>
          <Head>
            <title>{title}</title>
          </Head>
          <div>
            <h1>{title}</h1>
            <DynamicModuleLoader modules={[AviasalesModule]}> 
                <Aviasales />
            </DynamicModuleLoader>
          </div>
        </>
      )
}

export const getStaticProps = wrapper.getStaticProps(
    ({store, preview}) => {
        (store as IModuleStore<any>).addModule(ClockModule)
        return { props: { title: 'Aviasales page' } }
    }
)

export default AviasalesPage;
