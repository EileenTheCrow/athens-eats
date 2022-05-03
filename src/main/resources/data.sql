/*
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";*/


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

/*
CREATE DATABASE IF NOT EXISTS athenseats_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE athenseats_db;


CREATE TABLE IF NOT EXISTS users (
  id int(11) NOT NULL AUTO_INCREMENT,
  email varchar(255) DEFAULT NULL,
  name varchar(255) DEFAULT NULL,
  password varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS restaurant (
  name varchar(255) DEFAULT NULL,
  type varchar(255) DEFAULT NULL,
  address varchar(255) DEFAULT NULL,
  PRIMARY KEY (name)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS review (
  rating double(100,2) DEFAULT NULL,
  review varchar(255) DEFAULT NULL,
  user varchar(255) DEFAULT NULL,
  restaurant varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS wishlist (
  name varchar(255) DEFAULT NULL,
  type varchar(255) DEFAULT NULL,
  address varchar(255) DEFAULT NULL,
  PRIMARY KEY (name)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
*/

/*Spring will automatically create tables within the database, we only need inserts to populate them*/
DELETE FROM reviews;
DELETE FROM wishlists;
DELETE FROM users;
DELETE FROM restaurants;

INSERT INTO users (user_id, email, first_name, last_name, password) VALUES
(1, 'test@test.com', 'testFirstName', 'testLastName', 'testPass'),
(2, 'vmg16660@uga.com', 'Vince', 'Forgot', 'abc123');

INSERT INTO restaurants (restaurant_id, name, type, address, restaurant_image) VALUES
(1, 'The Place', 'Southern', '229 E Broad St, Athens, GA', 'https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/1628096164193-GO5NTY8XZ1MODJ00V6JV/30.jpg'),
(2, 'Clocked', 'Burgers', '259 W Washington St, Athens, GA', 'https://tpghotels.com/wp-content/uploads/2018/02/Clocked-Outdoor.jpg'),
(3, 'D.P. Dough', 'Pizza', '180 W Broad St, Athens, GA', 'https://www.dpdough.com/img/logo_dpdough.png'),
(4, 'Trappeze Pub', 'Gastropub', '269 N Hull St, Athens, GA', 'https://images.getbento.com/accounts/1b5c5989f88ff026508284c281acb70c/media/images/58885logo.png'),
(5, 'Little Italy Pizzeria', 'Pizza', '125 N Lumpkin St, Athens, GA', 'https://www.orderbulldawgfood.com/custom/littleitalybg.jpg'),
(6, 'Mellow Mushroom', 'Pizza', '320 E Clayton St, Athens, GA', 'https://upload.wikimedia.org/wikipedia/en/5/56/Mellowlogo.jpg'),
(7, 'Amici Athens', 'Pizza', '233 E Clayton St, Athens, GA', 'https://www.orderbulldawgfood.com/png/v_258_i603.png' ),
(8, 'Last Resort Grill', 'New American', '174-184 W Clayton St, Athens, GA', 'https://i0.wp.com/www.fromcalculustocupcakes.com/wp-content/uploads/2013/06/Last-Resort-Grill.jpg'),
(9, 'Porterhouse Grill', 'Steak', '459 E Broad St, Athens, GA', 'https://www.accgov.com/ImageRepository/Path?filePath=%2FDocuments%5C718%5C807%5C867%2FIMG_43672_201502101436502222.jpg'),
(10, 'The National', 'Mediterranean', '232 w Hancock Ave, Athens, GA', 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_515,q_75,w_768/https://assets.simpleviewinc.com/simpleview/image/upload/crm/athens/the-national_4b20eb45-5056-a36a-0acac0469cbcc9c4.jpg');

INSERT INTO reviews (rating, review, user_id, restaurant_id) VALUES
(4.5, 'Great Chicken and Waffles', 2, 1),
(3.0, 'Okay pizza but very cheap!', 2, 5),
(5.0, 'Great Food and amazing service', 2, 4),
(3.5, 'Good burgers and the fries are amazing', 2, 2),
(5.0, 'Amazing Food great selection for dessert', 2, 8),
(2.5, 'Too expensive and long wait', 1, 8),
(1.5, 'Waited for hours', 1, 7),
(3.0, 'Good when with Friends', 1, 1),
(4.0, 'My meal was Great', 1, 8),
(3.5, 'The Food was amazing', 1, 1);

INSERT INTO wishlists (name, type, address) VALUES
('Pauleys', 'American', '134 E Clayton St, Athens, GA'),
('JINYA', 'Ramen', '351 E Broad St, Athens, GA'),
('Thai Spoon', 'Thai', '149 N Lumpkin St, Athens, GA');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
