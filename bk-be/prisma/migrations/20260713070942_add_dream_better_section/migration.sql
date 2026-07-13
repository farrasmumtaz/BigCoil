/*
  Warnings:

  - You are about to drop the column `image` on the `dreambetter` table. All the data in the column will be lost.
  - Added the required column `heroImage` to the `DreamBetter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `dreambetter` DROP COLUMN `image`,
    ADD COLUMN `heroImage` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `DreamBetterSection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dreamBetterId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,
    `order` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DreamBetterSection` ADD CONSTRAINT `DreamBetterSection_dreamBetterId_fkey` FOREIGN KEY (`dreamBetterId`) REFERENCES `DreamBetter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
