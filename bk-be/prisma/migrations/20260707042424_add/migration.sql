/*
  Warnings:

  - Added the required column `island` to the `Dealer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `Dealer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Dealer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `dealer` ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `island` VARCHAR(191) NOT NULL,
    ADD COLUMN `latitude` DOUBLE NULL,
    ADD COLUMN `longitude` DOUBLE NULL,
    ADD COLUMN `province` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
