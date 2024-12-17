"use client"
import Link from "next/link";
import Header from "@/app/layouts/header";
import React, { useState, useEffect } from 'react';
import IconToko from "@/app/components/icon/toko";
import IconSuperSeller from "@/app/components/icon/super-seller";
import IconLocations from "@/app/components/icon/location";
import IconWarna from "@/app/components/icon/warna";
import { useParams, useSearchParams } from "next/navigation";
import DetailDiproses from "@/app/components/riwayat/detail/diproses";
import DetailBelumDiproses from "@/app/components/riwayat/detail/belum-diproses";
import DetailSelesai from "@/app/components/riwayat/detail/selesai";
import DetailDibatalkan from "@/app/components/riwayat/detail/dibatalkan";
import DetailPengembalianRetur from "@/app/components/riwayat/detail/pengembalian-retur";
import DetailPengembalianRefund from "@/app/components/riwayat/detail/pengembalian-refund";
import Bantuan from "@/app/components/riwayat/bantuan";
import IconUser from "@/app/components/icon/user";

const DetailPesanan = () => {

    const searchParams = useSearchParams();
    const q = searchParams.get('q');
    
    let { detail } = useParams();

    if (Array.isArray(detail)) {
        detail = detail[0]; // If `toko` is an array, use the first element
      }

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
        <Header title="Rincian Pesanan" children={undefined} />
        <div className="px-4 font-nunito absolute py-20 items-center w-[400px] left-1/2 -translate-x-1/2">
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

            {q === "belum-diproses" ? (
                <DetailBelumDiproses></DetailBelumDiproses>
            ) : ('')}

            {q === "diproses" ? (
                <DetailDiproses></DetailDiproses>
            ) : ('')}

            {q === "selesai" ? (
                <DetailSelesai></DetailSelesai>
            ) : ('')}

            {q === "dibatalkan" ? (
                <DetailDibatalkan></DetailDibatalkan>
            ) : ('')}

            {q === "pengembalian-retur" ? (
                <DetailPengembalianRetur></DetailPengembalianRetur>
            ) : ('')}

            {q === "pengembalian-refund" ? (
                <DetailPengembalianRefund></DetailPengembalianRefund>
            ) : ('')}
            
            {q !== "pengembalian-retur" ? (
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

            {q === "pengembalian-retur" ? (
                <>
                <div className="flex items-center pl-4 my-4">
                    <p className="text-base text-black-80 font-bold">Dana Dikembalikan ke-</p>
                </div>

                <div className="relative items-center p-4 text-sm transition-all duration-200 rounded-lg cursor-pointer text-black-80 border-white-30 w-full bg-white border-2 border-gray-200 mt-3">
                    <div className="flex flex-row justify-start">
                        <div className="align-top mt-2">
                            <IconUser></IconUser>
                        </div>
                        <div className="items-center pl-4">
                            <p className="text-base text-black-80 font-bold">Fahima Choirun Nabila</p>
                            <p>134876544568765456 ( Mandiri )</p>
                        </div>
                    </div>
                </div>

                <Link href={`/transaksi/refund/${detail}/bukti-transfer`}>
                    <div className="flex cursor-pointer items-center w-full justify-end px-2 pt-4 underline">
                        <p className="font-semibold cursor-pointer text-sm text-blue-600">Lihat bukti disini</p>
                    </div>
                </Link>
                </>
            ) : ('')}

            {q === "belum-diproses" ? (
                <Bantuan komplain={false}></Bantuan>
            ) : ('')}

            {q === "diproses" ? (
                <Bantuan komplain={true}></Bantuan>
            ) : ('')}

            {q === "selesai" ? (
                <Bantuan komplain={false}></Bantuan>
            ) : ('')}

            {q === "dibatalkan" ? (
                <Bantuan komplain={false}></Bantuan>
            ) : ('')}

            {q === "pengembalian-retur" ? (
                <Bantuan komplain={false}></Bantuan>
            ) : ('')}

            {q === "pengembalian-refund" ? (
                <Bantuan komplain={false}></Bantuan>
            ) : ('')}
            
            <div className="my-3">
            {q === "diproses" ? (
                <button onClick={openModal} className="rounded-lg w-full p-4 text-white text-center font-semibold bg-[#51D7B1] cursor-pointer">
                    Pesanan Diterima
                </button>
            ) : ('')}

            {q === "belum-diproses" ? (
                <button disabled className="rounded-lg w-full p-4 text-white text-center font-semibold bg-gray-400 cursor-pointer">
                    Pesanan Diterima
                </button>
            ) : ('')}

            {q === "selesai" || q === "dibatalkan" || q === "pengembalian-retur" || q === "pengembalian-refund" ? (
                <Link href={`/product/sepatu`}>
                <button type="button" className="rounded-lg w-full p-4 text-white text-center font-semibold bg-[#51D7B1] cursor-pointer">
                    Beli Lagi
                </button>
                </Link>
            ) : ('')}
                
            </div>
        </div>

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
  
  export default DetailPesanan;


