 -- Script que al ejecutar en el administrador 
 -- de la base de datos en este caso mysql, permite crear la base de datos con sus tablas
 
/*CREATE DATABASE testdb;

USE testdb;

CREATE TABLE tasks (
   idTask int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
   title varchar(100) COLLATE utf8_spanish_ci NOT NULL,
   task varchar(45) COLLATE utf8_spanish_ci NOT NULL,
   idUser int(11) NOT NULL,
   statusTask int(11) NOT NULL,
   statusArchived tinyint(4) NOT NULL DEFAULT '0',
   createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
   updatedAt datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE users (
  idUser int(11) NOT NULL AUTO_INCREMENT  PRIMARY KEY,
  userName varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  email varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci; */


