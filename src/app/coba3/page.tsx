"use client";

import React, { useMemo } from "react";

const ExampleComponent = () => {
  // Data dan variabel lainnya
  const dataBuyProduct = [{ price_negosiasi: 2000 }, { price_negosiasi: 0 }]; // Contoh data
  const totalHargaPembelian = 800000; // Harga awal
  const totalPotonganHargaNego = 20000; // Potongan harga

  // Refactor logika ke dalam satu variabel
  const total_harga_pembelian = useMemo(() => {
    return dataBuyProduct[0]?.price_negosiasi !== 0 &&
      dataBuyProduct[0]?.price_negosiasi !== null &&
      dataBuyProduct[0]?.price_negosiasi !== undefined
      ? totalHargaPembelian - totalPotonganHargaNego
      : totalHargaPembelian;
  }, [dataBuyProduct, totalHargaPembelian, totalPotonganHargaNego]);

  return (
    <div>
      <h1>Total Harga Pembelian</h1>
      <p>{total_harga_pembelian}</p>
    </div>
  );
};

export default ExampleComponent;
