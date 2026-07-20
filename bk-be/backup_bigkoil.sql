-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: bigkoil
-- ------------------------------------------------------
-- Server version	12.3.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('1b12f4f3-aa4c-4916-acc8-77618b350dab','e5b250f7469233dbf491857371857a3ecefcc88deb91a9efb10f11b608cb1855','2026-07-09 09:11:12.064','20260707022737_init',NULL,NULL,'2026-07-09 09:11:11.955',1),('20be500c-6ea3-4d6b-996c-f0848f8ab2e7','c1affd028461bcacaecc56588cb6569af0203def39f4c085e376eec697559359','2026-07-09 09:11:12.086','20260707035424_rename_gallery_to_dreambetter',NULL,NULL,'2026-07-09 09:11:12.065',1),('22bb2dca-eaf2-4cde-ba87-84189a79a164','c6245d8c3c1876445879999bce6e66baaf4b17571b2da45b6ed27fb2522f531c','2026-07-13 07:09:42.118','20260713070942_add_dream_better_section',NULL,NULL,'2026-07-13 07:09:42.065',1),('2c0b7062-8d38-4f4f-8bf6-35733667ffed','0fbb9f682099b8374c53c08e24d7de49807970363ac4335f9e0d63fd3e5f4b23','2026-07-09 09:11:12.529','20260709061630_feat_technology_category',NULL,NULL,'2026-07-09 09:11:12.473',1),('3420ab7f-b812-49a8-b4ba-7fbf418fcd5e','78d6b5b677cb7be52ae08cca1ccb5407d82e7016b3ee68072904591027ec9970','2026-07-13 02:51:58.057','20260713025157_add_exhibition',NULL,NULL,'2026-07-13 02:51:58.031',1),('5ce5fe08-96fe-4cd9-b34d-54a31caef661','c93f9ace4afc3a76416f4469ecbf81d25c18ad82e76a90e8b50718f94a7cf2ec','2026-07-10 07:33:28.452','20260710073328_feat_collection_detail',NULL,NULL,'2026-07-10 07:33:28.412',1),('626cfd92-e37f-4847-bff7-d72b8da2c1e8','eb698f7c593ba92d44150c41e2202d102772698ec781be019a83ff8f4c21ae9f','2026-07-09 09:11:12.350','20260708022407_add_collection_detail_and_gallery',NULL,NULL,'2026-07-09 09:11:12.215',1),('64ee1f1e-14c5-4b3e-8bca-c0465c90b9e2','adee1d4e4c8a097a9462240c9b240aa4ad6d9738af8061de41f60a2ce223c697','2026-07-09 09:11:12.370','20260709014557_feat_company_model',NULL,NULL,'2026-07-09 09:11:12.351',1),('8646f889-b5c8-43cf-adb2-ad9a024751eb','e10036701d0133c516d2b28fbf3ea47120d72c19cb0e94adecf5f47fbbca30b0','2026-07-09 09:11:12.124','20260707061614_add',NULL,NULL,'2026-07-09 09:11:12.105',1),('9985073a-7885-42f6-8ffd-11d39a17f564','23102dfb7bd76e0c613db985673ab01b5d588d10d4aab83cbf5f1d13e6e6de4d','2026-07-10 04:22:10.570','20260710042210_feat_sort_order_in_product_technology',NULL,NULL,'2026-07-10 04:22:10.540',1),('a889cf9e-8e4b-4c99-a4db-a25a7d3eada0','2eff6f8fcc13df9eec99da9da352d6817e57dbb23cb9c99221342de290a835ed','2026-07-09 09:11:11.954','20260706070239_init',NULL,NULL,'2026-07-09 09:11:11.902',1),('acb96a41-1a74-4394-aec0-a89376a5419d','644809e6937a28b6e602c3885f9122904919c4a41812c40c3f97b0e90a722168','2026-07-09 09:11:12.396','20260709020817_update_company',NULL,NULL,'2026-07-09 09:11:12.371',1),('b8700796-fe1b-4d2b-9d48-38a6f91527ca','59bed379c85c4b0befe4077eaa8c7f1b8ab29db6405447768d094411b56351c8','2026-07-09 09:11:32.980','20260709091132_init',NULL,NULL,'2026-07-09 09:11:32.771',1),('baffd718-fd0f-4a51-af11-9f50e9be84cf','7e4f6b10860e5ee1a31550ac2f174dc13291371cad5c4836b7d368bf41a2aa64','2026-07-09 09:11:12.104','20260707042424_add',NULL,NULL,'2026-07-09 09:11:12.087',1),('be64fa24-3832-4698-8720-9c0f13cbe242','b0c510577bba8077af4adc5b11400bd3cf5c3f68b2e0ba59126ff33a8bd98245','2026-07-09 09:11:12.214','20260707095012_add_collection_detail_and_gallery',NULL,NULL,'2026-07-09 09:11:12.126',1),('c4f0924d-d49c-406b-8af4-d36c812c6856','26b7ed7d7eb25be8d0054a679349bf6fd125c35193f99e68600a154494ef0ebb','2026-07-16 01:23:13.179','20260716012313_add_service_center_and_service_setting',NULL,NULL,'2026-07-16 01:23:13.142',1),('d1e60a0b-b204-43b4-aa34-588549c5c7be','c74389fc5e644754ce3ac301317b8f6f7f2be2293c3c7bcf604fbaf1062aee56','2026-07-09 09:11:12.417','20260709031532_feat',NULL,NULL,'2026-07-09 09:11:12.397',1),('d6a6ed76-1f64-433c-a7d2-6ed2a56bd6a2','83483ad808dfac163316d3574ead4a6e6db170d07f6bfcfd2a282782ec6f8a2b','2026-07-10 03:31:31.879','20260710033131_change_product_feature_to_product_description',NULL,NULL,'2026-07-10 03:31:31.824',1),('f2796730-6de0-46d0-afe7-ea51c8af4d11','ddc0f6811cebe29af945c2bef0278282040a10474a9c1f5b02e9e29a577c6a58','2026-07-09 09:11:12.472','20260709061029_feat_technology_category',NULL,NULL,'2026-07-09 09:11:12.418',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aboutbrand`
--

DROP TABLE IF EXISTS `aboutbrand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aboutbrand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aboutbrand`
--

LOCK TABLES `aboutbrand` WRITE;
/*!40000 ALTER TABLE `aboutbrand` DISABLE KEYS */;
INSERT INTO `aboutbrand` VALUES (1,'Bigkoil','Merupakan lini produk premium yang diproduksi oleh Bigland, bagian dari Cahaya Buana Group, yang berfokus pada pengembangan springbed kelas atas dengan standar kualitas internasional. Brand ini dikenal sebagai representasi kemewahan dan kenyamanan tidur, yang dirancang untuk memenuhi kebutuhan segmen high-end, seperti hotel berbintang, apartemen eksklusif, hingga hunian premium. Produk-produk Big Koil mencakup berbagai tipe kasur springbed yang mengedepankan teknologi mutakhir, material berkualitas tinggi, serta desain elegan yang berkelas. Setiap produk dirancang untuk memberikan dukungan tubuh yang optimal, meningkatkan kualitas tidur, serta menghadirkan pengalaman istirahat yang maksimal. Keunggulan utama Big Koil terletak pada kombinasi sistem pegas berkualitas, lapisan kenyamanan premium, serta finishing yang detail dan mewah. Dalam proses produksinya, Bigland menerapkan teknologi modern dan standar kontrol kualitas yang ketat untuk memastikan setiap unit Big Koil memiliki konsistensi mutu terbaik. Selain itu, inovasi terus dilakukan melalui pengembangan desain dan teknologi terbaru guna mengikuti tren gaya hidup modern yang semakin mengutamakan kualitas tidur sebagai bagian dari kesehatan dan kesejahteraan. Didukung oleh jaringan distribusi yang luas, produk Big Koil telah digunakan di berbagai sektor hospitality dan residensial premium di Indonesia. Dengan positioning sebagai produk springbed kelas atas, Big Koil menawarkan perpaduan sempurna antara kenyamanan, daya tahan, dan estetika, sehingga mampu memperkuat citra sebagai pilihan utama bagi konsumen yang mengutamakan kualitas dan prestise.','/uploads/about-brand/about-brand-1783647284974.webp','2026-07-10 01:35:01.740','2026-07-10 01:36:17.388');
/*!40000 ALTER TABLE `aboutbrand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aboutcompany`
--

DROP TABLE IF EXISTS `aboutcompany`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aboutcompany` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `subtitle` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aboutcompany`
--

LOCK TABLES `aboutcompany` WRITE;
/*!40000 ALTER TABLE `aboutcompany` DISABLE KEYS */;
INSERT INTO `aboutcompany` VALUES (1,'CAHAYA BUANA GROUP','didirikan pada tahun 1979, dan berkantor pusat di Sentul, Bogor.','Sebagai perusahaan terintegrasi vertikal dengan lebih dari 40 pabrik yang berlokasi strategis di seluruh Indonesia, kami menghadirkan efisiensi, konsistensi, dan daya tanggap yang tak tertandingi di setiap tahap produksi. Jejak yang luas ini tidak hanya memastikan kontrol kualitas yang ketat dan logistik yang efisien, tetapi juga memungkinkan kami untuk melayani industri perhotelan lokal dengan gesit dan komunitas yang kami dukung, sehingga kami dapat memenuhi kebutuhan hotel, resor, dan penyedia layanan yang terus berkembang dengan tepat dan penuh perhatian. Perusahaan induk mengekspor berbagai komponen kasur dan perlengkapan tidur (seperti sistem pegas dalam plastik, Bonnell dan Pocket coil) terutama kepada pelanggan di AS.','/uploads/about-company/about-company-1783646974761.png','2026-07-10 01:31:57.454','2026-07-16 01:36:40.998');
/*!40000 ALTER TABLE `aboutcompany` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `Admin_username_key` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'charl','$2b$10$zllk2UOg2.xygq9is96CBe7R1TPQNPUXYHoRHxKU9fz52OEJSWCt2','2026-07-10 01:23:32.750');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collection`
--

DROP TABLE IF EXISTS `collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `slug` varchar(191) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  `coverImage` varchar(191) NOT NULL,
  `categoryId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Collection_slug_key` (`slug`),
  KEY `collection_categoryId_fkey` (`categoryId`),
  CONSTRAINT `collection_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `collectioncategory` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collection`
--

LOCK TABLES `collection` WRITE;
/*!40000 ALTER TABLE `collection` DISABLE KEYS */;
INSERT INTO `collection` VALUES (1,'Heritage Collection','5-Zone Nested Pocket Support\nSetiap zona dirancang mengikuti lekuk alami tubuh Anda, memberikan dukungan lebih kokoh di area yang dibutuhkan (lumbar zone)\ndan bantalan lebih lembut di area yang diinginkan (bahu & Kaki). Teknologi ini mengurangi titik tekanan dan menjaga tulang belakang\ntetap sejajar secara sempurna.\nKenyamanan & Dukungan yang Seimbang\n\nDirancang untuk mereka yang menginginkan lebih dari sekedar tidur nyenyak. Ini bukan hanya sekedar kasur. Tetapi sistem tidur yang\ndirancang dengan presisi untuk menopang, mendukung, dan meremajakan tubuh anda dari kepala hingga kaki.\nMengikuti Bentuk Tubuh dengan Lebih Baik & Tetap Responsif.\nStruktur nested coils (susunan coil ganda yang saling mendukung) membantu kasur mengikuti bentuk tubuh dengan lebih baik, sekaligus\nmemberikan dukungan yang lebih kokoh dan terasa lebih FIRM.','2026-07-09 09:43:30.258','heritage','2026-07-15 08:32:40.801','/uploads/collection/collection-1784104360761.webp',1),(2,'Harmonia Collection','Botaniq Haven menjadi pilihan tepat bagi Anda yang terbiasa tidur telentang (back sleeper) dan membutuhkan penopangan\noptimal area punggung. Dilengkapiteknologi 3 Zone Nested Pocket Support, kasur ini memberikan penopang lebih optimal\ndibagian tengah tubuh agar posisi tetap nyaman dan stabil.\nSetiap pocket spring bekerja secara independen sehingga dapat mengikuti bentuk tubuhdan membantu mengurangi gangguan\nakibat gerakan. Dengan kombinasi kawat pegas berdiameter 2 mm dan 2,2 mm.\nBotaniq Havenmenghadirkan kenyamanan yang seimbang sekaligus topangan yang kuat untuk kualitas tidur yang lebih baik.','2026-07-09 09:44:30.658','harmonia','2026-07-15 08:33:41.403','/uploads/collection/collection-1784104421391.webp',1),(3,'Heavenly Collection','Teknologi 3 Zone Pocket Support untuk menjaga posisi tubuh tetap ideal serta sistem foam encased yang membuat sisi kasur lebih kokoh\ndan stabil, Dream Haven membantu tubuh pulih lebih optimal agar siap kembali produktif keesokan hari.\nDream Haven cocok untuk Anda dengan gaya hidup aktif yang membutuhkan istirahat berkualitas setelah\ntingkat keempukan Medium Plush, kasur ini terasa empuk dan nyaman namun tetap suportif.','2026-07-09 09:44:56.443','heavenly','2026-07-15 08:34:00.552','/uploads/collection/collection-1784104440542.jpeg',1),(4,'Hospitality Collection','Big Koil menghadirkan Hospitality Collection, lini produk kasur premium yang dirancang khusus untuk memberikan kenyamanan tidur kelas hotel berbintang. Mengusung desain elegan dan material berkualitas tinggi, koleksi ini menargetkan segmen hospitality seperti hotel, apartemen, dan hunian eksklusif yang mengutamakan kenyamanan, daya tahan, serta nilai estetika. Dengan positioning sebagai solusi tidur berkualitas tinggi, Big Koil memperkuat citra brand sebagai penyedia produk sleep system yang menggabungkan kemewahan dan performa.','2026-07-09 09:45:31.322','hospitality-collection','2026-07-15 08:34:31.626','/uploads/collection/collection-1784104471577.jpeg',2);
/*!40000 ALTER TABLE `collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collectioncategory`
--

DROP TABLE IF EXISTS `collectioncategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `collectioncategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `CollectionCategory_name_key` (`name`),
  UNIQUE KEY `CollectionCategory_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collectioncategory`
--

LOCK TABLES `collectioncategory` WRITE;
/*!40000 ALTER TABLE `collectioncategory` DISABLE KEYS */;
INSERT INTO `collectioncategory` VALUES (1,'Retail','retail','2026-07-09 09:34:03.923','2026-07-09 09:34:03.923'),(2,'Hospitality','hospitality','2026-07-09 09:34:11.431','2026-07-09 09:34:11.431');
/*!40000 ALTER TABLE `collectioncategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collectiondetail`
--

DROP TABLE IF EXISTS `collectiondetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `collectiondetail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `collectionId` int(11) NOT NULL,
  `heroImage` varchar(191) NOT NULL,
  `heroTitle` varchar(191) NOT NULL,
  `heroDescription` text NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `CollectionDetail_collectionId_key` (`collectionId`),
  CONSTRAINT `collectiondetail_collectionId_fkey` FOREIGN KEY (`collectionId`) REFERENCES `collection` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collectiondetail`
--

LOCK TABLES `collectiondetail` WRITE;
/*!40000 ALTER TABLE `collectiondetail` DISABLE KEYS */;
INSERT INTO `collectiondetail` VALUES (1,1,'/uploads/collection-detail/collection-detail-1784096628743.png','Heritage Collection','Dunia eksklusif Heritage Collection dari Big Koil menghadirkan perpaduan sempurna antara kemewahan dan kenyamanan. Dirancang dengan ketelitian tinggi dan material berkualitas premium, setiap kasur tidak hanya tampil elegan tetapi juga memberikan dukungan optimal untuk tubuh Anda. Dilengkapi teknologi Nested Pocketed Coil, gel-infused memory foam yang sejuk, serta lapisan latex yang responsif, menghadirkan pengalaman tidur yang seimbang dan menyegarkan. Rasakan kualitas tidur terbaik dengan Heritage Collection—di mana setiap malam menjadi momen istirahat yang istimewa.','2026-07-10 07:51:57.735','2026-07-15 06:23:48.780'),(2,2,'/uploads/collection-detail/collection-detail-1784096652637.png','Harmonia Collection','Dunia menawan Harmonia Collection dari Cahaya Buana Group dipenuhi dengan kemewahan dan keindahan yang memikat. Dirancang dengan ketelitian tinggi serta material berkualitas unggul, setiap kasur tampil elegan sekaligus memberikan kenyamanan dan dukungan superior sepanjang waktu istirahat Anda. Dilengkapi teknologi Nested Pocketed Coil dan lapisan latex responsif, menghadirkan pengalaman tidur yang seimbang, stabil, dan menyegarkan. Rasakan harmoni sempurna antara kenyamanan dan performa—dan nikmati kualitas tidur layaknya kemewahan sejati.','2026-07-10 07:59:43.459','2026-07-15 06:24:12.705'),(3,3,'/uploads/collection-detail/collection-detail-1784096659519.png','Havenly Collection','Dunia elegan Havenly Collection dari Cahaya Buana Group menghadirkan harmoni sempurna antara kenyamanan dan performa. Dirancang dengan presisi tinggi serta material berkualitas premium, setiap kasur memberikan dukungan optimal untuk menjaga keselarasan tubuh sekaligus menghadirkan kenyamanan yang memanjakan. Dilengkapi sistem 3-Zone Pocketed Coil, body contouring foam, dan kain rajut mewah, kasur ini mengikuti setiap lekuk tubuh dengan respons yang seimbang dan stabil. Rasakan pengalaman tidur yang lebih dalam, lebih segar, dan penuh pemulihan—di mana setiap malam menjadi awal dari hari terbaik Anda.','2026-07-10 08:02:55.470','2026-07-15 06:24:19.586'),(5,4,'/uploads/collection-detail/collection-detail-1784097830291.jpeg','Hospitality Collection','Big Koil menghadirkan Hospitality Collection, lini produk kasur premium yang dirancang khusus untuk memberikan kenyamanan tidur kelas hotel berbintang. Mengusung desain elegan dan material berkualitas tinggi, koleksi ini menargetkan segmen hospitality seperti hotel, apartemen, dan hunian eksklusif yang mengutamakan kenyamanan, daya tahan, serta nilai estetika. Dengan positioning sebagai solusi tidur berkualitas tinggi, Big Koil memperkuat citra brand sebagai penyedia produk sleep system yang menggabungkan kemewahan dan performa.','2026-07-15 06:43:50.301','2026-07-15 06:43:50.301');
/*!40000 ALTER TABLE `collectiondetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `tagline` varchar(191) NOT NULL,
  `logo` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `address` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `facebook` varchar(191) DEFAULT NULL,
  `instagram` varchar(191) DEFAULT NULL,
  `shopee` varchar(191) DEFAULT NULL,
  `tiktok` varchar(191) DEFAULT NULL,
  `tokopedia` varchar(191) DEFAULT NULL,
  `whatsapp` varchar(191) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'PT Cahaya Buana Furindotama','Part of Cahaya Buana Group','/uploads/company/company-1783996201825.png','2026-07-10 06:42:50.476','2026-07-15 07:04:12.584','Jl. Panel 1 Kav 5 – 6 Kawasan Propindo Gemilang Sentul\nKp. Parung Jambu, Sentul, Kec. Babakan Madang, Kabupaten Bogor,\nJawa Barat 16810','cs.bigkoil@cahayabuana.co.id','https://www.facebook.com/profile.php?id=61570591191315','https://www.instagram.com/bigkoil.springbed/','https://shopee.co.id/biglandspringbed','https://www.tiktok.com/@bigkoilspringbedofficial','https://www.tokopedia.com/biglandspringbed','6285215878059');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contactmessage`
--

DROP TABLE IF EXISTS `contactmessage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contactmessage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `message` text NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactmessage`
--

LOCK TABLES `contactmessage` WRITE;
/*!40000 ALTER TABLE `contactmessage` DISABLE KEYS */;
/*!40000 ALTER TABLE `contactmessage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dealer`
--

DROP TABLE IF EXISTS `dealer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dealer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `city` varchar(191) NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `mapsUrl` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `island` varchar(191) NOT NULL,
  `province` varchar(191) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dealer`
--

LOCK TABLES `dealer` WRITE;
/*!40000 ALTER TABLE `dealer` DISABLE KEYS */;
INSERT INTO `dealer` VALUES (1,'Toko Cahaya Rumah','Bogor','Jl. Raya Tajur No.202, RT.01/RW.07, Muarasari, Kec. Bogor Sel., Kota Bogor, Jawa Barat 16137','0878-9506-6158','https://maps.app.goo.gl/tZDSUChe6ThQG5Es5','2026-07-13 01:38:28.578','Jawa','Jawa Barat','2026-07-13 04:51:35.957'),(2,'Cap Payung','Bandung','667 Blok A,B,C,D, No Jl. A. Yani, Padasuka, Cibeunying Kidul, Bandung City, West Java 40125','(022) 7275163','https://maps.app.goo.gl/87KJDH3QQQvXSUA86','2026-07-13 01:43:05.241','Jawa','Jawa Barat','2026-07-13 06:10:04.226'),(3,'Lubuk Jati Indah (LJI Furniture)','Padang','Jl. Adinegoro Dalam No.39, Lubuk Buaya, Kec. Koto Tangah, Kota Padang, Sumatera Barat 25173','0895-0682-5637','https://maps.app.goo.gl/oJ1N6epE8icT9qc9A','2026-07-13 01:44:13.392','Sumatera','Sumatera Barat','2026-07-13 06:58:56.097'),(4,'Toko Chandra Meubel','Bogor','Jl. Raya Puncak - Cianjur No.8, Palasari, Kec. Cipanas, Kabupaten Cianjur, Jawa Barat 43253','0818-771-406','https://maps.app.goo.gl/rW6pWViHjZKJshXW8','2026-07-13 04:51:02.393','Jawa','Jawa Barat','2026-07-13 04:51:02.393'),(5,'Toko Laelly Furniture','Bogor','05, Cicopong, Jl. Raya Cigudeg No.Km. 45, Cigudeg, Kec. Cigudeg, Kabupaten Bogor, Jawa Barat 16660','0858-8817-2199','https://maps.app.goo.gl/hJ8Bfi3j9T3Y6gCQ6','2026-07-13 04:52:51.147','Jawa','Jawa Barat','2026-07-13 04:52:51.147'),(6,'Toko Cipta Bangun Jaya','Bogor','Jl. Raya Ragunan No.51, RT.5/RW.4, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12520','(021) 78839636','https://maps.app.goo.gl/Ui2UozM4DZ684i8X8','2026-07-13 04:57:03.281','Jawa','Jawa Barat','2026-07-13 04:57:03.281'),(7,'Palem Furniture','Bekasi','Komp Maha Perdana Jaya, Jl. Pahlawan Revolusi Blk. C - D No.1, RT.2/RW.2, Pd. Bambu, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13430','0821-2457-0192','https://maps.app.goo.gl/7rJDnqAiPTXkTLHn6','2026-07-13 06:12:04.248','Jawa','Jawa Barat','2026-07-13 06:14:21.431'),(8,'Palem Furniture 3','Bekasi','Jl. Raya Bekasi No.KM.17 No.27, RT.1/RW.3, Jatinegara, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13250','0813-8480-9476','https://maps.app.goo.gl/k6UkspHKMsCWtQr66','2026-07-13 06:13:38.873','Jawa','Jawa Barat','2026-07-13 06:13:38.873'),(9,'Sentra Furniture','Bekasi','Ruko Mega Boulevard RV.1.3, Medan Satria, Bekasi, West Java 17132','0896-8286-9581','https://maps.app.goo.gl/cMiuBLhGNF3GK1aR9','2026-07-13 06:16:22.710','Jawa','Jawa Barat','2026-07-13 06:16:22.710'),(10,'PT. Mulia Sarana Abadi','Cianjur','Jl. Perintis Kemerdekaan No.9, Sayang, Kec. Cianjur, Jawa Barat, 43213','(0263) 281418','https://maps.app.goo.gl/ZanU2WQvuVhbz8ph8','2026-07-13 06:18:36.240','Jawa','Jawa Barat','2026-07-13 06:19:39.081'),(11,'Sinar Niechan Furniture','Cibening','Jl. Laks. Laut RE. Martadinata jalan tengah No.53, Nagri Tengah, Kec. Purwakarta, Kabupaten Purwakarta, Jawa Barat 41115','0812-8586-6353','https://maps.app.goo.gl/mKQ7YQG6PgCbPrzz7','2026-07-13 06:21:37.330','Jawa','Jawa Barat','2026-07-13 06:21:37.330'),(12,'Sabar Furniture','Cilacap','Jl. Perintis Kemerdekaan, Sabukjanur, Gunungsimping, Kec. Cilacap Utara, Kabupaten Cilacap, Jawa Tengah 53231','0811-280-304','https://maps.app.goo.gl/kJJ8v2PrnaA4W6t17','2026-07-13 06:32:08.814','Jawa','Jawa Tengah','2026-07-13 06:32:08.814'),(13,'Toko Doni Meubel','Cirebon','JJl. Mayor Dasuki No.230, Jatibarang, Kec. Jatibarang, Kabupaten Indramayu, Jawa Barat 45273','0852-9469-1260','https://maps.app.goo.gl/PHby6TxLc1T96LP66','2026-07-13 06:33:33.093','Jawa','Jawa Barat','2026-07-13 06:33:33.093'),(14,'Metro Furniture','Jakarta','Jl. Kramat Jaya Raya No.23-25, RT.1/RW.3, Lagoa, Kec. Koja, Jkt Utara, Daerah Khusus Ibukota Jakarta 14270','0813-8703-7550','https://maps.app.goo.gl/QigPGo8DKwMDGLDq9','2026-07-13 06:35:46.458','Jawa','DKI Jakarta','2026-07-13 06:35:57.011'),(15,'Maggio Home Center Jati Asih','Jakarta','MXX4+7QV, RT.005/RW.009, Jatiasih, Bekasi, West Java 17423','0851-5604-8679','https://maps.app.goo.gl/4NHMw84bRwroatQZ6','2026-07-13 06:39:39.704','Jawa','DKI Jakarta','2026-07-13 06:39:39.704'),(16,'Sinar Hokky Sempolan','Jember','Jl. Jend. Ahmad Yani, Karang Kebun, Sumberjati, Kec. Silo, Kabupaten Jember, Jawa Timur 68184','0851-5604-8679','https://maps.app.goo.gl/gFf6V9fZYoHA6ezV7','2026-07-13 06:41:43.296','Jawa','Jawa Timur','2026-07-13 06:41:43.296'),(17,'Nikimura Home Market','Kediri','Jl. Erlangga No.184, Paron II, Paron, Kec. Ngasem, Kabupaten Kediri, Jawa Timur 64129','','https://maps.app.goo.gl/L7PYzkuj5tJ4Lzfg9','2026-07-13 06:43:14.320','Jawa','Jawa Timur','2026-07-13 06:43:14.320'),(18,'Bangli Meubel','Bali','Jl. Merdeka No.46, Kawan, Kec. Bangli, Kabupaten Bangli, Bali 80613','0896-0176-5758','https://maps.app.goo.gl/f3Zx5mZfSypzKf3U8','2026-07-13 06:54:00.725','Bali-NTT-NTB','Bali','2026-07-13 06:54:00.725'),(19,'Bintang Furniture Center (BFC)','Kupang','Jl. Bund. PU No.2, Tuak Daun Merah, Kec. Oebobo, Kota Kupang, Nusa Tenggara Tim. 85228','0813-3918-5999','https://maps.app.goo.gl/oNZitqhniuB6XqbX8','2026-07-13 06:56:34.418','Bali-NTT-NTB','Nusa Tenggara Timur','2026-07-13 06:56:34.418'),(20,'Toko Kawi','Balikpapan','Jl. Ahmad Yani No.25, RT.50/RW/RW.No.23, Gunungsari Ilir, Kec. Balikpapan Tengah, Kota Balikpapan, Kalimantan Timur 76113','','https://maps.app.goo.gl/63FpN2WiH6PeNaGZ6','2026-07-13 09:08:45.370','Kalimantan','Kalimantan Timur','2026-07-13 09:37:21.537'),(21,'Nuansa Elektronik Superstore','Balikpapan','Jl. Mayjend Sutoyo No.62, Klandasan Ilir, Kec. Balikpapan Kota, Kota Balikpapan, Kalimantan Timur 76113','(0542) 745701','https://maps.app.goo.gl/SAmN4R6PZTSYGP9PA','2026-07-13 09:09:47.199','Kalimantan','Kalimantan Timur','2026-07-13 09:36:28.692'),(22,'Grand Toserba','Balikpapan','Batu Ampar, Balikpapan Utara, Balikpapan City, East Kalimantan','','https://maps.app.goo.gl/CcVbeYASkjuBHZSz6','2026-07-13 09:10:46.972','Kalimantan','Kalimantan Timur','2026-07-13 09:34:43.359'),(23,'Meubel 99 Banjarmasin','Banjarmasin','Jln. A. Yani KM. 7,7 Ruko 3-4, II, Pemurus Luar, Kec. Kertak Hanyar, Kota Banjarmasin, Kalimantan Selatan 70654','0821-4999-7654','https://maps.app.goo.gl/56GqSNSAMQo1vWR57','2026-07-13 09:18:03.223','Kalimantan','Kalimantan Selatan','2026-07-13 09:34:19.593'),(24,'Joy Furniture','Pontianak','Jl. M.T. Haryono, Tengah, Kec. Delta Pawan, Kabupaten Ketapang, Kalimantan Barat 78821','','https://maps.app.goo.gl/mgzw1TM6xcCoWMyo6','2026-07-13 09:20:42.469','Kalimantan','Kalimantan Barat','2026-07-13 09:34:03.667'),(25,'Glow Furniture','Pontianak','Samping apotik medistra farma, Jl. R. Suprapto, Tengah, Kec. Delta Pawan, Kabupaten Ketapang, Kalimantan Barat 78812','0812-5782-560','https://maps.app.goo.gl/TAVgVGwbkuapvSWB8','2026-07-13 09:21:39.701','Kalimantan','Kalimantan Barat','2026-07-13 09:33:47.890'),(26,'SumberJaya Furniture 2','Samarinda','Jl. Pelita No.39, Sungai Pinang Dalam, Kec. Sungai Pinang, Kota Samarinda, Kalimantan Timur 75242','','https://maps.app.goo.gl/bnaKmPvTm7eeuDiU8','2026-07-13 09:26:31.797','Kalimantan','Kalimantan Timur','2026-07-13 09:33:26.961'),(27,'BIGLAND Toko Citra Buana','Samarinda','Jl. Sultan Hasanuddin, Baqa, Kec. Samarinda Seberang, Kota Samarinda, Kalimantan Timur 75242','','https://maps.app.goo.gl/przVTjzkNjis5Phn9','2026-07-13 09:28:01.855','Kalimantan','Kalimantan Timur','2026-07-13 09:32:39.086'),(28,'Aneka Sambas','Singkawang','Jl. Keramat No.87, Ps. Melayu, Kec. Sambas, Kabupaten Sambas, Kalimantan Barat 79462','0821-4818-8899','https://maps.app.goo.gl/j7FkUvmDo9TpeJuM8','2026-07-13 09:30:59.894','Kalimantan','Kalimantan Barat','2026-07-13 09:31:42.621');
/*!40000 ALTER TABLE `dealer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dreambetter`
--

DROP TABLE IF EXISTS `dreambetter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dreambetter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `heroImage` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `DreamBetter_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dreambetter`
--

LOCK TABLES `dreambetter` WRITE;
/*!40000 ALTER TABLE `dreambetter` DISABLE KEYS */;
INSERT INTO `dreambetter` VALUES (1,'Healthy Lifestyle','healthy-lifestyle','Tidur merupakan salah satu faktor penting dalam hidup yang jarang kita perhatikan. Saat kita tidur cukup, tubuh akan memperbaiki dirinya sendiri, otak akan memproses informasi dan ingatan, serta suasana hati menjadi stabil.','2026-07-13 07:23:34.323','2026-07-13 07:23:34.323','/uploads/dream-better/dream-better-1783927402394.webp'),(2,'Sleep Cycle','sleep-cycle','Tidur bukanlah suatu keadaan yang panjang dan seragam. Ini adalah siklus yang tersusun indah, dari empat tahap yang dikelompokan kedalam tidur NREM (non-rapid eye movement) dan REM (rapid eye movement). Setiap tahap memiliki peran berbeda dalam memulihkan tubuh dan pikiran anda.','2026-07-13 07:25:19.773','2026-07-13 07:25:19.773','/uploads/dream-better/dream-better-1783927505812.webp'),(3,'VerteBrae Disk','vertebrae-disk','Sepanjang hari, gravitasi menekan tulang belakang, mendorong tulang-tulang belakang (vertebra) lebih rapat dan menyebabkan cakram di antaranya kehilangan cairan. Akibatnya, tinggi badan Anda bisa sedikit di sore hari. Saat berbaring, tekanan tersebut hilang, memungkinkan tulang belakang untuk mengalami dekompresi secara alami.','2026-07-13 07:27:35.103','2026-07-13 07:27:35.103','/uploads/dream-better/dream-better-1783927648005.webp');
/*!40000 ALTER TABLE `dreambetter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dreambettersection`
--

DROP TABLE IF EXISTS `dreambettersection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dreambettersection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dreamBetterId` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `content` text NOT NULL,
  `order` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dreambettersection_dreamBetterId_fkey` (`dreamBetterId`),
  CONSTRAINT `dreambettersection_dreamBetterId_fkey` FOREIGN KEY (`dreamBetterId`) REFERENCES `dreambetter` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dreambettersection`
--

LOCK TABLES `dreambettersection` WRITE;
/*!40000 ALTER TABLE `dreambettersection` DISABLE KEYS */;
INSERT INTO `dreambettersection` VALUES (1,1,'Pentingnya Tidur yang Cukup','Tidur merupakan salah satu faktor penting dalam hidup yang jarang kita perhatikan. Saat kita tidur cukup, tubuh akan memperbaiki dirinya sendiri, otak akan memproses informasi dan ingatan, serta suasana hati menjadi stabil. Sebalik, kurang tidur dapat menyebabkan lemahnya sistem kekebalan tubuh, mengganggu fungsi kognitif dan perubahan suasana hati. Anggaplah tidur itu sebagai proses pemulihan tubuh disetiap malam, istirahat yang baik akan membuat segalanya menjadi lebih baik juga.',1),(2,1,'Kebiasaan Tidur','Kebiasaan Tidur yang baik bukan hanya menggosok gigi dan memakai pakaian tidur. Ini tentang menciptakan kondisi yang tepat untuk tidur yang berkualitas:\n1) Jadwal tidur yang konsisten: Dimana kita membiasakan Tidur dan bangun diwaktu yang sama setiap hari, bahkan diakhir pekan. Dengan begitu jam biologis atau mekanisme pengaturan waktu internal dalam tubuh akan terbentuk secara otomatis.\n2) Lingkungan Tidur yang nyaman: Kamar tidur yang sejuk, tenang, dan gelap adalah suasana yang ideal untuk tidur.\n3) Batasi waktu di depan layar Gadget: Cahaya biru pada layar Televisi atau Gadget dapat mengganggu kadar melatonin. Cobalah untuk menghindari layar setidaknya satu jam sebelum tidur.\n4) Kebiasaan Hidup Sehat: Hindari kafein, alkohol dan makanan berat menjelang waktu tidur. Karena makanan tersebut dapat mengganggu siklus tidur.\n5) Rutinitas Relaksasi: Lakukan rutinitas sebelum tidur seperti membaca, bermeditasi atau mandi air hangat untuk memberi sinyal pada tubuh sudah waktu bersantai.',2),(3,1,'Lantas apa yang semestinya dapat dilakukan oleh kasur yang baik?','Kasur yang baik adalah kasur yang dapat menopang tubuh secara benar, terutama pada bagian tulang belakang dengan memastikan posisi tulang tetap pada bentuk naturalnya dan sekaligus mengurangi titik-titik tekanan. Kasur yang baik juga dapat meredam gerakan sehingga meminimalisasi gerakan seperti berguling – guling. \nSelain itu, kasur harus memiliki sirkulasi udara yang baik untuk mengatur suhu tubuh. Dan tentunya, kasur yang tepat itu dapat menyesuaikan dengan posisi tidur telentang, miring atau kombinasi keduanya.',3);
/*!40000 ALTER TABLE `dreambettersection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exhibition`
--

DROP TABLE IF EXISTS `exhibition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exhibition` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `location` varchar(191) NOT NULL,
  `eventDate` datetime(3) NOT NULL,
  `description` text NOT NULL,
  `coverImage` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Exhibition_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exhibition`
--

LOCK TABLES `exhibition` WRITE;
/*!40000 ALTER TABLE `exhibition` DISABLE KEYS */;
INSERT INTO `exhibition` VALUES (1,'Pameran Bigkoil 2026','pameran-bigkoil-2026','ICE BSD','2026-03-05 00:00:00.000','BigKoil menggelar pameran pada tahun 2026 dengan berbagai koleksi terbaru.','/uploads/exhibition/exhibition-1784081431137.png','2026-07-13 02:54:50.752','2026-07-15 02:10:31.209');
/*!40000 ALTER TABLE `exhibition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hero`
--

DROP TABLE IF EXISTS `hero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `subtitle` varchar(191) DEFAULT NULL,
  `description` text NOT NULL,
  `buttonText` varchar(191) NOT NULL,
  `buttonLink` varchar(191) NOT NULL,
  `image` varchar(191) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hero`
--

LOCK TABLES `hero` WRITE;
/*!40000 ALTER TABLE `hero` DISABLE KEYS */;
INSERT INTO `hero` VALUES (1,'Your Best Sleep','Starts Here','....','Tentang Kami','about','/uploads/hero/hero-1783645983782.jpeg','2026-07-14 04:01:40.693');
/*!40000 ALTER TABLE `hero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `collectionId` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `shortDescription` text NOT NULL,
  `heroImage` varchar(191) NOT NULL,
  `videoUrl` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Product_slug_key` (`slug`),
  KEY `product_collectionId_fkey` (`collectionId`),
  CONSTRAINT `product_collectionId_fkey` FOREIGN KEY (`collectionId`) REFERENCES `collection` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,1,'Celestique Haven','celestique-haven','Kasur premium.','/uploads/product/product-1784017344508.png','https://youtu.be/xxxxxxxx','2026-07-10 01:49:09.536','2026-07-14 08:22:24.548'),(2,1,'Luxora Rest','luxora-rest','Kasur premium.','/uploads/product/product-1783648295075.webp','','2026-07-10 01:53:16.681','2026-07-10 01:58:02.173'),(3,1,'True Pedic','true-pedic','Kasur Premius.','/uploads/product/product-1783648442893.webp','','2026-07-10 01:54:48.757','2026-07-10 01:57:03.141');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productdescription`
--

DROP TABLE IF EXISTS `productdescription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productdescription` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `sortOrder` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productdescription_productId_fkey` (`productId`),
  CONSTRAINT `productdescription_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productdescription`
--

LOCK TABLES `productdescription` WRITE;
/*!40000 ALTER TABLE `productdescription` DISABLE KEYS */;
INSERT INTO `productdescription` VALUES (1,1,'Sistem Pegas Kantong Bersarang 5 Zona','Setiap zona dirancang mengikuti lekuk alami tubuh sehingga memberikan dukungan yang optimal.',1,'2026-07-10 04:02:42.778','2026-07-10 04:02:42.778'),(2,1,'Lapisan Lateks Alami','Memberikan elastisitas tinggi, sirkulasi udara yang baik, dan sifat hipoalergenik.',2,'2026-07-10 04:02:49.687','2026-07-10 04:02:49.687'),(3,1,'Busa Memori dengan Infuse Gel','Mengikuti bentuk tubuh dan membantu mengurangi panas saat tidur.',3,'2026-07-10 04:02:54.115','2026-07-10 04:02:54.115');
/*!40000 ALTER TABLE `productdescription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productgallery`
--

DROP TABLE IF EXISTS `productgallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productgallery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `image` varchar(191) NOT NULL,
  `sortOrder` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productgallery_productId_fkey` (`productId`),
  CONSTRAINT `productgallery_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productgallery`
--

LOCK TABLES `productgallery` WRITE;
/*!40000 ALTER TABLE `productgallery` DISABLE KEYS */;
INSERT INTO `productgallery` VALUES (1,1,'/uploads/product-gallery/product-gallery-1783649523313.png',0,'2026-07-10 02:12:21.842','2026-07-10 02:12:21.842');
/*!40000 ALTER TABLE `productgallery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productspecification`
--

DROP TABLE IF EXISTS `productspecification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productspecification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `label` varchar(191) NOT NULL,
  `value` varchar(191) NOT NULL,
  `icon` varchar(191) DEFAULT NULL,
  `sortOrder` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productspecification_productId_fkey` (`productId`),
  CONSTRAINT `productspecification_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productspecification`
--

LOCK TABLES `productspecification` WRITE;
/*!40000 ALTER TABLE `productspecification` DISABLE KEYS */;
INSERT INTO `productspecification` VALUES (1,1,'Sandaran','Curve - Tinggi 145 cm','',1,'2026-07-10 02:27:41.960','2026-07-10 02:27:41.960'),(2,1,'Divan','Sierra - Tinggi 20 cm','',2,'2026-07-10 02:27:47.565','2026-07-10 02:27:47.565'),(3,1,'Warna','Mocca & Brown','',3,'2026-07-10 02:27:59.772','2026-07-10 02:27:59.772'),(4,1,'Tinggi','40 cm','',4,'2026-07-10 02:28:06.527','2026-07-10 02:28:06.527'),(5,1,'Level Kenyamanan','2 / 10 (Plush)','/uploads/product-specification/product-specification-1783652139176.webp',5,'2026-07-10 02:30:33.085','2026-07-10 02:56:56.070');
/*!40000 ALTER TABLE `productspecification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producttechnology`
--

DROP TABLE IF EXISTS `producttechnology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producttechnology` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `technologyId` int(11) NOT NULL,
  `sortOrder` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ProductTechnology_productId_technologyId_key` (`productId`,`technologyId`),
  KEY `producttechnology_technologyId_fkey` (`technologyId`),
  CONSTRAINT `producttechnology_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `producttechnology_technologyId_fkey` FOREIGN KEY (`technologyId`) REFERENCES `technology` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producttechnology`
--

LOCK TABLES `producttechnology` WRITE;
/*!40000 ALTER TABLE `producttechnology` DISABLE KEYS */;
INSERT INTO `producttechnology` VALUES (1,1,2,1),(2,1,4,2),(4,1,6,4),(7,1,1,3);
/*!40000 ALTER TABLE `producttechnology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicecenter`
--

DROP TABLE IF EXISTS `servicecenter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servicecenter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `island` varchar(191) NOT NULL,
  `province` varchar(191) NOT NULL,
  `city` varchar(191) NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `mapsUrl` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicecenter`
--

LOCK TABLES `servicecenter` WRITE;
/*!40000 ALTER TABLE `servicecenter` DISABLE KEYS */;
INSERT INTO `servicecenter` VALUES (1,'PT BENGKULU BUANA MAKMUR','Sumatera','Bengkulu','Bengkulu','Jl. Depati Payung Negara No. 81 Rt. 29/01\nKel. Sukarami\nKec. Selebar\nBengkulu – 38211','0736 – 53540','https://maps.app.goo.gl/UyagyytqftaiYv7s9','2026-07-16 02:32:01.820','2026-07-16 02:32:01.820'),(2,'Bigland Bukittinggi','Sumatera','Sumatera Barat','Bukittinggi','Gadut Tilatang Kamang Depan Tugu Anson\nJl. Raya Bukit Tinggi – MDN Km. 5','(0752) 6237302','https://maps.app.goo.gl/2U4xS2hepmmYmK298','2026-07-16 02:34:11.475','2026-07-16 02:34:11.475'),(3,'PT. Cahaya Murni Angso Duo','Sumatera','Jambi','Jambi','Jl. Lingkar Timur I No. 51 Rt. 36\nKel. Talang Bakung\nKec. Jambi Selatan\nJambi','0741 – 571117 / 0741 – 571118 / 0741 – 571119 / 0741 – 573116','https://maps.app.goo.gl/R2n31Pcnh4ucdzrk7','2026-07-16 02:35:49.214','2026-07-16 02:35:49.214'),(4,'PT Cahaya Buana Furindotama','Jawa','Jawa Barat','Bogor (Jabodetabek)','Jl. Panel 1 Kav 5 – 6 Kawasan Propindo Gemilang Sentul\nKp. Parung Jambu, Sentul, Kec. Babakan Madang, Kabupaten Bogor,\nJawa Barat 16810','','https://maps.app.goo.gl/QBHqvauwErc5XTC38','2026-07-16 02:37:24.382','2026-07-16 02:51:18.910'),(5,'PT. Sinar Gunung Jati (Bigland)','Jawa','Jawa Barat','Cirebon','Jl. Jenderal Sudirman No.258, Harjamukti, Kec. Harjamukti, Kota Cirebon, Jawa Barat 45143','0231 – 487100 / 0231 – 483556 / 0231 – 2311448\n','https://maps.app.goo.gl/zpBSmQBmbWbVoGYp6','2026-07-16 02:44:08.886','2026-07-16 02:50:50.403'),(6,'PT. Sinar Kediri Sakti (BIGLAND / NAPOLLY)','Jawa','Jawa Timur','Kediri','Jl. Sudiro, Gayam Timur, Gayam, Kec. Gurah, Kabupaten Kediri, Jawa Timur 64181','(0354) 4520744','https://maps.app.goo.gl/Tekqa3tXXEwYLyEo6','2026-07-16 02:52:51.281','2026-07-16 02:52:51.281'),(7,'PT. CAHAYA BINTANG MADIUN','Jawa','Jawa Timu','Madiun','Bagi, Kec. Madiun, Kabupaten Madiun, Jawa Timur 63151','0813 3429 8369','https://maps.app.goo.gl/TjpxGhbHSbCHwNxs6','2026-07-16 02:56:22.118','2026-07-16 02:56:22.118'),(8,'PT. Malindo Intitama Raya','Jawa','Jawa Timur','Malang','Jl. Yos Sudarso, Setran, Bedali, Kec. Lawang, Kabupaten Malang, Jawa Timur 65215','(0341) 427788','https://maps.app.goo.gl/f6o9bXug2bUsGQkQ6','2026-07-16 02:57:18.517','2026-07-16 02:57:18.517'),(9,'PT. PRIMA ORBIT LESTARI (BIGLAND NAPOLLY JOGJA)','Jawa','Daerah Istimewa Yogyakarta','Yogyakarta ','Jalan Raya Cangkringan,Purwomartani, Kalasan, Kabupaten Sleman, Daerah, Istimewa, Sanggrahan, Purwomartani, Kec. Kalasan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55571','(0274) 4469283','https://maps.app.goo.gl/DxpxYD3LHZAfPZXy7','2026-07-16 02:59:20.488','2026-07-16 02:59:20.488'),(10,'Cahaya Murni Borneo Timur (Bigland)','Kalimantan','Kalimantan Timur','Balikpapan','JL. Mulawarman 18, Sempinggan, Balikpapan Selatan, Balikpapan, 76115, Manggar, Balikpapan Timur, Balikpapan City, East Kalimantan','0812 5029 3700','https://maps.app.goo.gl/N4QrkEpBGEbEZ6Xw7','2026-07-16 03:00:31.072','2026-07-16 03:00:31.072'),(11,'PT.KRP Bigland','Kalimantan','Kalimantan Timur','Samarinda','Sambutan, Samarinda City, East Kalimantan 75253','0812 – 5309 – 4288 / 0852 – 3496 – 3888','https://maps.app.goo.gl/fHHSA2RbYVQoLgJm9','2026-07-16 03:02:33.300','2026-07-16 03:02:33.300'),(12,'PT SURYA ANDALAN TIMUR','Sulawesi','Sulawesi Tenggara','Kendari','Puuwatu, Kendari City, South East Sulawesi 93114','0811 4003 885','https://maps.app.goo.gl/VKnAT5DjJTNaeNfd6','2026-07-16 03:03:51.760','2026-07-16 03:03:51.760'),(13,'PT Cahaya Murni Terang Timur (Bigland)','Sulawesi','Sulawesi Selatan','Makassar','Capital O 454 Raising (Parang Loe), Jl. Ir. Sutami No.8, Parang Loe, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90241','(0411) 512272','https://maps.app.goo.gl/rnfkEPkrzma7dMjT8','2026-07-16 03:05:30.893','2026-07-16 03:05:30.893'),(14,'PT.CMRI Bigland','Sulawesi','Sulawesi Utara','Manado','Jl. Raya Manado - Bitung, Watutumou, Kec. Kalawat, Kabupaten Minahasa Utara, Sulawesi Utara','0431 – 813585 / 0431 -813545','https://maps.app.goo.gl/tEfTVUEHys9SsbPk7','2026-07-16 03:06:37.677','2026-07-16 03:06:37.677'),(15,'PT. SINGGASANA AGUNG SEJATI (Bigland Springbed)','Bali, NTT, NTB & Papua','Nusa Tenggara Barat','Lombok','Jl. Tgh. Saleh Hambali No.335, Bagik Polak, Kec. Labuapi, Kabupaten Lombok Barat, Nusa Tenggara Bar. 83361','0370 – 637202 / 0370 – 637237','https://maps.app.goo.gl/DFkhZnC5FpNdkSXS8','2026-07-16 03:07:50.624','2026-07-16 03:07:50.624'),(16,'PT TIMURPRIMA LESTARISENTOSA (BIGLAND KUPANG)','Bali, NTT, NTB & Papua','Nusa Tenggara Timur','Kupang','Jl. Bung Tomo III No.14 Kota Baru, Kelapa Lima – Kupang','(0380) 890104, 890146,890635','https://maps.app.goo.gl/sxT1YUUzrx2bf75S9','2026-07-16 03:09:13.266','2026-07-16 03:09:13.266'),(17,'PT. CAHAYA MURNI TIMUR JAYA ( PABRIK KASUR BIGLAND)','Bali, NTT, NTB & Papua','Papua','Jayapura','Jl. Baru Kelapa Dua Entrop (Samping Gudang Laris Jaya) Jayapura Papua 99224','0967 – 536998','https://maps.app.goo.gl/NEr72MyinDMpoyQ88','2026-07-16 03:10:41.741','2026-07-16 03:10:41.741');
/*!40000 ALTER TABLE `servicecenter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicesetting`
--

DROP TABLE IF EXISTS `servicesetting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servicesetting` (
  `id` int(11) NOT NULL DEFAULT 1,
  `embedUrl` text NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicesetting`
--

LOCK TABLES `servicesetting` WRITE;
/*!40000 ALTER TABLE `servicesetting` DISABLE KEYS */;
INSERT INTO `servicesetting` VALUES (1,'https://www.google.com/maps/d/u/0/embed?mid=1gaLpnpDervOiTubbL7sVSBz7BELWix8&ehbc=2E312F','2026-07-16 02:18:06.547');
/*!40000 ALTER TABLE `servicesetting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technology`
--

DROP TABLE IF EXISTS `technology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `technology` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(191) NOT NULL,
  `subtitle` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `type` enum('COIL','FOAM') NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technology`
--

LOCK TABLES `technology` WRITE;
/*!40000 ALTER TABLE `technology` DISABLE KEYS */;
INSERT INTO `technology` VALUES (1,'STANDARD','Isolasi Gerak yang lebih baik. Karena setiap per dibungkus secara independen, kasur mampu menyerap gerakan sehingga tidak\nmenyebar ke seluruh permukaan. Cocok untuk pasangan dan orang yang tidur gelisah.\n\nPereda tekanan yang lebih optimal. Per pocket mengikuti kontur tubuh lebih efektif dibandingkan per Bonnell atau unit per lastic. Hal ini\nmembantu mengurangi tekanan pada bahu, pinggul, dan punggung bagian bawah.\n\nDukungan & Kesejajaran Tulang Belakang yang lebih baik. Per yang bekerja secara independen merespon setiap bagian tubuh secara\nberbeda. Area yang lebih berat (seperti pinggul) mendapatkan dukungan lebih kuat, sementara area yang lebih ringan mendapatkan\nyang lebih lembut.','/uploads/technology/technology-1783656412843.png','Pocket Coil System','2026-07-10 04:07:45.051','COIL','2026-07-15 06:29:45.348'),(2,'NESTED','Coil disusun menyerupai sarang lebah sehingga jumlah pegas meningkat sekitar 15% dalam ruang yang sama. Kepadatan coil lebih tinggi tanpa menambah ketebalan kasur. Dirancang untuk mitra yang cerdas di bidang perhotelan dan kesehatan, kasur pegas saku bersarang 5 zona kami menggabungkan rekayasa ergonomis canggih dengan lapisan lateks premium untuk memberikan kinerja tidur yang berbeda.\n\nBaik Anda tidur miring, tidur telentang, atau di antara keduanya, kasur ini beradaptasi dengan kebutuhan Anda. Ini adalah keseimbangan sempurna antara dukungan ortopedi dan kenyamanan seperti awan – sehingga Anda bangun dengan segar, selaras kembali, dan siap menghadapi hari.','/uploads/technology/technology-1783656496980.png','Pocket Coil System','2026-07-10 04:08:25.471','COIL','2026-07-15 06:28:46.652'),(3,'Latex','Latex bereaksi cepat terhadap tekanan artinya:\n– Kamu akan “tenggelam’’ sedalam saat memakai memory foam.\n– Lebih mudah bergerak dan berganti posisi sepanjang malam.\n– Membuat rasa melayang (buoyant) dari coil kantong (Pocketed Coils).\n– Sangat cocok untuk combination sleepers dan bagi mereka yang tidak menyukai sensasi “tenggelam” saat berbaring.','/uploads/technology/technology-1783656596088.png','Dukungan Responsif dengan daya pantul','2026-07-10 04:10:13.959','FOAM','2026-07-15 06:30:20.616'),(4,'Gel Infused','Active Cooling system.\nMembantu menjaga permukaan kasur tetap sejuk, sehingga kamu tidak mudah terbangun karena merasa panas. Teknologi ini dilengkapi dengan infus gel yang membantu menyerap dan melepaskan panas, agar suhu tetap nyaman sepanjang tidur.\n\nPressure Relief.\nMembuat tidur lebih nyaman tanpa perlu sering berganti posisi,sehingga kamu bisa tidur lebih dalam dan lebih nyenyak.','/uploads/technology/technology-1783656725924.png','Memory Foam','2026-07-10 04:12:17.168','FOAM','2026-07-15 06:30:40.596'),(5,'Foam','Foam encasement memperkuat bagian perimeter kasur, mencegah tepi mudah amblas.\n\nManfaat meliputi :\n– Lebih nyaman saat duduk atau tidur di tepi kasur.\n– Area tidur yang lebih luas dan bisa digunakan secaramaksimal.\n\nDaya Tahan Lebih Lama.\nBatas busa melindungi material bagian dalam (pocket coil dan lapisan busa) agar tidak bergeser atau aus sebelum waktunya. Hal ini membantu mempertahankan bentuknya lebih lama.','/uploads/technology/technology-1783656757426.png','Encasement','2026-07-10 04:13:21.598','FOAM','2026-07-15 06:31:29.742'),(6,'Knitted Mattress Ticking','Memungkinkan permukaan kasur terasa lebih lembut dan elastis sehingga dapat menyesuaikan bentuk tubuh dengan lebih baik.\n\nSirkulasi Udara yang Lebih Baik.\nStruktur rajut secara alami memungkinkan aliran udara lebih optimal.\n\nRasa Sentuhan yang Lebih Lembut.\nMemberikan pengalaman sentuhan pertama yang lebih mewah dibandingkan kain tenun yang biasa.','/uploads/technology/technology-1783656828936.png','Mattress Ticking','2026-07-10 04:14:47.073','FOAM','2026-07-15 06:31:40.694');
/*!40000 ALTER TABLE `technology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testimonial`
--

DROP TABLE IF EXISTS `testimonial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `testimonial` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `image` varchar(191) NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testimonial`
--

LOCK TABLES `testimonial` WRITE;
/*!40000 ALTER TABLE `testimonial` DISABLE KEYS */;
INSERT INTO `testimonial` VALUES (1,'2026-07-10 03:49:10.305','/uploads/testimonial/testimonial-1783655309354.png','2026-07-10 03:49:10.305'),(2,'2026-07-10 03:49:27.376','/uploads/testimonial/testimonial-1783655358996.png','2026-07-10 03:49:27.376'),(3,'2026-07-10 03:49:44.403','/uploads/testimonial/testimonial-1783655377365.png','2026-07-10 03:49:44.403');
/*!40000 ALTER TABLE `testimonial` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-20  9:01:28
