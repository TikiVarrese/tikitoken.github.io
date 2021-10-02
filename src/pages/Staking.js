import React, { useState } from 'react'
import PageTitle from '../components/Typography/PageTitle'


function Staking() {
  return (
    <>
      <PageTitle>Staking - BankerDoge Vaults</PageTitle>
      <iframe className="w-full h-full" src="https://app.bankerdoge.com/tiki-vault"></iframe>
    </>
  )
}

export default Staking
