-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: ModoosMovie
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

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
-- Table structure for table `NewTable`
--

DROP TABLE IF EXISTS `NewTable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `NewTable` (
  `movie_num` int NOT NULL AUTO_INCREMENT,
  `movie_name` varchar(100) NOT NULL,
  PRIMARY KEY (`movie_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NewTable`
--

LOCK TABLES `NewTable` WRITE;
/*!40000 ALTER TABLE `NewTable` DISABLE KEYS */;
/*!40000 ALTER TABLE `NewTable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardcomments`
--

DROP TABLE IF EXISTS `boardcomments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardcomments` (
  `commentNum` int NOT NULL AUTO_INCREMENT,
  `boardNum` int NOT NULL,
  `userId` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`commentNum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardcomments`
--

LOCK TABLES `boardcomments` WRITE;
/*!40000 ALTER TABLE `boardcomments` DISABLE KEYS */;
/*!40000 ALTER TABLE `boardcomments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boards`
--

DROP TABLE IF EXISTS `boards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boards` (
  `boardNum` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `userId` varchar(255) NOT NULL,
  `grade` int NOT NULL,
  `count` varchar(255) NOT NULL,
  `views` varchar(255) NOT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`boardNum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boards`
--

LOCK TABLES `boards` WRITE;
/*!40000 ALTER TABLE `boards` DISABLE KEYS */;
/*!40000 ALTER TABLE `boards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cinema`
--

DROP TABLE IF EXISTS `cinema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cinema` (
  `cinema_num` bigint NOT NULL AUTO_INCREMENT,
  `grade` int NOT NULL,
  `addr` varchar(50) NOT NULL,
  `cinema` varchar(50) NOT NULL,
  PRIMARY KEY (`cinema_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinema`
--

LOCK TABLES `cinema` WRITE;
/*!40000 ALTER TABLE `cinema` DISABLE KEYS */;
/*!40000 ALTER TABLE `cinema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cinemas`
--

DROP TABLE IF EXISTS `cinemas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cinemas` (
  `cinema_num` int NOT NULL AUTO_INCREMENT,
  `grade` int NOT NULL,
  `addr` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cinema` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`cinema_num`),
  KEY `cinemas_FK` (`grade`),
  CONSTRAINT `cinemas_FK` FOREIGN KEY (`grade`) REFERENCES `regions` (`grade`)
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinemas`
--

LOCK TABLES `cinemas` WRITE;
/*!40000 ALTER TABLE `cinemas` DISABLE KEYS */;
INSERT INTO `cinemas` VALUES (1,4,'광주시','광주광산'),(2,3,'충청남도','천안불당'),(3,5,'대구시',' 대구율하'),(5,8,'제주도',' 제주아라'),(6,8,'제주도',' 제주연동'),(7,6,'경상남도',' 양산물금'),(8,6,'경상남도',' 김해아울렛'),(9,6,'경상남도',' 사천'),(10,6,'경상남도',' 통영'),(11,6,'경상남도',' 엠비씨네(진주)'),(12,6,'경상남도',' 창원'),(13,5,'경상북도',' 상주'),(14,5,'경상북도',' 영천'),(15,5,'경상북도',' 구미공단'),(16,5,'경상북도',' 프리미엄구미센트럴'),(17,5,'경상북도',' 프리미엄 안동'),(18,5,'경상북도',' 경주'),(19,5,'경상북도',' 포항'),(20,4,'전라북도',' 군산나운'),(21,4,'전라북도',' 전주(백화점)'),(22,3,'충청남도',' 당진'),(23,3,'충청남도',' 서산'),(24,3,'충청북도',' 충주'),(25,3,'충청북도',' 청주용암'),(26,1,'서울시',' 영등포'),(27,7,'강원도',' 동해'),(28,7,'강원도',' 남원주'),(29,7,'강원도',' 춘천'),(30,2,'경기도',' 향남'),(32,2,'경기도',' 안성'),(33,2,'경기도',' 파주운정'),(34,2,'경기도',' 용인역북'),(35,2,'경기도',' 수지'),(36,2,'경기도',' 하남미사'),(37,2,'경기도',' 시흥장현'),(38,2,'경기도',' 시화'),(39,2,'경기도',' 마석'),(40,2,'경기도',' 별내'),(41,2,'경기도',' 구리아울렛'),(42,2,'경기도',' 주엽'),(43,2,'경기도',' 라페스타(일산)'),(44,2,'경기도',' 안산(롯데마트)_Charlotte관'),(45,2,'경기도',' 안산'),(46,2,'경기도',' 안산고잔'),(47,2,'경기도',' 센트럴락(안산)'),(48,2,'경기도',' 송탄'),(49,2,'경기도',' 광명'),(50,2,'경기도',' 부천역'),(51,2,'경기도',' 안양(안양역)'),(52,2,'경기도',' 인덕원'),(53,2,'경기도',' 평촌(범계역)_Charlotte관'),(54,2,'경기도',' 평촌(범계역)'),(55,2,'경기도',' 판교'),(56,2,'경기도',' 성남중앙'),(57,2,'경기도',' 북수원'),(58,2,'경기도',' 광교아울렛'),(59,2,'경기도',' 수원'),(60,2,'경기도',' 서수원'),(61,6,'울산시',' 울산(백화점)'),(62,6,'울산시',' 울산성남'),(63,3,'대전시',' 대전관저'),(64,3,'대전시',' 대전(백화점)'),(65,4,'광주시',' 수완'),(66,4,'광주시',' 충장로'),(67,1,'서울시',' 가양'),(68,2,'인천시',' 부평갈산'),(69,2,'인천시',' 부평역사'),(70,2,'인천시',' 인천터미널'),(71,5,'대구시',' 대구현풍'),(72,5,'대구시',' 프리미엄 만경'),(73,6,'부산시',' 오투(부산대)'),(74,6,'부산시',' 프리미엄 해운대(장산역)'),(75,6,'부산시',' 동래'),(76,6,'부산시',' 서면(전포동)'),(77,6,'부산시',' 부산본점'),(78,6,'부산시',' 광복'),(79,6,'부산시',' 대영'),(80,1,'서울시',' 강동'),(82,1,'서울시',' 월드타워'),(83,1,'서울시',' 신림'),(84,1,'서울시',' 서울대입구'),(85,1,'서울시',' 가산디지털'),(87,1,'서울시',' 합정'),(88,1,'서울시',' 은평(롯데몰)'),(89,1,'서울시',' 노원'),(90,1,'서울시',' 수유'),(91,1,'서울시',' 건대입구'),(92,1,'서울시',' 용산'),(94,1,'서울시',' 에비뉴엘(명동)'),(95,1,'서울시',' 홍대입구'),(96,3,'충청남도',' 천안청당'),(97,8,'제주도',' 제주삼화지구'),(99,2,'경기도',' 평택비전(뉴코아)'),(100,1,'서울시',' 수락산'),(101,5,'경상북도',' 경주황성'),(102,4,'전라북도',' 전주송천'),(103,2,'경기도',' 오산(원동)'),(104,1,'서울시',' 신도림'),(105,6,'부산시',' 센텀시티(백화점)'),(106,2,'경기도',' 위례'),(107,6,'경상남도',' 김해부원'),(108,3,'충청북도',' 서청주(아울렛)'),(110,2,'경기도',' 광명아울렛'),(111,2,'인천시',' 부평'),(112,2,'경기도',' 산본피트인'),(113,2,'경기도',' 동탄'),(114,6,'부산시',' 부산명지'),(115,7,'강원도',' 속초'),(116,5,'경상북도',' 영주'),(117,1,'서울시',' 중랑'),(118,7,'강원도',' 원주무실'),(119,5,'대구시',' 상인'),(120,3,'대전시',' 대전센트럴'),(121,1,'서울시',' 도곡'),(122,6,'경상남도',' 프리미엄 경남대'),(123,2,'경기도',' 병점'),(124,2,'경기도',' 부천(신중동역)'),(125,3,'대전시',' 대전둔산(월평동)'),(126,4,'광주시',' 광주(백화점)관'),(127,4,'광주시',' 광주(백화점)'),(128,2,'인천시',' 영종하늘도시'),(129,5,'대구시',' 프리미엄칠곡'),(130,5,'대구시',' 대구광장'),(131,5,'대구시',' 동성로관'),(132,6,'부산시',' 동부산(아울렛)'),(133,1,'서울시',' 브로드웨이(신사)'),(134,1,'서울시',' 독산'),(135,6,'경상남도',' 거창'),(136,6,'경상남도',' 마산(합성동)'),(137,4,'전라북도',' 익산모현'),(138,1,'서울시',' 청량리'),(139,6,'경상남도',' 진해'),(140,6,'경상남도',' 진주혁신'),(141,2,'경기도',' 진접'),(142,4,'전라북도',' 전주평화'),(143,2,'인천시',' 인천아시아드'),(144,2,'경기도',' 의정부민락'),(145,2,'경기도',' 안양일번가'),(146,3,'충청남도',' 아산터미널'),(147,5,'대구시',' 성서'),(148,5,'대구시',' 동성로'),(149,2,'경기도',' 용인기흥'),(150,4,'전라북도',' 군산몰'),(151,2,'경기도',' 광주터미널'),(152,1,'서울시',' 김포공항'),(153,8,'제주도',' 서귀포');
/*!40000 ALTER TABLE `cinemas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventcategory`
--

DROP TABLE IF EXISTS `eventcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventcategory` (
  `categoryId` int NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventcategory`
