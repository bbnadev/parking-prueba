CREATE DATABASE IF NOT EXISTS PARKING;
USE PARKING;

CREATE TABLE AUTOS (
	id INT PRIMARY KEY AUTO_INCREMENT,
    patente VARCHAR(6) UNIQUE NOT NULL,
    color VARCHAR(255),
    marca VARCHAR(50),
    tipo VARCHAR(50),
    pago ENUM ("PENDIENTE", "PAGADO") DEFAULT "PENDIENTE",
    slot TINYINT,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion  DATETIME ON UPDATE CURRENT_TIMESTAMP
);