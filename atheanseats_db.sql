set sql_mode = "no_auto_value_on_zero";
start transaction;
set time_zone = "+00:00";


/*!40101 set @old_character_set_client=@@character_set_client */;
/*!40101 set @old_character_set_results=@@character_set_results */;
/*!40101 set @old_collation_connection=@@collation_connection */;
/*!40101 set names utf8mb4 */;

create database if not exists `athenseats_db` default character set utf8mb4 collate utf8mb4_general_ci;
use `athenseats_db`;
CREATE USER 'springuser'@'%' ;GRANT ALL PRIVILEGES ON *.* TO 'springuser'@'%';
commit;

/*!40101 set character_set_client=@old_character_set_client */;
/*!40101 set character_set_results=@old_character_set_results */;
/*!40101 set collation_connection=@old_collation_connection */;
