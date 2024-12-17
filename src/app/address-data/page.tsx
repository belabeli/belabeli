"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LayoutUtama from "../layouts/layout-utama";
import Header from "../layouts/header";
import getAddress from "@/api/address/getAddress";
const addresses = [
  {
    key: 1,
    name: "Rumah Saya",
    phone: "081234567890",
    address: "Jl. Kanjeng Sepuh No. 1",
    district: "Kecamatan Kauman",
    city: "Kabupaten Gresik",
    province: "Jawa Timur",
    postalCode: "61153",
  },
  {
    key: 2,
    name: "Rumah Saya",
    phone: "087718141331",
    address: "Jl. Duduhan No. 28 RT 1 RW 5",
    district: "Kecamatan Mijen",
    city: "Kota Semarang",
    province: "Jawa Tengah",
    postalCode: "50219",
  },
];

const FormAddress = () => {
  const [dataAlamat, setDataAlamat] = useState<any>({});
  const [loadingAlamat, setLoadingAlamat] = useState<boolean>(false);

  useEffect(() => {
    setLoadingAlamat(true);
    async function fetchData() {
      const response = await getAddress();
      setDataAlamat(response.data);

      setLoadingAlamat(false);
    }

    fetchData();
  }, []);

  console.log("data ", dataAlamat.data);

  const searchParams = useSearchParams();
  const indexAddress = Number(searchParams.get("indexAddress"));

  const idAddress = searchParams.get("addressId");

  const [selectedAddress, setSelectedAddress] = useState<any>(); // Mengatur alamat awal sebagai alamat pertama
  const router = useRouter();

  useEffect(() => {
    // Update selectedAddress ketika dataAlamat diperbarui
    if (dataAlamat?.data?.length > 0) {
      setSelectedAddress(dataAlamat.data[indexAddress]); // Mengatur alamat kedua sebagai default
    }
  }, [dataAlamat]);

  console.log(selectedAddress);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    // const formData = {
    //   name: selectedAddress.name,
    //   phone: selectedAddress.phone,
    //   province: selectedAddress.province,
    //   city: selectedAddress.city,
    //   district: selectedAddress.district,
    //   postalCode: selectedAddress.postalCode,
    //   address: selectedAddress.address,
    //   instructions: "", // Opsional, tidak digunakan dalam konteks ini
    // }

    // // Simpan data ke localStorage
    // localStorage.setItem("addressData", JSON.stringify(formData));

    // Redirect ke halaman PinLocation setelah submit berhasil
    router.push(
      `/edit-address?idAddress=${idAddress}&indexAddress=${indexAddress}`
    );
  };

  return (
    <>
      <LayoutUtama>
        <Header title="Alamat Baru" children={undefined} />
        <div className="container w-[400px] mx-auto p-4 ">
          <form
            onSubmit={handleSubmit}
            className="text-[#949494] font-nunito text-[15px] font-semibold space-y-4 mt-20"
          >
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={selectedAddress?.full_name}
              readOnly // Mengubah input menjadi hanya baca
              className="w-full p-3 border rounded-md bg-gray-200"
            />

            <input
              type="tel"
              placeholder="Nomor Telepon"
              value={selectedAddress?.no_telepon}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-200"
            />

            <input
              type="text"
              placeholder="Provinsi"
              value={selectedAddress?.province}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-200"
            />

            <input
              type="text"
              placeholder="Kota"
              value={selectedAddress?.city}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-200"
            />

            <input
              type="text"
              placeholder="Kecamatan"
              value={selectedAddress?.subdistrict}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-200"
            />

            <input
              type="text"
              placeholder="Kode Pos"
              value={selectedAddress?.postal_code}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-200"
            />

            <input
              type="text"
              placeholder="Alamat Lengkap"
              value={selectedAddress?.street}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-200"
            />

            <input
              type="text"
              placeholder="Alamat Lengkap"
              value={selectedAddress?.instructions}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-200"
            />
          </form>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white bg-emerald-400 mt-28`}
            onClick={handleSubmit} // Menggunakan handleSubmit di sini
          >
            Edit
          </button>
        </div>
      </LayoutUtama>
    </>
  );
};

export default FormAddress;
