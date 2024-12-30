"use server";

import { PrismaClient } from "@/node_modules/.prisma/client/index";


// Buat Variable Prisma
const prisma = new PrismaClient;

// Buat fungsi untuk ambil data mahasiswa
// export untuk bisa menjadi fungsi public
export async function getData(){
    // membuat variable mahasiswa
    // const (namafungsi) = await (variable Prisma).(namamodul/table).findMany()
    // Jangan lupa membuat async untuk await
    const mahasiswa = await prisma.tb_mahasiswa.findMany({
      where: {
        status: "Y",
        // untuk menemukan sebuah kata/kalimat dengan kata kunci tertentu "like" di sql
        // nama: {
        //   contains: "fiq"
        // }
      },
    });

    
  
    return mahasiswa;
  }

  

  export async function updateDataStatus(npm: string, status: string) {
    try {
      await prisma.tb_mahasiswa.updateMany({
        where: { npm },
        data: { status : "N" },
      });
      return { success: true };
    } catch (error) {
      console.error("Error updating status:", error);
      return { success: false, error };
    }
  }

//buat variable check
export const checkData = async (npm: string) => {
  const check = await prisma.tb_mahasiswa.findMany({
    where: {
      npm: npm,
      
    },
    
  });

  return check;
  }