'use client'

import AturStokBox from '@/app/components/seller/atur-stok-box'
import Popup from '@/app/components/seller/popup'
import StokBox from '@/app/components/seller/stok-box'
import Header from '@/app/layouts/header'
import LayoutUtama from '@/app/layouts/layout-utama'
import { useRouter } from 'next/navigation'
import React, { useState, ChangeEvent, FormEvent } from 'react'

const AturStock = () => {

  return (
    <LayoutUtama>
      <Header title="Atur Stok" children={undefined} />
      <div className="container mx-auto px-4 pt-24 pb-8 font-nunito">
        <div className='grid grid-cols-3 gap-3'>
            <StokBox itemName='Stok 1'></StokBox>
            <AturStokBox itemName='Tambah Baru'></AturStokBox>

        </div>
      </div>
    </LayoutUtama>
  )
}

export default AturStock
