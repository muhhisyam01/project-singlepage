import React from 'react'
import Layout from '../Layout'
import { useState } from 'react'

import Tabs from '../components/Tabs'
import AllBatik from '../features/allBatik/AllBatik'
import LakiLaki from '../features/lakiLaki/LakiLaki'


export default function ListBatik() {
  const [tab, setTab]  = useState(0)

  return (
    <Layout>
      <Tabs tab={tab} setTab={setTab}/>
      {
        tab === 0 && 
        <AllBatik/>
        
      }
      {
        tab === 1 && 
        <LakiLaki/>

      }
    </Layout>
  )
}
