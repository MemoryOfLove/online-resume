import React, { Fragment } from 'react'
import Header from '../../containers/Header'
import Resume from '../../containers/Resume'
export default function Home() {
  return (
    <Fragment>
      <Header style={{height:'36px'}}></Header>
      <Resume style={{height:'calc(100vh - 36px)'}}></Resume>
    </Fragment>
  )
}
