'use client'

import Header from '@/app/layouts/header'
import LayoutUtama from '@/app/layouts/layout-utama'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const notifications = [
  {
    id: 1,
    title: 'Annas123 Mengajukan Komplain!',
    time: '17:30',
    date: '2 Hari yang lalu',
    description:
      'Annas123 telah mengajukan komplain untuk produk Anda. Silakan tinjau komplainan mereka.',
    isRead: false,
  },
  {
    id: 2,
    title: 'FarinaS23 Mengajukan Komplain!',
    time: '17:30',
    date: '2 Hari yang lalu',
    description:
      'FarinaS23 telah mengajukan komplain untuk produk Anda. Silakan tinjau komplainan mereka.',
    isRead: false,
  },
  {
    id: 3,
    title: 'Naufal26 Mengajukan Komplain!',
    time: '17:30',
    date: '2 Hari yang lalu',
    description:
      'Naufal26 telah mengajukan komplain untuk produk Anda. Silakan tinjau komplainan mereka.',
    isRead: false,
  },
]

function NotifKomplain() {
  const router = useRouter()
  const [selectedFilter, setSelectedFilter] = useState('all') // 'all' or 'unread'
  const handleClick = () => {
    console.log('button di klik')
    router.push('/seller/dashboard/notifikasi/dikomplain/detail')
  }

  return (
    <LayoutUtama>
      <Header title="Komplain" children={undefined} />
      <div className="container mx-auto p-4 font-nunito pt-20">
        {/* Filter Section */}
        <div className="py-2 flex items-center justify-between pb-2 mb-4">
          <p
            className="text-black font-bold text-base leading-[25px] font-nunito"
            style={{ letterSpacing: '-0.322px' }}
          >
            Semua Notifikasi
          </p>
          <button
            className="text-[12px] font-light leading-[20px]"
            style={{
              color: 'var(--Warna-Utama, #51D7B1)',
              letterSpacing: '-0.2px',
              fontFamily: 'Nunito',
            }}
          >
            Tandai semua telah dibaca
          </button>
        </div>

        {/* Notification List */}
        <ul>
          {notifications.map((notification) => (
            <div
              onClick={handleClick}
              key={notification.id}
              className="flex items-center justify-between p-4 mb-4 bg-white shadow rounded-lg"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  {/* Replacing the truck icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"
                      fill="#2EC99D"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p
                    className="font-nunito text-[13px] font-semibold text-black truncate max-w-[220px]"
                    style={{
                      color: 'var(--Light-Text-Color, #1B1E28)',
                      letterSpacing: '-0.2px',
                      fontFamily: 'Nunito',
                    }}
                  >
                    {notification.title}
                  </p>

                  <p
                    className="font-nunito text-[12px] text-xs font-semibold text-gray-500 truncate max-w-[200px]"
                    title={notification.description} // Tooltip saat hover
                  >
                    {notification.description}
                  </p>
                  <p
                    className="font-semibold leading-[18px] text-[11px]"
                    style={{
                      color: '#000',
                      letterSpacing: '-0.184px',
                      fontFamily: 'Nunito',
                    }}
                  >
                    {notification.date}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p
                  className="font-semibold leading-[18px] text-[10px]"
                  style={{
                    color: '#51D7B1',
                    textAlign: 'right',
                    letterSpacing: '-0.276px',
                    fontFamily: 'Nunito',
                  }}
                >
                  {notification.time}
                </p>
                <div className="flex flex-col items-end">
                  {!notification.isRead && (
                    <div
                      className="w-2 h-2 text-white rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: '#51D7B1',
                        letterSpacing: '-0.276px',
                        fontSize: '12px',
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </LayoutUtama>
  )
}

export default NotifKomplain
