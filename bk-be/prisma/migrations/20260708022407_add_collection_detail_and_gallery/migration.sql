/*
  Warnings:

  - You are about to drop the column `category` on the `collection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[collectionId]` on the table `CollectionDetail` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `CollectionDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `CollectionGallery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Technology` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `collection` DROP COLUMN `category`,
    ADD COLUMN `categoryId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `collectiondetail` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `collectiongallery` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `technology` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `testimonial` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `CollectionCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `CollectionCategory_name_key`(`name`),
    UNIQUE INDEX `CollectionCategory_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `CollectionDetail_collectionId_key` ON `CollectionDetail`(`collectionId`);

-- AddForeignKey
ALTER TABLE `Collection` ADD CONSTRAINT `Collection_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `CollectionCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
