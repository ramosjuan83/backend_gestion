-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: gestion
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `tipo_movimiento` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `authStrategy` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_ccdf6cd1a34ea90a7233325063` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (4,'Servicios',2,101,'2025-02-06 13:49:57',NULL),(5,'Vehiculos2',1,101,'2025-02-06 13:50:06',NULL),(6,'prueba 21',1,101,'2025-02-06 13:52:12',NULL),(7,'prueba 28',1,101,'2025-02-06 15:37:15',NULL),(8,'prueba 8',1,101,'2025-02-06 15:37:42',NULL),(10,' rewrerrew',1,101,'2025-02-06 15:41:16',NULL),(11,'rewrerrew',1,101,'2025-02-06 15:42:17',NULL),(12,'rwerwerrewrew2',1,101,'2025-02-06 15:43:32',NULL),(13,'dsads dsadsdasdasd sd2',1,101,'2025-02-06 15:45:51',NULL),(14,'xcvcxvxvxvxv',1,101,'2025-02-06 15:46:35',NULL),(15,'prueba 101',1,101,'2025-02-06 15:46:55',NULL),(36,'message 2',1,101,'2025-02-12 13:49:28',NULL),(49,' fsdfsdf dfdfdf',1,101,'2025-02-12 17:36:43',NULL),(51,'message 23',1,101,'2025-02-12 17:37:25',NULL),(53,'fsdfsdf dfdfdf',1,101,'2025-02-12 17:38:46',NULL),(54,'fsdfsdf',1,101,'2025-02-12 17:52:15',NULL),(57,'Pasaje',1,101,'2025-02-13 10:08:07',NULL),(58,'pasaje 2',1,101,'2025-02-13 10:18:48',NULL),(59,'pasaje y',2,101,'2025-02-13 10:56:32',NULL),(60,'Dólares',0,0,'2025-02-18 15:14:56',NULL);
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monedas`
--

DROP TABLE IF EXISTS `monedas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monedas` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `abreviatura` varchar(255) NOT NULL,
  `simbolo` varchar(255) NOT NULL,
  `status_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `authStrategy` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_fbc994426911b6e16d303a2fbf` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monedas`
--

LOCK TABLES `monedas` WRITE;
/*!40000 ALTER TABLE `monedas` DISABLE KEYS */;
INSERT INTO `monedas` VALUES (1,'Dólares','USD','$',101,'2025-02-18 15:16:32',NULL),(2,'Euros','EUR','&',103,'2025-02-18 15:19:19',NULL),(3,'Euro','Eur','&',101,'2025-02-18 15:20:07',NULL);
/*!40000 ALTER TABLE `monedas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategorias`
--

DROP TABLE IF EXISTS `subcategorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategorias` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `categoria_id` bigint(20) DEFAULT NULL,
  `status_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `authStrategy` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_5a393a5747cbbbdc24998a8b47` (`nombre`),
  KEY `FK_b15fe98fc00a27b01420611b73b` (`categoria_id`),
  CONSTRAINT `FK_b15fe98fc00a27b01420611b73b` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategorias`
--

