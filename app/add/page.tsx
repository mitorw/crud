"use client";
import React, { useState } from "react";
import { checkData } from "../models/mahasiswa";

export default function AddPage() {
  // Buat hook (useState)
  const [getNPM, setNPM] = useState("");
  const [getNama, setNama] = useState("");
  const [getProdi, setProdi] = useState("");

  // buat hook (use state)
  // untuk respon hasil fungsi "checkData"
  const [getValue, setValue] = useState({});

  // buat fungsi untuk respon checkData
  const checkNPM = async (npm:string) =>{
    setValue(await checkData(npm))
  }

  // Buat fungsi simpan data
  const setSaveData = () => {
    // Ternary Operator
    getNPM === "" || getNama === "" || getProdi === ""
      ? alert("Lengkapi Seluruh Data!")
      : [( Object.values(getValue).length ==0)
      ?alert("Simpan")
      :alert("Gagal Simpan")
      ]
  };

  return (
    <>
      <title>Tambah Data Mahasiswa</title>
      <div className="grid grid-cols-10 gap-4 items-center">
        <div className="col-start-1">NPM</div>
        <div className="col-span-4">
          <input
            type="text"
            placeholder="Isi NPM"
            className="input input-bordered input-secondary w-full"
            onChange={(e) => {
              setNPM(e.target.value); // Mengatur state untuk NPM
              checkNPM(e.target.value); // Mengecek validitas NPM
              }}
            // Mengatur state untuk NPM
          />
        </div>
        <div className="col-start-1">Nama</div>
        <div className="col-span-4">
          <input
            type="text"
            placeholder="Isi Nama Mahasiswa"
            className="input input-bordered input-secondary w-full"
            onChange={(e) => setNama(e.target.value)} // Mengatur state untuk Nama
          />
        </div>
        <div className="col-start-1">Program Studi</div>
        <div className="col-span-4">
          <select
            defaultValue={""}
            className="select select-success w-full"
            onChange={(e) => setProdi(e.target.value)} // Mengatur state untuk Prodi
          >
            <option value={""} disabled>
              Pilih Program Studi Mahasiswa
            </option>
            <option value={"Informatika"}>Informatika</option>
            <option value={"Sistem Informasi"}>Sistem Informasi</option>
            <option value={"Teknologi Informasi"}>Teknologi Informasi</option>
            <option value={"Teknik Komputer"}>Teknik Komputer</option>
          </select>
        </div>
        <div className="col-start-2 col-span-4">
          <button
            className="btn btn-success mr-5 w-28"
            onClick={setSaveData}
          >
            Simpan
          </button>
          <button className="btn btn-warning ml-5 w-28">Batal</button>
        </div>
      </div>
</>
);
}