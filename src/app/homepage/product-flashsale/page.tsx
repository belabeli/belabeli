"use client";

import React from "react";

interface ProductFlashsaleProps {
  imageUrl: any;
  productName: string;
  discount: any;
  price: number | string;
}

const ProductFlashsale = ({
  imageUrl,
  productName,
  discount,
  price,
}: ProductFlashsaleProps) => {
  return (
    <div className="w-[122px] h-auto">
      {/* Container Gambar dan Label Diskon */}
      <div className="relative bg-white rounded-lg shadow-md">
        {/* Gambar Produk */}
        <img
          src={imageUrl}
          alt={productName}
          className="w-[122px] h-[97px] object-cover rounded-lg"
        />

        {/* Label Diskon */}
        <div
          className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded"
          style={{
            textAlign: "center",
            color: "#FFF",
            fontSize: 8,
            fontFamily: "Nunito",
            fontWeight: 700,
            lineHeight: "10px",
            wordWrap: "break-word",
          }}
        >
          {discount}
        </div>
      </div>

      {/* Deskripsi Produk (di luar border gambar) */}
      <div className="p-2 text-center">
        <h3
          style={{
            textAlign: "center",
            color: "#000",
            fontSize: 10,
            fontFamily: "Nunito",
            fontWeight: 700,
            lineHeight: "20px",
            wordWrap: "break-word",
          }}
        >
          {productName}
        </h3>
        <p
          style={{
            margin: 5,
            textAlign: "center",
            color: "#000",
            fontSize: 12,
            fontFamily: "Nunito",
            fontWeight: 700,
            lineHeight: "10px",
            wordWrap: "break-word",
          }}
        >
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductFlashsale;
