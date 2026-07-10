/*
  Warnings:

  - You are about to drop the column `categoryId` on the `technology` table. All the data in the column will be lost.
  - You are about to drop the column `technologyCategoryId` on the `technology` table. All the data in the column will be lost.
  - You are about to drop the `technologycategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `Technology` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `technology` DROP FOREIGN KEY `Technology_technologyCategoryId_fkey`;

-- DropIndex
DROP INDEX `Technology_technologyCategoryId_fkey` ON `technology`;

-- AlterTable
ALTER TABLE `technology` DROP COLUMN `categoryId`,
    DROP COLUMN `technologyCategoryId`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `type` ENUM('COIL', 'FOAM') NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `technologycategory`;
