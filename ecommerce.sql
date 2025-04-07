-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `new_price` decimal(10,2) DEFAULT NULL,
  `old_price` decimal(10,2) DEFAULT NULL,
  `stock` int DEFAULT '10',
  `description` text,
  `rating` int DEFAULT '4',
  `reviews` int DEFAULT '100',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Hp Laptop','electronics','product_21.png',550.00,600.00,10,'Powerful HP laptop with a sleek design, perfect for work and play.',3,278),(2,'Beats Headphones','electronics','product_27.png',175.00,200.00,10,'Noise-canceling Beats headphones for immersive sound.',2,56),(3,'Apple Mac Book','electronics','product_3.png',650.00,700.00,10,'The sleek and efficient MacBook for everyday computing.',2,183),(4,'Apple iPad','electronics','product_4.png',200.00,300.00,10,'Apple iPad ideal for students, artists, and productivity on the go.',2,99),(5,'Composition Notebook','supplies','product_5.png',1.99,2.99,10,'Classic college-ruled composition notebook.',4,52),(6,'Web Programming Textbook','textbooks','product_17.png',75.00,110.50,10,'Comprehensive textbook on web development using react and other backend tools.',2,218),(7,'JavaScript for Web Developers','textbooks','product_19.png',100.00,120.00,10,'Comprehensive textbook on web development using JavaScript',4,209),(8,'C# and C++ Textbook','textbooks','product_13.png',85.00,120.00,0,'Step-by-step guide to mastering c# and c++ concepts.',5,33),(9,'Calculus Textbook','textbooks','product_32.png',90.00,130.00,10,'Step-by-step guide to mastering calculus.',2,65),(10,'Discrete Math Textbook','textbooks','product_10.png',65.00,95.00,10,'Textbook covering topics in discrete math.',5,159),(11,'History Textbook','textbooks','product_9.png',85.00,120.50,10,'Comprehensive world history textbook covering major historical events and periods.',2,162),(12,'Python Text Book','textbooks','product_11.png',85.00,120.50,10,'Starter concepts to mastering python programming',2,272),(13,'Intro to Linear Algebra','textbooks','product_30.png',90.00,130.00,10,'Algebra textbook for high school or college entry-level students.',3,228),(14,'English Grammar','textbooks','product_36.png',80.00,90.00,10,'English / Grammar for any student to start learning',2,213),(15,'Science Textbook','textbooks','product_35.png',85.00,120.50,10,'Complete science reference textbook for students and educators.',4,317),(16,'Lenovo Thinkpad Laptop','electronics','product_20.png',250.00,350.00,5,'Lightweight Lenovo laptop ideal for students and professionals.',3,25),(17,'Wireless Mouse','electronics','product_34.png',100.00,120.00,10,'Compact and smooth wireless mouse for laptop and desktop use.',2,150),(18,'Gaming Laptop','electronics','product_22.png',120.00,160.00,0,'High-performance gaming laptop with advanced graphics.',2,52),(19,'Sticky Notes Pack','supplies','product_31.png',2.50,5.00,10,'Sticky note variety pack for reminders and notes.',4,66),(20,'Notebook and Pen Bundle','supplies','product_25.png',5.99,9.99,10,'Notebook with matching pen bundle – perfect for school use.',4,307),(21,'HP Laptop','electronics','product_1.png',550.00,600.00,5,'Reliable HP laptop with essential computing features.',4,267),(22,'Beats Pro Headphones','electronics','product_2.png',175.00,200.00,2,'High-quality Beats headphones with premium sound.',5,28),(23,'Math Level 1 Textbook','textbooks','product_12.png',100.00,120.00,8,'Level 1 math textbook ideal for school beginners.',3,50),(24,'BIC Pens','supplies','product_24.png',3.99,5.99,50,'Pack of high-quality BIC ballpoint pens.',2,223),(25,'Styluses (Multiple Colors)','supplies','product_28.png',9.99,14.99,25,'Pack of styluses in various colors, compatible with touchscreens.',4,307),(26,'Sketch Book','supplies','product_6.png',7.99,10.99,30,'High-quality sketch book ideal for drawing and sketching.',3,60),(27,'External Hard Drive','electronics','product_7.png',59.99,79.99,15,'Portable 1TB external hard drive, USB 3.0.',3,298),(28,'Apple Keyboard & Mouse Combo','electronics','product_8.png',129.99,159.99,12,'Apple wireless keyboard and mouse combo for Mac devices.',2,138),(29,'Spiral Notebook','supplies','product_14.png',2.99,4.99,100,'College-ruled spiral notebook ideal for note-taking.',2,68),(30,'Colored Sharpies','supplies','product_15.png',8.99,12.99,40,'Pack of assorted Sharpie markers in vivid colors.',5,167),(31,'BIC Color Cues','supplies','product_16.png',5.99,8.99,60,'BIC Color Cues highlighters, assorted colors for highlighting text.',3,289),(32,'PHP & MySQL Textbook','textbooks','product_18.png',39.99,59.99,20,'Comprehensive textbook covering PHP and MySQL programming.',1,212),(33,'Tablet','electronics','product_23.png',199.99,249.99,18,'Tablet that runs all the needed programs and can be used for any class.',1,50),(34,'Purple Notebook','supplies','product_26.png',3.49,5.99,85,'Durable purple notebook suitable for daily notes and assignments.',3,73),(35,'Sharper Sense Wireless Headphones','electronics','product_29.png',49.99,69.99,25,'Wireless headphones with superior audio quality and long battery life.',3,153),(36,'Psychology Textbook','textbooks','product_33.png',54.99,79.99,22,'Introductory psychology textbook covering core theories and applications.',1,284),(37,'Acer Laptop','electronics','product_37.png',500.00,800.00,12,'A lightweight and affordable Acer laptop perfect for everyday school tasks and web browsing.',2,247),(38,'Avant Gaming Laptop','electronics','product_38.png',1199.00,1499.00,8,'High-performance Avant Gaming Laptop with RTX graphics and fast SSD for school and gaming needs.',5,165),(39,'Dell Insipron Laptop','electronics','product_39.png',699.00,899.00,12,'Reliable Dell Laptop featuring Intel Core i5, 8GB RAM, and SSD — ideal for school and office use.',3,133),(40,'MacBook Air','electronics','product_40.png',999.00,1199.00,15,'Lightweight and powerful MacBook Air with M1 chip, perfect for school, creativity, and multitasking.',2,276),(41,'Paint Brushes','supplies','product_41.png',7.99,10.99,15,'Set of premium paint brushes ideal for students and artists.',4,259),(42,'Color Pencils','supplies','product_42.png',6.49,8.99,20,'Vibrant color pencils perfect for school projects and art.',5,174),(43,'Black School Backpack','supplies','product_43.png',39.99,59.99,12,'Classic school backpack with ergonomic support and multiple compartments.',4,194),(44,'Ruler and Compass Set','supplies','product_44.png',6.99,9.99,25,'Ruler and compass set for any art majors or drawing for fun.',1,154),(45,'Chemistry Textbook','textbooks','product_45.png',89.99,129.99,18,'Intro to chemistry text book for beginners.',2,103),(46,'Advanced Chemistry Textbook','textbooks','product_46.png',109.99,149.99,10,'In-depth advanced chemistry textbook for high-level learning.',1,95);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ecommerce'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-07 14:14:42
