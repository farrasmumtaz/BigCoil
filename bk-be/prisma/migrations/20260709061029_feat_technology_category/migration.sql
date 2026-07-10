/*
  Warnings:

  - You are about to drop the column `createdAt` on the `technology` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `technology` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Technology` table without a default value. This is not possible if the table is not empty.
  - Added the required column `technologyCategoryId` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `technology` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `categoryId` INTEGER NOT NULL,
    ADD COLUMN `subtitle` VARCHAR(191) NULL,
    ADD COLUMN `technologyCategoryId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `TechnologyCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TechnologyCategory_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Technology` ADD CONSTRAINT `Technology_technologyCategoryId_fkey` FOREIGN KEY (`technologyCategoryId`) REFERENCES `TechnologyCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
