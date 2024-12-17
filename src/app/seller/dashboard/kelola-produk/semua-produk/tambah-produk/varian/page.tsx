'use client'
import React, { useRef, useState } from 'react'
import Header from '@/app/layouts/header'
import LayoutUtama from '@/app/layouts/layout-utama'
import { useRouter } from 'next/navigation'
import { Check, CheckCircle, Plus } from 'react-bootstrap-icons';

const VarianPage = ({ numFiles }: { numFiles: number }) => {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [showUploadSection, setShowUploadSection] = useState(false) // Mengatur apakah tampilan berubah
  const [productPhotoFile, setProductPhotoFile] = useState<File | null>(null)
  const productPhotoInputRef = useRef<HTMLInputElement | null>(null)
  const [limitUpload, setLimitUpload] = useState<number>(5)
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);

  const [bgColor, setBgColor] = useState(true);
  const [appeared, setAppeared] = useState(true);
  const [items, setItems] = useState([]);

  const [bgColorSecond, setBgColorSecond] = useState(true);
  const [appearedSecond, setAppearedSecond] = useState(true);
  const [itemsSecond, setItemsSecond] = useState([]);

  const handleClick = () => {
    setBgColor(!bgColor);
    setAppeared(!appeared);

    const uploadPhotoElements = document.querySelectorAll('.upload-photo');

    if (appeared){
      uploadPhotoElements.forEach((element) => {
        element.classList.remove('block');
        element.classList.add('hidden');
      });
      
    }else{
      uploadPhotoElements.forEach((element) => {
        element.classList.remove('hidden');
        element.classList.add('block');
      });
    }
  }

  const handleClickSecond = () => {
    setBgColorSecond(!bgColorSecond);
    setAppearedSecond(!appearedSecond);

    const uploadPhotoElements = document.querySelectorAll('.upload-photo-2');

    if (appearedSecond){
      uploadPhotoElements.forEach((element) => {
        element.classList.remove('block');
        element.classList.add('hidden');
      });
      
    }else{
      uploadPhotoElements.forEach((element) => {
        element.classList.remove('hidden');
        element.classList.add('block');
      });
    }
  }

  const appendVariasiItem = () => {
    let newItem = '';
    setNum1(num1 + 1); 
    if (num1 >= 5)
    {
      alert('Maksimal input 5 item variasi')
    }else{
      if (appeared){
        newItem = {
          id: num1, // Unique identifier
          content: 
            <>
                <div className='mx-auto my-4 border border-[#A9A9A9] w-full'></div>
                <div className='flex flex-row justify-between items-center px-2'>
                    <label
                    htmlFor="namaProduk"
                    className="text-sm font-medium text-black flex px-1"
                    >
                    Variasi Item
                    </label>
                    <div className="flex">
                    <input
                        type="text"
                        id="namaProduk"
                        placeholder="Masukkan Variasi Item"
                        className={`w-[216px] h-full border rounded-md p-2 border-[#878787] text-sm focus:outline-none`}
                    />
                    </div>
                </div>
  
                <div className={`${appeared} upload-photo block flex flex-row justify-between items-center px-2 my-2`}>
                    <label
                    htmlFor="namaProduk"
                    className="text-sm font-semibold text-black flex px-1">
                    Foto Variasi
                    </label>
                    <div className=" flex justify-end py-2">
                        <button
                        className="w-[150px] text-xs bg-[#51d7b1] text-white py-2 rounded-lg"
                        onClick={() => document.getElementById('fileInput')?.click()}
                        >
                        Ganti Foto
                        </button>
                    </div>
                </div>
  
                <div className={`${appeared} upload-photo block rounded-lg p-2 flex justify-center items-center`}>
                    <div className="h-[300px] w-full border border-gray-300 bg-gray-300 rounded-lg flex justify-center items-center overflow-hidden shadow-md">
                    {selectedFile ? (
                        <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Preview"
                        className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center p-2">
                        <div
                            className="cursor-pointer flex justify-center items-center"
                            onClick={triggerFileInput}
                        >
                            <span className="text-gray-500 text-4xl flex justify-center items-center">
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M36.666 36.6665V23.3332H43.3327V36.6665H56.666V43.3332H43.3327V56.6665H36.666V43.3332H23.3327V36.6665H36.666ZM39.9994 73.3332C21.5898 73.3332 6.66602 58.4092 6.66602 39.9998C6.66602 21.5903 21.5898 6.6665 39.9994 6.6665C58.4087 6.6665 73.3327 21.5903 73.3327 39.9998C73.3327 58.4092 58.4087 73.3332 39.9994 73.3332ZM39.9994 66.6665C54.727 66.6665 66.666 54.7275 66.666 39.9998C66.666 25.2722 54.727 13.3332 39.9994 13.3332C25.2717 13.3332 13.3327 25.2722 13.3327 39.9998C13.3327 54.7275 25.2717 66.6665 39.9994 66.6665Z"
                                fill="white"
                                />
                            </svg>
                            </span>
                        </div>
  
                        {/* Input file yang tersembunyi */}
                        <input
                            type="file"
                            id="fileInput"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                        />
  
                        {/* Jika foto dipilih, tampilkan sebagai preview */}
                        {selectedFile && (
                            <div className="mt-4">
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Preview"
                                className="h-[200px] w-[200px] object-cover rounded-lg shadow-md"
                            />
                            </div>
                        )}
                        </div>
                    )}
                    </div>
                </div>
            </>
        };
      }else{
        newItem = {
          id: num1, // Unique identifier
          content: 
            <>
                <div className='mx-auto my-4 border border-[#A9A9A9] w-full'></div>
                <div className='flex flex-row justify-between items-center px-2'>
                    <label
                    htmlFor="namaProduk"
                    className="text-sm font-medium text-black flex px-1"
                    >
                    Variasi Item
                    </label>
                    <div className="flex">
                    <input
                        type="text"
                        id="namaProduk"
                        placeholder="Masukkan Variasi Item"
                        className={`w-[216px] h-full border rounded-md p-2 border-[#878787] text-sm focus:outline-none`}
                    />
                    </div>
                </div>
  
                <div className={`${appeared} hidden upload-photo flex flex-row justify-between items-center px-2 my-2`}>
                    <label
                    htmlFor="namaProduk"
                    className="text-sm font-semibold text-black flex px-1">
                    Foto Variasi
                    </label>
                    <div className=" flex justify-end py-2">
                        <button
                        className="w-[150px] text-xs bg-[#51d7b1] text-white py-2 rounded-lg"
                        onClick={() => document.getElementById('fileInput')?.click()}
                        >
                        Ganti Foto
                        </button>
                    </div>
                </div>
  
                <div className={`${appeared} hidden upload-photo rounded-lg p-2 flex justify-center items-center`}>
                    <div className="h-[300px] w-full border border-gray-300 bg-gray-300 rounded-lg flex justify-center items-center overflow-hidden shadow-md">
                    {selectedFile ? (
                        <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Preview"
                        className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center p-2">
                        <div
                            className="cursor-pointer flex justify-center items-center"
                            onClick={triggerFileInput}
                        >
                            <span className="text-gray-500 text-4xl flex justify-center items-center">
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M36.666 36.6665V23.3332H43.3327V36.6665H56.666V43.3332H43.3327V56.6665H36.666V43.3332H23.3327V36.6665H36.666ZM39.9994 73.3332C21.5898 73.3332 6.66602 58.4092 6.66602 39.9998C6.66602 21.5903 21.5898 6.6665 39.9994 6.6665C58.4087 6.6665 73.3327 21.5903 73.3327 39.9998C73.3327 58.4092 58.4087 73.3332 39.9994 73.3332ZM39.9994 66.6665C54.727 66.6665 66.666 54.7275 66.666 39.9998C66.666 25.2722 54.727 13.3332 39.9994 13.3332C25.2717 13.3332 13.3327 25.2722 13.3327 39.9998C13.3327 54.7275 25.2717 66.6665 39.9994 66.6665Z"
                                fill="white"
                                />
                            </svg>
                            </span>
                        </div>
  
                        {/* Input file yang tersembunyi */}
                        <input
                            type="file"
                            id="fileInput"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                        />
  
                        {/* Jika foto dipilih, tampilkan sebagai preview */}
                        {selectedFile && (
                            <div className="mt-4">
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Preview"
                                className="h-[200px] w-[200px] object-cover rounded-lg shadow-md"
                            />
                            </div>
                        )}
                        </div>
                    )}
                    </div>
                </div>
            </>
        };
      }
    }
    setItems([...items, newItem]); 
    console.log(num1)

  };

  const appendVariasiItemSecond = () => {
    let newItem2 = ''
    setNum2(num2 + 1); 
    if (num2 >= 5){
      alert('Maksimal input 5 item variasi')
    }else{
      if (appearedSecond){
        newItem2 = {
          id: num2, // Unique identifier
          content: 
            <>
                <div className='mx-auto my-4 border border-[#A9A9A9] w-full'></div>
                <div className='flex flex-row justify-between items-center px-2'>
                    <label
                    htmlFor="namaProduk"
                    className="text-sm font-medium text-black flex px-1"
                    >
                    Variasi Item
                    </label>
                    <div className="flex">
                    <input
                        type="text"
                        id="namaProduk"
                        placeholder="Masukkan Variasi Item"
                        className={`w-[216px] h-full border rounded-md p-2 border-[#878787] text-sm focus:outline-none`}
                    />
                    </div>
                </div>
  
                <div className={`${appearedSecond} upload-photo-2 block flex flex-row justify-between items-center px-2 my-2`}>
                    <label
                    htmlFor="namaProduk"
                    className="text-sm font-semibold text-black flex px-1">
                    Foto Variasi
                    </label>
                    <div className=" flex justify-end py-2">
                        <button
                        className="w-[150px] text-xs bg-[#51d7b1] text-white py-2 rounded-lg"
                        onClick={() => document.getElementById('fileInput')?.click()}
                        >
                        Ganti Foto
                        </button>
                    </div>
                </div>
  
                <div className={`${appearedSecond} upload-photo-2 block rounded-lg p-2 flex justify-center items-center`}>
                    <div className="h-[300px] w-full border border-gray-300 bg-gray-300 rounded-lg flex justify-center items-center overflow-hidden shadow-md">
                    {selectedFile ? (
                        <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Preview"
                        className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center p-2">
                        <div
                            className="cursor-pointer flex justify-center items-center"
                            onClick={triggerFileInput}
                        >
                            <span className="text-gray-500 text-4xl flex justify-center items-center">
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M36.666 36.6665V23.3332H43.3327V36.6665H56.666V43.3332H43.3327V56.6665H36.666V43.3332H23.3327V36.6665H36.666ZM39.9994 73.3332C21.5898 73.3332 6.66602 58.4092 6.66602 39.9998C6.66602 21.5903 21.5898 6.6665 39.9994 6.6665C58.4087 6.6665 73.3327 21.5903 73.3327 39.9998C73.3327 58.4092 58.4087 73.3332 39.9994 73.3332ZM39.9994 66.6665C54.727 66.6665 66.666 54.7275 66.666 39.9998C66.666 25.2722 54.727 13.3332 39.9994 13.3332C25.2717 13.3332 13.3327 25.2722 13.3327 39.9998C13.3327 54.7275 25.2717 66.6665 39.9994 66.6665Z"
                                fill="white"
                                />
                            </svg>
                            </span>
                        </div>
  
                        {/* Input file yang tersembunyi */}
                        <input
                            type="file"
                            id="fileInput"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                        />
  
                        {/* Jika foto dipilih, tampilkan sebagai preview */}
                        {selectedFile && (
                            <div className="mt-4">
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Preview"
                                className="h-[200px] w-[200px] object-cover rounded-lg shadow-md"
                            />
                            </div>
                        )}
                        </div>
                    )}
                    </div>
                </div>
            </>
        };
      }else{
        newItem2 = {
          id: num2, // Unique identifier
          content: 
            <>
                <div className='mx-auto my-4 border border-[#A9A9A9] w-full'></div>
                <div className='flex flex-row justify-between items-center px-2'>
                    <label
                    htmlFor="namaProduk"
                    className="text-sm font-medium text-black flex px-1"
                    >
                    Variasi Item
                    </label>
                    <div className="flex">
                    <input
                        type="text"
                        id="namaProduk"
                        placeholder="Masukkan Variasi Item"
                        className={`w-[216px] h-full border rounded-md p-2 border-[#878787] text-sm focus:outline-none`}
                    />
                    </div>
                </div>
  
                <div className={`${appearedSecond} upload-photo-2 hidden flex flex-row justify-between items-center px-2 my-2`}>
                    <label
                    htmlFor="namaProduk"
                    className="text-sm font-semibold text-black flex px-1">
                    Foto Variasi
                    </label>
                    <div className=" flex justify-end py-2">
                        <button
                        className="w-[150px] text-xs bg-[#51d7b1] text-white py-2 rounded-lg"
                        onClick={() => document.getElementById('fileInput')?.click()}
                        >
                        Ganti Foto
                        </button>
                    </div>
                </div>
  
                <div className={`${appearedSecond} upload-photo-2 hidden rounded-lg p-2 flex justify-center items-center`}>
                    <div className="h-[300px] w-full border border-gray-300 bg-gray-300 rounded-lg flex justify-center items-center overflow-hidden shadow-md">
                    {selectedFile ? (
                        <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Preview"
                        className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center p-2">
                        <div
                            className="cursor-pointer flex justify-center items-center"
                            onClick={triggerFileInput}
                        >
                            <span className="text-gray-500 text-4xl flex justify-center items-center">
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M36.666 36.6665V23.3332H43.3327V36.6665H56.666V43.3332H43.3327V56.6665H36.666V43.3332H23.3327V36.6665H36.666ZM39.9994 73.3332C21.5898 73.3332 6.66602 58.4092 6.66602 39.9998C6.66602 21.5903 21.5898 6.6665 39.9994 6.6665C58.4087 6.6665 73.3327 21.5903 73.3327 39.9998C73.3327 58.4092 58.4087 73.3332 39.9994 73.3332ZM39.9994 66.6665C54.727 66.6665 66.666 54.7275 66.666 39.9998C66.666 25.2722 54.727 13.3332 39.9994 13.3332C25.2717 13.3332 13.3327 25.2722 13.3327 39.9998C13.3327 54.7275 25.2717 66.6665 39.9994 66.6665Z"
                                fill="white"
                                />
                            </svg>
                            </span>
                        </div>
  
                        {/* Input file yang tersembunyi */}
                        <input
                            type="file"
                            id="fileInput"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                        />
  
                        {/* Jika foto dipilih, tampilkan sebagai preview */}
                        {selectedFile && (
                            <div className="mt-4">
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Preview"
                                className="h-[200px] w-[200px] object-cover rounded-lg shadow-md"
                            />
                            </div>
                        )}
                        </div>
                    )}
                    </div>
                </div>
            </>
        };
      }
    }
    setItemsSecond([...itemsSecond, newItem2]); 
  };

  // Fungsi untuk menangani perubahan file
  const handleProductPhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      setProductPhotoFile(file)
    }
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const handleButtonClick = () => {
    setLimitUpload((prev) => (prev > 0 ? prev - 1 : prev))
  }

  return (
    <LayoutUtama>
      <Header title="Varian" children={undefined} />
      <div className="container mx-auto px-4 pt-24 pb-8 font-nunito">
        <div className="bg-red-100 text-red-600 text-xs p-3 rounded-md mb-6 flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00065 1.16683C10.2223 1.16683 12.834 3.77853 12.834 7.00016C12.834 10.2218 10.2223 12.8335 7.00065 12.8335C3.77902 12.8335 1.16732 10.2218 1.16732 7.00016C1.16732 3.77853 3.77902 1.16683 7.00065 1.16683ZM7.58399 5.25016L7.58399 4.0835L6.41732 4.0835L6.41732 5.25016L7.58399 5.25016ZM7.58398 9.91683L7.58398 6.41683L6.41732 6.41683L6.41732 9.91683L7.58398 9.91683Z"
              fill="red"
            />
          </svg>
          Batas maksimal tabel isian adalah dua dan setiap tabel maksimal lima isian
        </div>
        <div className="border-2 border-gray-300 bg-[#F7F7F9] rounded-lg shadow-md p-3">
          {/* Satu kotak div */}
          <div>
            <div className=" flex justify-end py-2">
                  <button
                  className={`w-[150px] text-xs ${bgColor ?  `bg-[#51d7b1] text-white` : `border border-[#545454] text-black bg-white`} py-2 rounded-lg flex flex-wrap justify-center items-center gap-2`}
                  onClick={handleClick}
                  >
                  Tambahkan Gambar <CheckCircle />
                  </button>
            </div>

            <div className='flex flex-row justify-between items-center px-2'>
              <label
                htmlFor="namaProduk"
                className="text-sm font-medium text-black flex px-1"
              >
                Nama Variasi
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="namaProduk"
                  placeholder="Masukkan Nama Variasi"
                  className={`w-[216px] h-full border rounded-md p-2 border-[#878787] text-sm focus:outline-none`}
                />
              </div>
            </div>
              {/* Ini border */}
            <div className='mx-auto my-4 border border-[#A9A9A9] w-full'></div>

            <div className='flex flex-row justify-between items-center px-2'>
              <label
                htmlFor="namaProduk"
                className="text-sm font-medium text-black flex px-1"
              >
                Variasi Item
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="namaProduk"
                  placeholder="Masukkan Variasi Item"
                  className={`w-[216px] h-full border rounded-md p-2 border-[#878787] text-sm focus:outline-none`}
                />
              </div>
            </div>

            {/* Bagian upload foto */}
          
            <div className={`upload-photo block`}>
                <div className='flex flex-row justify-between items-center px-2 my-2'>
                    <label
                    htmlFor="namaProduk"
                    className="text-sm font-semibold text-black flex px-1">
                    Foto Variasi
                    </label>
                    <div className=" flex justify-end py-2">
                        <button
                        className="w-[150px] text-xs bg-[#51d7b1] text-white py-2 rounded-lg"
                        onClick={() => document.getElementById('fileInput')?.click()}
                        >
                        Ganti Foto
                        </button>
                    </div>
                </div>

                <div className="rounded-lg p-2 flex justify-center items-center">
                    <div className="h-[300px] w-full border border-gray-300 bg-gray-300 rounded-lg flex justify-center items-center overflow-hidden shadow-md">
                    {selectedFile ? (
                        <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Preview"
                        className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center p-2">
                        <div
                            className="cursor-pointer flex justify-center items-center"
                            onClick={triggerFileInput}
                        >
                            <span className="text-gray-500 text-4xl flex justify-center items-center">
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M36.666 36.6665V23.3332H43.3327V36.6665H56.666V43.3332H43.3327V56.6665H36.666V43.3332H23.3327V36.6665H36.666ZM39.9994 73.3332C21.5898 73.3332 6.66602 58.4092 6.66602 39.9998C6.66602 21.5903 21.5898 6.6665 39.9994 6.6665C58.4087 6.6665 73.3327 21.5903 73.3327 39.9998C73.3327 58.4092 58.4087 73.3332 39.9994 73.3332ZM39.9994 66.6665C54.727 66.6665 66.666 54.7275 66.666 39.9998C66.666 25.2722 54.727 13.3332 39.9994 13.3332C25.2717 13.3332 13.3327 25.2722 13.3327 39.9998C13.3327 54.7275 25.2717 66.6665 39.9994 66.6665Z"
                                fill="white"
                                />
                            </svg>
                            </span>
                        </div>

                        <input
                            type="file"
                            id="fileInput"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                        />

                        {selectedFile && (
                            <div className="mt-4">
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Preview"
                                className="h-[200px] w-[200px] object-cover rounded-lg shadow-md"
                            />
                            </div>
                        )}
                        </div>
                    )}
                    </div>
                </div>
            </div>
            
            <div id="appendDiv">
                {items.map((item) => (
                    <div key={item.id}>
                        {item.content}
                    </div>
                ))}
            </div>

            <div className="mt-4 px-2" />
              <button onClick={appendVariasiItem} className="w-full flex flex-wrap justify-center bg-[#51d7b1] hover:bg-emerald-600 text-white font-semibold p-2 rounded-md focus:ring-2 focus:ring-emerald-300 focus:outline-none disabled:bg-gray-300 disabled:cursor-not-allowed">
                  <Plus size={20}></Plus>
              </button>
          </div>
        </div>
      
        <div className="border-2 border-gray-300 bg-[#F7F7F9] rounded-lg shadow-md p-3 my-4">
          {/* Satu kotak div */}
          <div>
            <div className=" flex justify-end py-2">
                  <button
                  className={`w-[150px] text-xs ${bgColorSecond ?  `bg-[#51d7b1] text-white` : `border border-[#545454] text-black bg-white`} py-2 rounded-lg flex flex-wrap justify-center items-center gap-2`}
                  onClick={handleClickSecond}
                  >
                  Tambahkan Gambar <CheckCircle />
                  </button>
            </div>

            <div className='flex flex-row justify-between items-center px-2'>
              <label
                htmlFor="namaProduk"
                className="text-sm font-medium text-black flex px-1"
              >
                Nama Variasi
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="namaProduk"
                  placeholder="Masukkan Nama Variasi"
                  className={`w-[216px] h-full border rounded-md p-2 border-[#878787] text-sm focus:outline-none`}
                />
              </div>
            </div>
              {/* Ini border */}
            <div className='mx-auto my-4 border border-[#A9A9A9] w-full'></div>

            <div className='flex flex-row justify-between items-center px-2'>
              <label
                htmlFor="namaProduk"
                className="text-sm font-medium text-black flex px-1"
              >
                Variasi Item
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="namaProduk"
                  placeholder="Masukkan Variasi Item"
                  className={`w-[216px] h-full border rounded-md p-2 border-[#878787] text-sm focus:outline-none`}
                />
              </div>
            </div>

            {/* Bagian upload foto */}
          
            <div className={`upload-photo-2 block`}>
                <div className='flex flex-row justify-between items-center px-2 my-2'>
                    <label
                    htmlFor="namaProduk"
                    className="text-sm font-semibold text-black flex px-1">
                    Foto Variasi
                    </label>
                    <div className=" flex justify-end py-2">
                        <button
                        className="w-[150px] text-xs bg-[#51d7b1] text-white py-2 rounded-lg"
                        onClick={() => document.getElementById('fileInput')?.click()}
                        >
                        Ganti Foto
                        </button>
                    </div>
                </div>

                <div className="rounded-lg p-2 flex justify-center items-center">
                    <div className="h-[300px] w-full border border-gray-300 bg-gray-300 rounded-lg flex justify-center items-center overflow-hidden shadow-md">
                    {selectedFile ? (
                        <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Preview"
                        className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center p-2">
                        <div
                            className="cursor-pointer flex justify-center items-center"
                            onClick={triggerFileInput}
                        >
                            <span className="text-gray-500 text-4xl flex justify-center items-center">
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M36.666 36.6665V23.3332H43.3327V36.6665H56.666V43.3332H43.3327V56.6665H36.666V43.3332H23.3327V36.6665H36.666ZM39.9994 73.3332C21.5898 73.3332 6.66602 58.4092 6.66602 39.9998C6.66602 21.5903 21.5898 6.6665 39.9994 6.6665C58.4087 6.6665 73.3327 21.5903 73.3327 39.9998C73.3327 58.4092 58.4087 73.3332 39.9994 73.3332ZM39.9994 66.6665C54.727 66.6665 66.666 54.7275 66.666 39.9998C66.666 25.2722 54.727 13.3332 39.9994 13.3332C25.2717 13.3332 13.3327 25.2722 13.3327 39.9998C13.3327 54.7275 25.2717 66.6665 39.9994 66.6665Z"
                                fill="white"
                                />
                            </svg>
                            </span>
                        </div>

                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                        />

                        {selectedFile && (
                            <div className="mt-4">
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Preview"
                                className="h-[200px] w-[200px] object-cover rounded-lg shadow-md"
                            />
                            </div>
                        )}
                        </div>
                    )}
                    </div>
                </div>
            </div>
            
            <div id="appendDiv">
                {itemsSecond.map((item) => (
                    <div key={item.id}>
                        {item.content}
                    </div>
                ))}
            </div>

            <div className="mt-4 px-2" />
              <button onClick={appendVariasiItemSecond} className="w-full flex flex-wrap justify-center bg-[#51d7b1] hover:bg-emerald-600 text-white font-semibold p-2 rounded-md focus:ring-2 focus:ring-emerald-300 focus:outline-none disabled:bg-gray-300 disabled:cursor-not-allowed">
                  <Plus size={20}></Plus>
              </button>
          </div>
        </div>

        <button
          onClick={() =>
            router.push(
              '/seller/dashboard/kelola-produk/semua-produk/tambah-produk',
            )
          }
          className={`w-full max-w-[400px] mx-auto mt-6 py-3 text-white rounded-lg bg-[#51d7b1] hover:bg-emerald-600`}
        >
          Simpan
        </button>
      </div>
    </LayoutUtama>
  )
}

export default VarianPage
