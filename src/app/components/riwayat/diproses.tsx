"use client";

import Link from "next/link";
import IconHistory from "../icon/history";
import IconLocations from "../icon/location";
import IconSuperSeller from "../icon/super-seller";
import IconToko from "../icon/toko";
import IconWarna from "../icon/warna";
import { useState } from "react";

const Diproses = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const closeModal = () => {
        setIsAnimating(true);
        setTimeout(() => {
        setIsModalOpen(false);
        }, 300);
    };

    const openModal = () => {
        setIsModalOpen(true);
        setIsAnimating(true);
    }

  return (
  <>
    {/* --- Card toko status : diproses----- */}
    <div className="relative items-center py-3 text-sm transition-all duration-200 rounded-md cursor-pointer text-black-80 border-white-30 w-full max-w-[444px] bg-gray-100 mt-3">
        {/* --- Header toko ----- */}
        <Link href={'/toko/anugrah-store'} >
            <div className="flex items-center justify-between h-[38px]">
                <div className="flex items-center space-x-2 pl-4">
                    <IconToko></IconToko>
                    <IconSuperSeller></IconSuperSeller>
                    <p className="text-base text-black-80 font-bold">Anugrah Shoes</p>
                </div>
                <div className="pr-4">
                    <button className="h-6 w-24 rounded-md border-2 border-[#51DC73] bg-[#EAFBEE] text-[#51DC73] text-[10px] font-bold">Dikirim</button>
                </div>
            </div>
        </Link>

            <div className="mt-2 p-3 border-t-2 flex justify-start gap-3">
                <div className="w-2/6"> 
                    <img className="object-cover w-full h-[100px] rounded-md" src="/image/image.png"></img>
                </div>
                <div className="w-4/6"> 
                    <Link href={'/transaksi/detail/89912891?q=diproses'}>
                    <h3 className="font-semibold mb-1 text-sm">Sepatu Anak Sekolah SMP Semua Ukuran | Murah dan Berkualitas.</h3>
                    <div className="flex flex-wrap items-center mb-1">
                        <IconLocations></IconLocations>
                        <p className="text-xs">Semarang, Sampangan</p>
                    </div>

                    <div className="flex flex-wrap items-center mb-1">
                        <IconWarna></IconWarna>
                        <p className="text-xs">Warna Merah</p>
                    </div>

                    <div className="flex flex-wrap items-center mb-1">
                        <IconHistory></IconHistory>
                        <p className="text-xs">Estimasi Tiba : 14 Oktober 2024</p>
                    </div>

                    <div className="mb-1 text-base font-bold flex items-center justify-between">
                        <span>Total</span><span>Rp700.000</span>
                    </div>
                    </Link>
                    <div className="flex w-full justify-center mt-4">
                        <Link href={'/pesan/marketplace/anugrah-store'} className="w-full">
                            <button type="button" className="bg-[#51D7B1] text-white font-semibold py-2 px-2 rounded-l-lg w-full text-[12px]">
                                Hub Penjual
                            </button>
                        </Link>
                        <button type="button" onClick={openModal} className="bg-[#51D7B1] text-white font-semibold py-2 px-2 rounded-r-lg w-full text-[12px] border-l-4 border-white">
                            Diterima
                        </button>
                    </div>
                </div>
            </div>
    </div>
    {/* --- End card toko status : diproses --- */}

    {isModalOpen && (
        <>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        <div id="modal" className="font-nunito fixed inset-y-1/2 flex justify-center items-center z-[100] w-[360px] left-1/2 -translate-x-1/2 shadow-lg">
            <div
            className={`bg-white w-full max-w-lg rounded-xl p-6 absolute bottom-0 inset-y-auto ${ isAnimating ? 'translate-y-0' : 'translate-y-full'}`}>
                
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold font-nunito">Perhatian</h2>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <div className="flex items-center mb-6 gap-5">
                    <p>Apakah Anda yakin telah menerima paket?</p>
                </div>
                
                <div className="flex flex-row gap-3 mt-6">
                    <button onClick={closeModal} className="w-full bg-[#EE443F] text-white font-bold py-3 rounded-lg">
                        Batal
                    </button>
                    <Link href={'/transaksi/riwayat?q=selesai'} className="w-full">
                    <button className="w-full bg-[#51D7B1] text-white font-bold py-3 rounded-lg hover:bg-[#51D7B1]">
                        Terima
                    </button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )}
  </>
  );
};

export default Diproses;
