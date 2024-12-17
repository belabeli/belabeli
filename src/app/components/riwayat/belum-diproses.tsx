"use client";

import Link from "next/link";
import IconLocations from "../icon/location";
import IconSuperSeller from "../icon/super-seller";
import IconToko from "../icon/toko";
import IconWarna from "../icon/warna";
import IconHistory from "../icon/history";
import { useState } from "react";

const BelumDiproses = () => {

  return (
  <>
    {/* --- Card toko status : belum diproses----- */}
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
                <button className="h-6 w-24 rounded-md border-2 border-[#EE443F] bg-[#FCDAD9] text-[#EE443F] text-[10px] font-bold">Belum Diproses</button>
            </div>
        </div>
        </Link>

        {/* --- Body toko ----- */}
        <div className="mt-2 p-3 border-t-2 flex justify-start gap-3">
            <div className="w-2/6"> 
                <img className="object-cover w-full h-[100px] rounded-md" src="/image/image.png"></img>
            </div>
            <div className="w-4/6"> 
                <Link href={'/transaksi/detail/89912891?q=belum-diproses'}>
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
                    <Link href={'/transaksi/batalkan/9812919'} className="w-full">
                        <button type="button" className="bg-[#EE443F] text-white font-semibold py-2 px-2 rounded-r-lg w-full text-[12px] border-l-4 border-white">
                            Batalkan
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    {/* --- End card toko status : belum diproses --- */}
  </>
  );
};

export default BelumDiproses;
