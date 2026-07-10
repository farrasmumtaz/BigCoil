/*
  Warnings:

  - You are about to drop the column `description` on the `company` table. All the data in the column will be lost.
  - Added the required column `address` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `facebook` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instagram` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopee` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tiktok` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tokopedia` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsapp` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `company` DROP COLUMN `description`,
    ADD COLUMN `address` TEXT NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `facebook` VARCHAR(191) NOT NULL,
    ADD COLUMN `instagram` VARCHAR(191) NOT NULL,
    ADD COLUMN `shopee` VARCHAR(191) NOT NULL,
    ADD COLUMN `tiktok` VARCHAR(191) NOT NULL,
    ADD COLUMN `tokopedia` VARCHAR(191) NOT NULL,
    ADD COLUMN `whatsapp` VARCHAR(191) NOT NULL;
