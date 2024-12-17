"use client"
import Link from "next/link";
import Header from "../../layouts/header";
import Navigasi from "../../layouts/_navbar";
import React, { useState, useEffect, useRef  } from 'react';
import BelumDiproses from "@/app/components/riwayat/belum-diproses";
import Diproses from "@/app/components/riwayat/diproses";
import Selesai from "@/app/components/riwayat/selesai";
import Dibatalkan from "@/app/components/riwayat/dibatalkan";
import { useSearchParams } from "next/navigation";
import DikembalikanRetur from "@/app/components/riwayat/pengembalian-retur";
import DikembalikanRefund from "@/app/components/riwayat/pengembalian-refund";

const Riwayat = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const refs = useRef<(HTMLSpanElement | null)[]>([]); 
    const tabs = ['Belum Diproses', 'Diproses', 'Selesai', 'Dibatalkan', 'Pengembalian'];

    const searchParams = useSearchParams();
    const q = searchParams.get('q'); 

    useEffect(() => {
      // Scroll into view on page load
      if (refs.current[activeIndex]) {
        refs.current[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, [activeIndex]);

    useEffect(() => {
      if (q === 'belum-diproses') {
        setActiveIndex(0);
      } else if (q === 'diproses') {
        setActiveIndex(1);
      } else if (q === 'selesai') {
        setActiveIndex(2);
      } else if (q === 'dibatalkan') {
        setActiveIndex(3);
      } else if (q === 'pengembalian') {
        setActiveIndex(4);
      }
    }, [q]);
  
    const renderSlideContent = () => {
      switch (activeIndex) {
        case 0:
          return (
            <div>
                <BelumDiproses></BelumDiproses>
                <BelumDiproses></BelumDiproses>
                <BelumDiproses></BelumDiproses>
            </div>
          );
        case 1:
          return (
            <div>
                <Diproses></Diproses>
                <Diproses></Diproses>
                <Diproses></Diproses>
            </div>
          );
        case 2:
          return (
            <div>
                <Selesai></Selesai>
                <Selesai></Selesai>
            </div>
          );
        case 3:
            return (
            <div>
                <Dibatalkan></Dibatalkan>
                <Dibatalkan></Dibatalkan>
                <Dibatalkan></Dibatalkan>
            </div>
          );
        case 4:
            return (
            <div>
                <DikembalikanRetur></DikembalikanRetur>
                <DikembalikanRefund></DikembalikanRefund>
            </div>
          );
        default:
          return null;
      }
    };
  
    return (
      <>
        <Header title="Riwayat Pemesanan" children={undefined} />
        <div className="px-4 font-nunito absolute py-20 items-center w-[400px] left-1/2 -translate-x-1/2">
          {/* Swiper */}
          <div className="relative mt-[-3px] w-[400px] left-1/2 -translate-x-1/2 overflow-x-auto scrollbar-hide">
            {/* Pagination bullets */}
            <div className="flex justify-around w-fit bg-white h-14 items-center">
              {tabs.map((tab, index) => (
                <span
                  key={index}
                  ref={(el) => {
                    refs.current[index] = el; // Use type assertion to assign the element
                  }}// Assign each ref dynamically
                  className={`cursor-pointer text-sm h-14 inline-flex items-center justify-center text-center transition-colors duration-200 w-[120px] ${
                    activeIndex === index ? 'text-black font-semibold border-black border-b-4' : 'text-gray-400 font-normal border-[#CCCCCC] border-b-2'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {tab}
                </span>
              ))}
            </div>
  
            {/* Active Mark */}
            <div
              className="absolute bottom-0 bg-primary h-1 transition-all duration-200"
              style={{
                width: '120px',
              }}
            />
          </div>
  
          {/* Slide Content */}
          <div className="swiper-slide-content mt-4 bg-white">
            {renderSlideContent()}
          </div>
        </div>
      </>
    );
  };
  
  export default Riwayat;