--

LOCK TABLES `eventcategory` WRITE;
/*!40000 ALTER TABLE `eventcategory` DISABLE KEYS */;
INSERT INTO `eventcategory` VALUES (1,'영화'),(2,'제휴/할인'),(3,'반짝반짝');
/*!40000 ALTER TABLE `eventcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `eventNum` int NOT NULL AUTO_INCREMENT,
  `eventTitle` varchar(255) NOT NULL,
  `eventContent` varchar(255) DEFAULT NULL,
  `eventImg` varchar(255) DEFAULT NULL,
  `userNum` int NOT NULL,
  `grade` int NOT NULL,
  `views` int DEFAULT NULL,
  `categoryId` int NOT NULL,
  `startEventDate` date DEFAULT NULL,
  `endEventDate` date DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`eventNum`),
  KEY `categoryId` (`categoryId`),
  KEY `userNum` (`userNum`),
  CONSTRAINT `events_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `eventcategory` (`categoryId`),
  CONSTRAINT `events_ibfk_2` FOREIGN KEY (`userNum`) REFERENCES `users` (`userNum`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'qqwe','qwe','https://caching.lottecinema.co.kr//Media/Event/ecb5de4b515b42c2be6bb0e325b1cfcc.jpg',1,0,NULL,1,'2023-07-01','2023-07-06',NULL,NULL),(2,'qqwe','qweqwe','qwe',2,0,NULL,1,'2023-07-15','2023-07-23',NULL,NULL),(3,'qq','qq','qqe',3,0,NULL,1,'2023-07-27','2023-08-31',NULL,NULL),(4,'w','w','w',1,0,NULL,2,'2023-07-04','2023-07-12',NULL,NULL),(5,'ww','ww','ww',2,0,NULL,2,'2023-07-15','2023-07-27',NULL,NULL),(6,'www','www','www',3,0,NULL,2,'2023-07-23','2023-07-31',NULL,NULL),(7,'e','e','e',1,0,NULL,3,'2023-07-04','2023-07-09',NULL,NULL),(8,'ee','ee','ee',2,0,NULL,3,'2023-07-13','2023-07-16',NULL,NULL),(9,'eee','eee','eee',3,0,NULL,3,'2023-07-23','2023-09-01',NULL,NULL),(10,'rrrr','rrrr','rrr',1,0,NULL,1,'2023-10-12','2023-10-21',NULL,NULL),(11,'rrrrr','rrrrr','rrrr',1,0,NULL,1,'2023-12-25','2023-12-29',NULL,NULL);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meets`
--

DROP TABLE IF EXISTS `meets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meets` (
  `meetNum` int NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) NOT NULL,
  `body` varchar(1000) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `count` int NOT NULL DEFAULT '0',
  `tags` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  PRIMARY KEY (`meetNum`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meets`
--

LOCK TABLES `meets` WRITE;
/*!40000 ALTER TABLE `meets` DISABLE KEYS */;
INSERT INTO `meets` VALUES (3,'zzsdf','<p>sdasd</p>','admin',0,'[\"aa\"]','2023-06-29 02:24:16','2023-06-29 02:24:16'),(4,'aasdf','<p>asdf</p>','admin',0,'[\"asdf\"]','2023-06-29 02:45:31','2023-06-29 02:45:31'),(5,'zzz','<p>zzz</p>','user',0,'[\"zz\",\"asdf\",\"1\"]','2023-06-29 15:09:49','2023-06-29 15:09:49'),(6,'asfd','<p>sadf</p>','user',0,'[\"asdf\"]','2023-06-29 15:15:45','2023-06-29 15:15:45'),(7,'asf','<p>sadf</p>','user',0,'[\"asdf\"]','2023-06-30 00:28:03','2023-06-29 15:28:03'),(8,'asdf','<p>safd</p>','admin',0,'[]','2023-06-30 06:49:55','2023-06-30 06:49:55'),(9,'sadf','<p>sdf</p>','admin',0,'[]','2023-06-30 06:50:53','2023-06-30 06:50:53'),(10,'ㄴㅇㄹ','<p>ㄴㅇㄹ</p>','admin',0,'[\"ㄴㅇㄹ\"]','2023-06-30 07:01:43','2023-06-30 07:01:43'),(11,'asdf','<p>sadf</p>','admin',0,'[\"asdf\"]','2023-06-30 07:03:56','2023-06-30 07:03:56'),(12,'sdf','<p>sdf</p>','admin',0,'[\"sdf\"]','2023-06-30 07:11:29','2023-06-30 07:11:29'),(13,'as','<p>sdf</p>','admin',0,'[\"sdf\"]','2023-06-30 07:16:38','2023-06-30 07:16:38'),(14,'asd','<p>sd</p>','admin',0,'[\"fd\"]','2023-06-30 07:16:41','2023-06-30 07:16:41'),(15,'ㅋㅋ','<p>ㅋㅋ</p>','admin',0,'[\"ㅋㅋ\"]','2023-06-30 07:16:48','2023-06-30 07:16:48'),(16,'ㅇ','<p>ㅇ</p>','admin',0,'[\"ㅇ\"]','2023-06-30 07:18:27','2023-06-30 07:18:27'),(17,'유저가쓴글','<p>ㅋㅋㅋ</p>','user',0,'[\"ㅋㅋ\"]','2023-06-30 07:24:17','2023-06-30 07:24:17');
/*!40000 ALTER TABLE `meets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moviereviews`
--

DROP TABLE IF EXISTS `moviereviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moviereviews` (
  `reviewNum` int NOT NULL,
  `userId` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` varchar(255) NOT NULL,
  `star` int NOT NULL,
  PRIMARY KEY (`reviewNum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moviereviews`
--

LOCK TABLES `moviereviews` WRITE;
/*!40000 ALTER TABLE `moviereviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `moviereviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `movie_num` int NOT NULL AUTO_INCREMENT,
  `movie_name` varchar(100) NOT NULL,
  `tiketing` varchar(100) DEFAULT NULL,
  `star` int DEFAULT NULL,
  `popularity` int DEFAULT NULL,
  `movie_id` int DEFAULT NULL,
  PRIMARY KEY (`movie_num`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (8,'분노의 질주: 라이드 오어 다이','5616.442',7,2050,385687),(9,'스파이더맨: 어크로스 더 유니버스','2275.332',9,1738,569094),(10,'트랜스포머: 비스트의 서막','1686.666',7,445,667538),(11,'엘리멘탈','1264.201',7,172,976573),(12,'플래시','1188.594',7,618,298618),(13,'인어공주','970.28',6,760,447277),(14,'엑소시스트: 더 바티칸','676.847',7,1470,758323),(15,'유랑지구 2','385.545',7,273,842675),(16,'스크림 6','379.875',7,1415,934433),(17,'라이드 온','254.401',7,66,931102),(18,'세인트 세이야: 더 비기닝','162.419',6,68,455476),(19,'악마의 부활','159.346',6,187,296271),(20,'부기맨','88.804',6,99,532408),(21,'빅트립2: 아기곰 배달 대작전','70.217',7,72,599019),(22,'슬픔의 삼각형','62.306',7,1420,497828),(23,'북 클럽: 넥스트 챕터','59.523',7,59,982271),(24,'남은 인생 10년','56.274',7,35,876797),(25,'블랙 워터: 어비스','54.85',5,386,522444),(26,'메리 마이 데드 바디','43.293',7,9,983883),(27,'범죄도시3','42.4',6,37,955555);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postcomments`
--

DROP TABLE IF EXISTS `postcomments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postcomments` (
  `commentNum` int NOT NULL AUTO_INCREMENT,
  `postNum` int NOT NULL,
  `userId` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`commentNum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postcomments`
--

LOCK TABLES `postcomments` WRITE;
/*!40000 ALTER TABLE `postcomments` DISABLE KEYS */;
/*!40000 ALTER TABLE `postcomments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `postNum` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` varchar(9999) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` longblob,
  `userId` varchar(255) NOT NULL,
  `grade` int NOT NULL DEFAULT '1',
  `count` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `views` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `tags` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`postNum`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (24,'ddsdf','<p>sdf</p>',NULL,'admin',1,'0','0','2023-06-29 11:21:33','2023-06-29 11:21:33','[\"asd\"]'),(25,'아아아','<p>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>',NULL,'admin',1,'0','0','2023-06-29 11:22:52','2023-06-29 11:22:52','[\"ㅇㅇ\"]'),(26,'2345678','<p>1234567890</p>',NULL,'admin',1,'0','0','2023-06-29 11:34:19','2023-06-29 11:34:19','[\"23456789\"]');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regions`
--

DROP TABLE IF EXISTS `regions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regions` (
  `grade` int NOT NULL,
  `region` varchar(100) NOT NULL,
  PRIMARY KEY (`grade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regions`
--

LOCK TABLES `regions` WRITE;
/*!40000 ALTER TABLE `regions` DISABLE KEYS */;
INSERT INTO `regions` VALUES (0,'MY 영화관'),(1,'서울'),(2,'경기/인천'),(3,'충청/대전'),(4,'전라/광주'),(5,'경북/대구'),(6,'경남/부산/울산'),(7,'강원'),(8,'제주');
/*!40000 ALTER TABLE `regions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `ticketNum` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(100) NOT NULL,
  `addr` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cinema` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date` datetime NOT NULL,
  `movie` int NOT NULL,
  `seat` int NOT NULL,
  PRIMARY KEY (`ticketNum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userNum` int NOT NULL AUTO_INCREMENT,
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `age` bigint NOT NULL,
  `gender` varchar(100) NOT NULL,
  `grade` int NOT NULL DEFAULT '0',
  `point` bigint NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  PRIMARY KEY (`userNum`),
  UNIQUE KEY `users_UN` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'a','손강민','$2b$12$TKFDELUWFIitQuH20yVzK.CjLJVCA.6tfE5oxqSYVH38Hqp098tSi','skm0628@naver.com','1',1,'남자',0,0,'2023-06-26 22:03:29','2023-06-26 22:03:29'),(2,'admin','관리자','$2b$12$Ng9LrmiUwKEGIgYE4GuXW.f4A8WzCASssFZ0b7YjlsligpCvdJ0oi','admin@admin.com','1',99,'남자',2,0,'2023-06-27 16:47:02','2023-06-27 16:47:02'),(3,'user','유저','$2b$12$pQ.AWaXqWc7xExd438MGT.tpsOFAt4i2UmCWubhJWLxHd/E1YoIJC','user@user.com','1',1,'여자',0,0,'2023-06-27 16:47:30','2023-06-27 16:47:30'),(4,'aaa','skm','$2b$12$iw2VZ53xDoLpHvhJiEZQ/.DBI6.EVE.T0n9gcx3glNYL55g2ioP6a','skm0628@naver.com','1',2,'남자',0,0,'2023-06-27 17:43:08','2023-06-27 17:43:08'),(5,'kbj','김병제','$2b$12$GpvrCHM3WC4Sb0rrMXTlUe6zdF7lBiNUkLAUy2EWDUt9y3DVl48OW','kbj@kbj','01053938443',22,'남자',0,0,'2023-06-27 22:16:25','2023-06-27 22:16:25');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-30 17:26:42