LOCK TABLES `subcategorias` WRITE;
/*!40000 ALTER TABLE `subcategorias` DISABLE KEYS */;
INSERT INTO `subcategorias` VALUES (1,'Mantenimiento 1',5,101,'2025-02-14 15:56:25',NULL),(2,'Electricidad',4,101,'2025-02-14 16:05:38',NULL),(3,'autobus',57,101,'2025-02-14 17:12:51',NULL),(5,'Agua',4,103,'2025-02-17 11:17:19',NULL),(6,'taxi',5,103,'2025-02-17 11:23:00',NULL);
/*!40000 ALTER TABLE `subcategorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasas`
--

DROP TABLE IF EXISTS `tasas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasas` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `fecha` datetime NOT NULL,
  `monto_tasa` float NOT NULL,
  `defecto` tinyint(4) NOT NULL,
  `moneda_id` bigint(20) DEFAULT NULL,
  `tipo_cambio_id` bigint(20) DEFAULT NULL,
  `status_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `authStrategy` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_657f832c8562bee3d9f5c5bccfe` (`moneda_id`),
  KEY `FK_00e6d6400ad378384c440c72b19` (`tipo_cambio_id`),
  CONSTRAINT `FK_00e6d6400ad378384c440c72b19` FOREIGN KEY (`tipo_cambio_id`) REFERENCES `tipocambios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_657f832c8562bee3d9f5c5bccfe` FOREIGN KEY (`moneda_id`) REFERENCES `monedas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasas`
--

LOCK TABLES `tasas` WRITE;
/*!40000 ALTER TABLE `tasas` DISABLE KEYS */;
INSERT INTO `tasas` VALUES (1,'2025-02-24 00:00:00',20,0,1,1,101,'2025-02-24 11:48:07',NULL),(2,'2025-02-24 00:00:00',50,0,1,1,101,'2025-02-24 11:53:31',NULL),(3,'2025-02-24 00:00:00',12,0,1,1,101,'2025-02-24 12:08:17',NULL),(4,'2025-02-24 00:00:00',30,0,1,1,101,'2025-02-24 12:10:56',NULL),(5,'2025-02-24 00:00:00',30,0,1,1,101,'2025-02-24 12:11:57',NULL),(6,'2025-02-24 00:00:00',13,0,1,1,101,'2025-02-24 12:14:27',NULL),(7,'2025-02-24 00:00:00',12,0,1,1,101,'2025-02-24 12:15:23',NULL),(8,'2025-02-17 00:00:00',12,0,1,1,101,'2025-02-24 12:15:43',NULL),(9,'2025-02-24 00:00:00',12,0,1,1,101,'2025-02-24 12:17:26',NULL),(10,'2025-02-24 00:00:00',10,0,1,1,101,'2025-02-24 12:33:22',NULL),(11,'2025-02-24 00:00:00',20,0,1,1,101,'2025-02-24 12:34:36',NULL),(12,'2025-02-24 00:00:00',12,0,1,1,101,'2025-02-24 12:35:15',NULL),(13,'2025-02-24 00:00:00',10,0,1,1,101,'2025-02-24 12:37:13',NULL),(14,'2025-02-24 00:00:00',14,0,1,1,101,'2025-02-24 12:38:42',NULL),(15,'2025-02-24 00:00:00',5,0,1,1,101,'2025-02-24 12:39:33',NULL),(16,'2025-02-24 00:00:00',62,0,1,1,101,'2025-02-24 12:40:37',NULL),(17,'2025-02-24 00:00:00',10,0,1,1,101,'2025-02-24 12:41:42',NULL),(18,'2025-02-24 00:00:00',65,0,1,1,101,'2025-02-24 12:41:58',NULL),(19,'2025-02-24 00:00:00',61,0,1,1,101,'2025-02-24 12:42:56',NULL),(20,'2025-02-24 00:00:00',63,1,1,1,101,'2025-02-24 13:16:17',NULL);
/*!40000 ALTER TABLE `tasas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipocambios`
--

DROP TABLE IF EXISTS `tipocambios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipocambios` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `moneda_id` bigint(20) DEFAULT NULL,
  `status_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `authStrategy` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_6866df6043e451ec773f0c1d15` (`nombre`),
  KEY `FK_55903eb3939a7f032b9e90ee3ee` (`moneda_id`),
  CONSTRAINT `FK_55903eb3939a7f032b9e90ee3ee` FOREIGN KEY (`moneda_id`) REFERENCES `monedas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipocambios`
--

LOCK TABLES `tipocambios` WRITE;
/*!40000 ALTER TABLE `tipocambios` DISABLE KEYS */;
INSERT INTO `tipocambios` VALUES (1,'BCV',1,101,'2025-02-18 16:52:02',NULL),(2,'ewrewrew',3,101,'2025-02-19 11:13:31',NULL),(4,'Dolar Paralelo',1,101,'2025-02-20 13:00:00',NULL);
/*!40000 ALTER TABLE `tipocambios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `authStrategy` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'jramos83','xpphp1983','2025-02-05 08:40:28',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'gestion'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-24 13:25:24
