"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/app/layouts/header'
import LayoutUtama from '@/app/layouts/layout-utama'
import VerifikasiSukses from '@/app/components/seller/VerifikasiSukses'
import VerifikasiMessage from '@/app/components/seller/VerifikasiMessage'

const VerifikasiProsesPage = () => {
  const router = useRouter()
  // State dummy untuk isVerified
  const [isVerified, setIsVerified] = useState(true) // Ubah true/false untuk testing

  const handleButtonClick = () => {
    if (isVerified) {
      // Arahkan ke dashboard toko jika sudah diverifikasi
      router.push('/seller')
    } else {
      // Arahkan ke halaman utama jika belum diverifikasi
      router.push('/user-settings')
    }
  }

  return (
    <LayoutUtama>
      {/* Header with back button */}
      <Header title="Verifikasi" children={undefined} />

      {/* Conditional Content */}
      {isVerified ? (
        <VerifikasiSukses onButtonClick={handleButtonClick} />
      ) : (
        <VerifikasiMessage onButtonClick={handleButtonClick} />
      )}

      {/* Tombol untuk mengubah kondisi isVerified (dummy testing) */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsVerified(!isVerified)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Toggle Verifikasi Status (Dummy)
        </button>
      </div>
    </LayoutUtama>
  )
}

export default VerifikasiProsesPage
