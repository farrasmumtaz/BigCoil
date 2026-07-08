/*
  Warnings:

  - You are about to drop the column `email` on the `dealer` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `dealer` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `dealer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `dealer` DROP COLUMN `email`,
    DROP COLUMN `latitude`,
    DROP COLUMN `longitude`;
