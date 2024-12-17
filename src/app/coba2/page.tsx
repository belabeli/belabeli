"use client";
import getCart from "@/api/cart/getCart";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [dataKeranjang, setDataKeranjang] = useState<any[]>([]);
  const [loadingKeranjang, setLoadingKeranjang] = useState<boolean>(false);
  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([]);
  const [activeCartId, setActiveCartId] = useState<number | null>(null);
  const [totalHarga, setTotalHarga] = useState<number>(0); // State untuk total harga

  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      setLoadingKeranjang(true);
      try {
        const response = await getCart();
        console.log(response);

        if (response.error?.code === 401) {
          router.push("/authentikasi/login");
        }

        setDataKeranjang(response.data?.data || []);
        setLoadingKeranjang(false);
      } catch (err: any) {
        console.log(err.message || err.response);
      }
    }

    fetchData();
  }, []);

  const handleSelectProduct = (
    cartId: number,
    productId: number,
    price: number
  ) => {
    if (activeCartId === null) {
      setActiveCartId(cartId);
      setSelectedProductIds([productId]);
      setTotalHarga(price); // Set harga awal jika produk pertama dipilih
      return;
    }

    if (activeCartId !== cartId) return;

    const isAlreadySelected = selectedProductIds.includes(productId);
    const newSelectedProducts = isAlreadySelected
      ? selectedProductIds.filter((id) => id !== productId)
      : [...selectedProductIds, productId];

    if (newSelectedProducts.length === 0) {
      setActiveCartId(null);
      setTotalHarga(0); // Reset harga jika semua produk tidak dipilih
    } else {
      setTotalHarga((prevTotal) =>
        isAlreadySelected ? prevTotal - price : prevTotal + price
      );
    }

    setSelectedProductIds(newSelectedProducts);
  };

  return (
    <>
      <div className="border-2 p-6 space-y-6">
        {dataKeranjang?.map?.((data: any, index: number) => (
          <div key={index} className="text-[12px]">
            {data.type === "basic" ? (
              <>
                <p>{data.type}</p>
                <div key={data.id} className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold">
                    {data.merchant.name}
                  </h3>
                  <div className="space-y-4">
                    {data.cart_item?.map?.((product: any) => (
                      <div
                        key={product.id}
                        className="flex items-center space-x-4"
                      >
                        <label
                          className={`relative w-5 h-5 cursor-pointer ${
                            activeCartId !== null && activeCartId !== data.id
                              ? "opacity-25 cursor-not-allowed"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={selectedProductIds.includes(product.id)}
                            onChange={() =>
                              handleSelectProduct(
                                data.id,
                                product.id,
                                Number(product.product_stock.price_sell)
                              )
                            }
                            disabled={
                              activeCartId !== null && activeCartId !== data.id
                            }
                          />
                          <div
                            className={`w-full h-full rounded-full border-2 ${
                              selectedProductIds.includes(product.id)
                                ? "bg-teal-500 border-teal-500"
                                : "bg-white border-gray-300"
                            } flex items-center justify-center transition`}
                          >
                            {selectedProductIds.includes(product.id) && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                        </label>
                        <img
                          src="/shoe-placeholder.png"
                          alt={product.data_product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p>{product.data_product.name}</p>
                          <div className="text-sm text-gray-500 flex gap-2">
                            <p>{product.variation_item[0]?.name}</p>
                            <p>{product.variation_item[1]?.name}</p>
                          </div>
                          <p>Rp {Number(product.product_stock.price_sell)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
      <div className="p-6 space-y-6 border-red-400 border-2">
        <div className="border-t pt-4">
          <p>Produk dipilih: {selectedProductIds.length}</p>
          <p>Total Harga: Rp {totalHarga.toLocaleString()}</p>
          <button
            className={`mt-4 px-6 py-2 rounded-lg ${
              selectedProductIds.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            disabled={selectedProductIds.length === 0}
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
