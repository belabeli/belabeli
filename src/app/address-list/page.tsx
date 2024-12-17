"use client";
import { createContext, useState, ReactNode } from "react";
import LayoutUtama from "../layouts/layout-utama";
import Header from "../layouts/header";
import { addressData } from "../pesanan/page";
import Link from "next/link";
import Alamat from "../components/pembayaran/alamat";
import ActionPage from "./actionPage";

// Define type for AppContext
interface AppContextType {
  isTrigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create AppContext with initial value null or the expected type
export const AppContext = createContext<AppContextType | null>(null);

export default function AddressList() {
  const [isTrigger, setTrigger] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        isTrigger,
        setTrigger,
      }}
    >
      <ActionPage />
    </AppContext.Provider>
  );
}
