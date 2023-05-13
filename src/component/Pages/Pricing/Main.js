import React from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import Brand from '../../menhomethree/Brand'
import First from '../menpricing/First'

function Main() {
  return (
    <>
        <Header/>
        <Bredcom 
        title="Home" 
        subtitle="Pricing"/>
        <First/>
        <Brand/>
    </>
  )
}

export default Main