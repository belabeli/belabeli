"use client"
import Link from "next/link";
import Header from "@/app/layouts/header";
import React, { useState, useEffect } from 'react';
import IconToko from "@/app/components/icon/toko";
import IconSuperSeller from "@/app/components/icon/super-seller";
import IconLocations from "@/app/components/icon/location";
import IconHistory from "@/app/components/icon/history";
import IconWarna from "@/app/components/icon/warna";
import IconBantuanAsk from "@/app/components/icon/bantuan-ask";
import IconBantuanBubble from "@/app/components/icon/bantuan-bubble";
import IconArrowRight from "@/app/components/icon/arrow-right";
import { useSearchParams } from "next/navigation";
import DetailBelumDiproses from "@/app/components/riwayat/detail/belum-diproses";
import DetailDibatalkan from "@/app/components/riwayat/detail/dibatalkan";

const RincianPesanan = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const options = ["Ingin mengubah pesanan", "Ingin mengubah pengiriman", "Kendala penjual", "Lainnya"]; // Replace with your actual options

    const handleSelect = (option: React.SetStateAction<string>) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const searchParams = useSearchParams();
    const q = searchParams.get('q'); 
    
    return (
      <>
        <Header title="Rincian Pesanan" children={undefined} />
        <div className="px-4 font-nunito absolute py-20 items-center w-[400px] left-1/2 -translate-x-1/2">
        {q === "pending" ? ('') : (
            <p className="text-red-500 font-semibold my-4">Pesanan Dibatalkan</p>
        )}
            
            {/* --- Card toko status : diproses----- */}
            <div className="relative items-center py-3 text-sm transition-all duration-200 rounded-md cursor-pointer text-black-80 border-white-30 w-full max-w-[444px] bg-gray-100 mt-3">
                {/* --- Header toko ----- */}
                <div className="flex items-center justify-between h-[38px]">
                    <div className="flex items-center space-x-2 pl-4">
                        <IconToko></IconToko>
                        <IconSuperSeller></IconSuperSeller>
                        <p className="text-base text-black-80 font-bold">Anugrah Shoes</p>
                    </div>
                    <div className="pr-4">
                        <p className="font-light text-xs text-black">Order ID: 1270511324</p>
                    </div>
                </div>

                {/* --- Body toko ----- */}
                <div className="mt-2 p-3 border-t-2 flex justify-start gap-3">
                    <div className="w-2/6"> 
                        <img className="object-cover w-full h-full rounded-md" src="/image/image.png"></img>
                    </div>
                    <div className="w-4/6"> 
                        <h3 className="font-semibold mb-1 text-sm">Sepatu Anak Sekolah SMP Semua Ukuran | Murah dan Berkualitas.</h3>
                        <div className="flex flex-wrap items-center mb-1">
                            <IconLocations></IconLocations>
                            <p className="text-xs">Semarang, Sampangan</p>
                        </div>

                        <div className="flex flex-wrap items-center mb-1">
                            <IconWarna></IconWarna>
                            <p className="text-xs">Warna Merah</p>
                        </div>

                        <div className="mb-1 text-base font-bold flex items-center justify-between">
                            <span>Total</span><span>Rp700.000</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {q === "pending" ? (
                <div className="mt-3">
                    <button className="bg-[#EAFBEE] text-[#1E963B] w-full h-fit p-4 text-xs font-light leading-tight rounded-lg text-left"> Pengajuan pembatalan Anda telah berhasil. Mohon menunggu persetujuan penjual </button>
                </div>
            ) : (
                <div className="mt-3">
                    <button className="bg-[#FCDAD9] text-[#C63935] w-full h-fit p-4 text-xs font-light leading-tight rounded-lg text-left"> Pesanan Anda sudah dikonfirmasi penjual dan berhasil dibatalkan </button>
                </div>
            )}

            {q === "pending" ? (
                <div className="flex flew-wrap w-full mt-3">
                    <button className="bg-white border-2 w-1/2 border-gray-300 text-black h-fit p-2 text-xs font-light leading-tight rounded-l-lg text-lef"> Status </button>
                    <button className="bg-white border-2 border-gray-300 text-green-500 w-full h-fit p-2 text-xs font-light leading-tight rounded-r-lg text-center border-l-0"> Menunggu Konfirmasi </button>
                </div>
            ) : (
                <div className="flex flew-wrap w-full mt-3">
                    <button className="bg-white border-2 w-1/2 border-gray-300 text-black h-fit p-2 text-xs font-light leading-tight rounded-l-lg text-lef"> Status </button>
                    <button className="bg-white border-2 border-gray-300 text-red-500 w-full h-fit p-2 text-xs font-light leading-tight rounded-r-lg text-center border-l-0"> Dibatalkan </button>
                </div>
            )}
            
            {q === "pending" ? (
                <DetailBelumDiproses></DetailBelumDiproses>
            ) : (
                <DetailDibatalkan></DetailDibatalkan>
            )}

            {q === "pending" ? (
                <>
                <div className="flex items-center pl-4 my-4">
                    <p className="text-base text-black-80 font-bold">Alamat Pengiriman</p>
                </div>

                <div className="relative items-center p-4 text-sm transition-all duration-200 rounded-lg cursor-pointer text-black-80 border-white-30 w-full bg-white border-2 border-gray-200 mt-3">
                    {/* --- Header toko ----- */}
                    <div className="flex flex-row justify-start">
                        <div className="align-top mt-2">
                            <IconLocations></IconLocations>
                        </div>
                        <div className="items-center pl-4">
                            <p className="text-base text-black-80 font-bold">Rumah Saya</p>
                            <p>Rue. Federico Garcia Lorca</p>
                            <p>Saint Martin d-Heres</p>
                            <p>Grenoble</p>
                            <p>38100</p>
                        </div>
                    </div>
                </div>
                </>
            ) : ('')}

            <div className="relative items-center py-3 text-sm transition-all duration-200 rounded-md cursor-pointer text-black-80 border-white-30 w-full max-w-[444px] bg-gray-100 mt-3">
                {/* --- Header toko ----- */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center pl-4">
                        <p className="text-base text-black-80 font-bold">Butuh Bantuan?</p>
                    </div>
                </div>

                {/* --- Body toko ----- */}
                <div className="mt-2 p-3 border-t-2 flex flex-col gap-y-3 justify-start">
                    <div className="flex items-center pl-4 justify-between">
                        <div className="flex flex-wrap gap-x-2">
                            <IconBantuanBubble></IconBantuanBubble>
                            <p className="text-base text-black-80 font-bold">Hubungi Penjual</p>
                        </div>
                        <IconArrowRight></IconArrowRight>
                    </div>
                    <div className="flex items-center pl-4 justify-between">
                        <div className="flex flex-wrap gap-x-2">
                            <IconBantuanAsk></IconBantuanAsk>
                            <p className="text-base text-black-80 font-bold">Pusat Bantuan</p>
                        </div>
                        <IconArrowRight></IconArrowRight>
                    </div>
                </div>
            </div>

            <div className="my-3">
                <Link href={`/transaksi/riwayat?q=dibatalkan`}>
                    <button className="rounded-lg w-full p-4 text-white text-center font-semibold bg-[#51D7B1] cursor-pointer">
                        Lihat Transaksi
                    </button>
                </Link>
            </div>
        </div>
      </>
    );
  };
  
  export default RincianPesanan;


