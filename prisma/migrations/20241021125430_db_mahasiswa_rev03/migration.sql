/*
  Warnings:

  - Added the required column `nama` to the `tb_mahasiswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prodi` to the `tb_mahasiswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_mahasiswa` ADD COLUMN `nama` VARCHAR(50) NOT NULL,
    ADD COLUMN `prodi` VARCHAR(20) NOT NULL,
    MODIFY `npm` CHAR(8) NOT NULL;
