/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-12.3.2-MariaDB, for Win64 (AMD64)
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
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Dumping data for table `servicecenter`
--

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `servicecenter` WRITE;
/*!40000 ALTER TABLE `servicecenter` DISABLE KEYS */;
INSERT INTO `servicecenter` VALUES
(1,'PT BENGKULU BUANA MAKMUR','Sumatera','Bengkulu','Bengkulu','Jl. Depati Payung Negara No. 81 Rt. 29/01\nKel. Sukarami\nKec. Selebar\nBengkulu – 38211','0736 – 53540','https://maps.app.goo.gl/UyagyytqftaiYv7s9','2026-07-16 02:32:01.820','2026-07-16 02:32:01.820'),
(2,'Bigland Bukittinggi','Sumatera','Sumatera Barat','Bukittinggi','Gadut Tilatang Kamang Depan Tugu Anson\nJl. Raya Bukit Tinggi – MDN Km. 5','(0752) 6237302','https://maps.app.goo.gl/2U4xS2hepmmYmK298','2026-07-16 02:34:11.475','2026-07-16 02:34:11.475'),
(3,'PT. Cahaya Murni Angso Duo','Sumatera','Jambi','Jambi','Jl. Lingkar Timur I No. 51 Rt. 36\nKel. Talang Bakung\nKec. Jambi Selatan\nJambi','0741 – 571117 / 0741 – 571118 / 0741 – 571119 / 0741 – 573116','https://maps.app.goo.gl/R2n31Pcnh4ucdzrk7','2026-07-16 02:35:49.214','2026-07-16 02:35:49.214'),
(4,'PT Cahaya Buana Furindotama','Jawa','Jawa Barat','Bogor (Jabodetabek)','Jl. Panel 1 Kav 5 – 6 Kawasan Propindo Gemilang Sentul\nKp. Parung Jambu, Sentul, Kec. Babakan Madang, Kabupaten Bogor,\nJawa Barat 16810','','https://maps.app.goo.gl/QBHqvauwErc5XTC38','2026-07-16 02:37:24.382','2026-07-16 02:51:18.910'),
(5,'PT. Sinar Gunung Jati (Bigland)','Jawa','Jawa Barat','Cirebon','Jl. Jenderal Sudirman No.258, Harjamukti, Kec. Harjamukti, Kota Cirebon, Jawa Barat 45143','0231 – 487100 / 0231 – 483556 / 0231 – 2311448\n','https://maps.app.goo.gl/zpBSmQBmbWbVoGYp6','2026-07-16 02:44:08.886','2026-07-16 02:50:50.403'),
(6,'PT. Sinar Kediri Sakti (BIGLAND / NAPOLLY)','Jawa','Jawa Timur','Kediri','Jl. Sudiro, Gayam Timur, Gayam, Kec. Gurah, Kabupaten Kediri, Jawa Timur 64181','(0354) 4520744','https://maps.app.goo.gl/Tekqa3tXXEwYLyEo6','2026-07-16 02:52:51.281','2026-07-16 02:52:51.281'),
(7,'PT. CAHAYA BINTANG MADIUN','Jawa','Jawa Timu','Madiun','Bagi, Kec. Madiun, Kabupaten Madiun, Jawa Timur 63151','0813 3429 8369','https://maps.app.goo.gl/TjpxGhbHSbCHwNxs6','2026-07-16 02:56:22.118','2026-07-16 02:56:22.118'),
(8,'PT. Malindo Intitama Raya','Jawa','Jawa Timur','Malang','Jl. Yos Sudarso, Setran, Bedali, Kec. Lawang, Kabupaten Malang, Jawa Timur 65215','(0341) 427788','https://maps.app.goo.gl/f6o9bXug2bUsGQkQ6','2026-07-16 02:57:18.517','2026-07-16 02:57:18.517'),
(9,'PT. PRIMA ORBIT LESTARI (BIGLAND NAPOLLY JOGJA)','Jawa','Daerah Istimewa Yogyakarta','Yogyakarta ','Jalan Raya Cangkringan,Purwomartani, Kalasan, Kabupaten Sleman, Daerah, Istimewa, Sanggrahan, Purwomartani, Kec. Kalasan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55571','(0274) 4469283','https://maps.app.goo.gl/DxpxYD3LHZAfPZXy7','2026-07-16 02:59:20.488','2026-07-16 02:59:20.488'),
(10,'Cahaya Murni Borneo Timur (Bigland)','Kalimantan','Kalimantan Timur','Balikpapan','JL. Mulawarman 18, Sempinggan, Balikpapan Selatan, Balikpapan, 76115, Manggar, Balikpapan Timur, Balikpapan City, East Kalimantan','0812 5029 3700','https://maps.app.goo.gl/N4QrkEpBGEbEZ6Xw7','2026-07-16 03:00:31.072','2026-07-16 03:00:31.072'),
(11,'PT.KRP Bigland','Kalimantan','Kalimantan Timur','Samarinda','Sambutan, Samarinda City, East Kalimantan 75253','0812 – 5309 – 4288 / 0852 – 3496 – 3888','https://maps.app.goo.gl/fHHSA2RbYVQoLgJm9','2026-07-16 03:02:33.300','2026-07-16 03:02:33.300'),
(12,'PT SURYA ANDALAN TIMUR','Sulawesi','Sulawesi Tenggara','Kendari','Puuwatu, Kendari City, South East Sulawesi 93114','0811 4003 885','https://maps.app.goo.gl/VKnAT5DjJTNaeNfd6','2026-07-16 03:03:51.760','2026-07-16 03:03:51.760'),
(13,'PT Cahaya Murni Terang Timur (Bigland)','Sulawesi','Sulawesi Selatan','Makassar','Capital O 454 Raising (Parang Loe), Jl. Ir. Sutami No.8, Parang Loe, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90241','(0411) 512272','https://maps.app.goo.gl/rnfkEPkrzma7dMjT8','2026-07-16 03:05:30.893','2026-07-16 03:05:30.893'),
(14,'PT.CMRI Bigland','Sulawesi','Sulawesi Utara','Manado','Jl. Raya Manado - Bitung, Watutumou, Kec. Kalawat, Kabupaten Minahasa Utara, Sulawesi Utara','0431 – 813585 / 0431 -813545','https://maps.app.goo.gl/tEfTVUEHys9SsbPk7','2026-07-16 03:06:37.677','2026-07-16 03:06:37.677'),
(15,'PT. SINGGASANA AGUNG SEJATI (Bigland Springbed)','Bali, NTT, NTB & Papua','Nusa Tenggara Barat','Lombok','Jl. Tgh. Saleh Hambali No.335, Bagik Polak, Kec. Labuapi, Kabupaten Lombok Barat, Nusa Tenggara Bar. 83361','0370 – 637202 / 0370 – 637237','https://maps.app.goo.gl/DFkhZnC5FpNdkSXS8','2026-07-16 03:07:50.624','2026-07-16 03:07:50.624'),
(16,'PT TIMURPRIMA LESTARISENTOSA (BIGLAND KUPANG)','Bali, NTT, NTB & Papua','Nusa Tenggara Timur','Kupang','Jl. Bung Tomo III No.14 Kota Baru, Kelapa Lima – Kupang','(0380) 890104, 890146,890635','https://maps.app.goo.gl/sxT1YUUzrx2bf75S9','2026-07-16 03:09:13.266','2026-07-16 03:09:13.266'),
(17,'PT. CAHAYA MURNI TIMUR JAYA ( PABRIK KASUR BIGLAND)','Bali, NTT, NTB & Papua','Papua','Jayapura','Jl. Baru Kelapa Dua Entrop (Samping Gudang Laris Jaya) Jayapura Papua 99224','0967 – 536998','https://maps.app.goo.gl/NEr72MyinDMpoyQ88','2026-07-16 03:10:41.741','2026-07-16 03:10:41.741'),
(18,'PT. Cahaya Murni Indolampung','Sumatera','Lampung','Bandar Lampung','Jl. Ir Sutami KM. 12 No. 7-8, Sukanegara, Kec. Tj. Bintang, Kabupaten Lampung Selatan, Lampung 35361','(0721) 350213','https://maps.app.goo.gl/U3ZEjemKGPtM2dnH6','2026-07-20 08:28:59.125','2026-07-20 08:28:59.125'),
(19,'PT. Linggau Prima Perkasa','Sumatera','Sumatera Selatan','Lubuk Linggau','Belalau I, Lubuk Linggau Utara I, Lubuklinggau City, South Sumatra 31611','0733 – 326364','https://maps.app.goo.gl/2oFjvzLATHoiN6SJA','2026-07-20 08:29:53.470','2026-07-20 08:29:53.470'),
(20,'Cahaya Kawi Ultra Polyintraco','Sumatera','Suamatera Utara','Medan','Jl. Eka Surya Jl. Sidodadi No.37, Kuala Simeme, Kec. Namorambe, Kabupaten Deli Serdang, Sumatera Utara 20355','(061) 7031111','https://maps.app.goo.gl/vKUazY1QvMVJQjhE9','2026-07-20 08:31:10.848','2026-07-20 08:31:10.848'),
(21,'PT. Bungo Permai Lestari','Sumatera','Jambi','Muara Bungo','Manggis, Bathin III, Bungo Regency, Jambi 37211','0747 – 21012 / 0747 – 21522','https://maps.app.goo.gl/PSG5EFxpFQwYnqjj7','2026-07-20 08:32:03.707','2026-07-20 08:32:03.707'),
(22,'Cahaya Murni Andalas Permai. PT','Sumatera','Suamatera Barat','Padang','JL. By Pass Km 9, Baringin, Koto Tangah, Padang, 25174, Pasar Ambacang, Kuranji, Padang City, West Sumatra 25176','(0751) 64407','https://maps.app.goo.gl/rTyc1vNCovXFdq68A','2026-07-20 08:32:49.378','2026-07-20 08:32:49.378'),
(23,'PT. Cahaya Murni Sriwindo','Sumatera','Sumatera Selatan','Palembang','Sako Baru, Sako, Palembang City, South Sumatra 30961','0711 – 811554 / 0711 – 811257 / 0711 – 811936','https://maps.app.goo.gl/MSH4Mu8GFHRiz26v7','2026-07-20 08:33:40.718','2026-07-20 08:33:40.718'),
(24,'PT. CAHYANI INDONIAGA BANGKARAYA','Sumatera','Kepulauan Bangka Belitung','Pangkal Pinang','jalan pasir ketapang No.02, Air Itam, Kec. Bukitintan, Kota Pangkal Pinang, Kepulauan Bangka Belitung 33172','(0717) 435395','https://maps.app.goo.gl/CBVTeyHi79s99h5k9','2026-07-20 08:34:43.621','2026-07-20 08:34:43.621'),
(25,'BIG LAND - Pekanbaru','Sumatera','Riau','Pekanbaru','Jl. Soekarno - Hatta No.8, Labuh Baru Bar., Payung Sekaki, Kota Pekanbaru, Riau 28291','(0761) 61823','https://maps.app.goo.gl/6JqM45MJD9Nfx4qh7','2026-07-20 08:35:33.141','2026-07-20 08:35:33.141'),
(26,'PT.MATRAS BUSABUT GEMILANG','Sumatera','Riau','Rengat','Pangkalan Kasai, Seberida, Indragiri Hulu Regency, Riau 29351','0769 – 341759','https://maps.app.goo.gl/9pU1FqLxNu6trprT8','2026-07-20 08:37:01.103','2026-07-20 08:37:01.103'),
(27,'PT.Buana Spring Foam','Jawa','Jawa Tengah','Purwokerto','Jl. Veteran No.234, Dusun I, Pangebatan, Kec. Karanglewas, Kabupaten Banyumas, Jawa Tengah 53161','(0281) 623885','https://maps.app.goo.gl/GcsEvzBQtczgzkYj9','2026-07-20 08:38:08.907','2026-07-20 08:38:08.907'),
(28,'PT.MATRAS BUSABUT GEMILANG','Jawa','Jawa Barat','Banten','Pangkalan Kasai, Seberida, Indragiri Hulu Regency, Riau 29351','0254 – 229422 / 0254 -229447 / 0254 – 229410','https://maps.app.goo.gl/9uCL6JwAGRKQ8XLC6','2026-07-20 08:39:57.127','2026-07-20 08:39:57.127'),
(29,'PT. Hamparan Energi Raya','Jawa','Jawa Tengah','Solo','Beluk Kidul, Sroyo, Jaten, Karanganyar Regency, Central Java 57731','(0271) 7889465','https://maps.app.goo.gl/VtnUkuS1cobp1bEP8','2026-07-20 08:40:43.539','2026-07-20 08:40:43.539'),
(30,'PT. Subaindo Cahaya Polintraco','Jawa','Jawa Timur','Surabaya','Jalan Margomulyo Gg.Sentong No.3D, Tandes, Surabaya, East Java 60186','(031) 7491448','https://maps.app.goo.gl/pabhK677V2pXfQkJA','2026-07-20 08:42:41.561','2026-07-20 08:42:41.561'),
(31,'Napolly','Jawa','Jawa Barat','Tasikmalaya','Jl. Raya Ciawi No.KM, RW.8, Jatihurip, Kec. Cisayong, Kabupaten Tasikmalaya, Jawa Barat 46181','(0265) 320381','https://maps.app.goo.gl/EMjnUkdsxPqhgF378','2026-07-20 08:43:27.665','2026-07-20 08:43:27.665'),
(32,'PT.Niagaraya Kreasi Lestari (BIGLAND,NAPOLLY,BIGFOAM,A.panel','Kalimantan','Kalimantan Selatan','Banjarmasin','Jl. A. Yani No.km.27, Landasan Ulin Tim., Kec. Landasan Ulin, Kota Banjar Baru, Kalimantan Selatan 70721','(0511) 4705340','https://maps.app.goo.gl/1TxKfiFH9QTRuQFL6','2026-07-20 08:44:44.804','2026-07-20 08:45:11.615'),
(33,'PT. Primagelora Agunglestari (Bigland & Napolly)','Sulawesi','Sulawesi Tengah','Palu','Jl. Trans Sulawesi No.131, Kayumalue Ngapa, Kec. Palu Utara, Kota Palu, Sulawesi Tengah 94146',' 0451 – 492710 / 0451 – 492711','https://maps.app.goo.gl/grsaFNYufxHaSTs66','2026-07-20 08:46:10.254','2026-07-20 08:46:10.254'),
(34,'sowi 2','Bali, NTT, NTB & Papua','Papua Barat','Monokrawi','Jl. Trikora Sowi No.2, Sowi, Distrik Manokwari, Kabupaten Manokwari, Papua Bar. 98315','','https://maps.app.goo.gl/RMRooUkvm1a7TQEe7','2026-07-20 08:47:10.533','2026-07-20 08:47:10.533');
/*!40000 ALTER TABLE `servicecenter` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2026-07-21  8:58:52
