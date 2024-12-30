/*
  Warnings:

  - Added the required column `status` to the `tb_mahasiswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_mahasiswa` ADD COLUMN `status` ENUM('Y', 'N') NOT NULL;
