"use client";

import { faTrashCan } from '@/node_modules/@fortawesome/free-solid-svg-icons/index';
import { faPencil } from '@/node_modules/@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '@/node_modules/@fortawesome/react-fontawesome/index';
import Link from '@/node_modules/next/link';
import React, { useEffect, useState } from 'react'
import { getData, updateDataStatus } from './models/mahasiswa';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';




//buat fungsi untuk dialog hapus
function setDelete(){
  alert ("hapus data")
}



export default function RootPage() {
  // Buat Hook 
  // Hook dengan "use state", kurung kurawal karena tipe data object ({Second})
  const [getValue, setValue] = useState({});

  // Buat fungsi fetch data
  async function fetchData() {
    setValue(await getData());
  }

  async function handleDelete(npm: string) {
    const confirmDelete = confirm("Apakah Anda yakin ingin menghapus data ini?");
    if (confirmDelete) {
      const result = await updateDataStatus(npm, "N");
      if (result.success) {
        alert("Data berhasil dihapus.");
        fetchData(); // Refresh data
      } else {
        alert("Terjadi kesalahan saat menghapus data.");
      }
    }
  }

  // Hook dengan "use effect"
  useEffect(() => {
    // Panggil fungsi fetchData()
    setValue (fetchData())

  }, [])
  

// Jika menggunakan findUnique
// const mahasiswa = await prisma.tb_mahasiswa.findUnique({
//   where: {
//     id: 1,
//   },
// })
  
  return (
  <>
  <title>View Data Mahasiswa</title>
  <nav className="mb-5 flex justify-end">
  <Link href={"/add"} className="btn btn-info">
      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      Tambah Data Mahasiswa</Link>
  </nav>
    {/* tampilkan data mahasiswa */}
    <table className='w-full '>
      <thead>
        <tr className="bg-slate-500 h-12 ">
          <th className="w-10% border  border-amber-400">Aksi</th>
          <th className="w-10% border  border-amber-400">NPM</th>
          <th className="w-1/2 border  border-amber-400">Nama</th>
          <th className="w-30% border  border-amber-400">Prodi</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(getValue).map((data: any, index: number) => (
          <tr key={data.npm || index}>
            <td className="w-10% border  border-amber-400 p-2.5 text-center">
            {/* icon edit */}
            <Link href={"/"} className="bg-slate-700 text-white py-1.5 px-2.5 rounded-md mr-1 text-sm" title="Ubah Data">
            <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
            </Link>

            {/* icon delete */}
            <Link href={"/"} className="bg-blue-700 text-white py-1.5 px-2.5 rounded-md ml-1 text-sm" title="Hapus Data">
            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </Link>

            
            
            </td>
            <td className="w-10% border  border-amber-400 px-2.5 text-center">{data.npm}</td>
            <td className="w-10% border  border-amber-400 px-2.5 text-justify">{data.nama}</td>
            <td className="w-10% border  border-amber-400 px-2.5 text-center">{data.prodi}</td>
          </tr>
        ))}
      </tbody>
    </table>




    {/* Menapilkan findUnique */}
    {/* {mahasiswa?.nama} */}
    </>
)
}

