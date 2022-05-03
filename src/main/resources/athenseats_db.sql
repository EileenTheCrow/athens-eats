SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `athenseats_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `athenseats_db`;


CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `restaurant` (
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `review` (
  `rating` double(100,2) DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  `restaurant` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `wishlist` (
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`id`, `email`, `name`, `password`) VALUES
(1, 'test@test.com', 'testName', 'testPass'),
(2, 'vmg16660@uga.com', 'Vince', 'abc123');

INSERT INTO `restaurant` (`name`, `type`, `address`) VALUES
('The Place', 'Southern', '229 E Broad St, Athens, GA'),
('Clocked', 'Burgers', '259 W Washington St, Athens, GA'),
('D.P. Dough', 'Pizza', '180 W Broad St, Athens, GA'),
('Trappeze Pub', 'Gastropub', '269 N Hull St, Athens, GA'),
('Little Italy Pizzeria', 'Pizza', '125 N Lumpkin St, Athens, GA'),
('Mellow Mushroom', 'Pizza', '320 E Clayton St, Athens, GA'),
('Amici Athens', 'Pizza', '233 E Clayton St, Athens, GA'),
('Last Resort Grill', 'New American', '174-184 W Clayton St, Athens, GA'),
('Porterhouse Grill', 'Steak', '459 E Broad St, Athens, GA'),
('The National', 'Mediterranean', '232 w Hancock Ave, Athens, GA');

INSERT INTO `review` (`rating`, `review`, `user`, `restaurant`) VALUES
(4.5, 'Great Chicken and Waffles', 'Vince', 'The Place'),
(3.0, 'Okay pizza but very cheap!', 'Vince', 'Little Italy Pizzeria'),
(5.0, 'Great Food and amazing service', 'Vince', 'Trappeze Pub'),
(3.5, 'Good burgers and the fries are amazing', 'Vince', 'Clocked'),
(5.0, 'Amazing Food great selection for dessert', 'Vince', 'Last Resort Grill'),
(2.5, 'Too expensive and long wait', 'testUser', 'Last Resort Grill'),
(1.5, 'Waited for hours', 'testUser', 'Amici Athens'),
(3.0, 'Good when with Friends', 'testUser', 'The Place'),
(4.0, 'My meal was Great', 'testUser', 'Last Resort Grill'),
(3.5, 'The Food was amazing', 'testUser', 'The Place');

INSERT INTO `wishlist` (`name`, `type`, `address`) VALUES
('Pauleys', 'American', '134 E Clayton St, Athens, GA'),
('JINYA', 'Ramen', '351 E Broad St, Athens, GA'),
('Thai Spoon', 'Thai', '149 N Lumpkin St, Athens, GA');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
