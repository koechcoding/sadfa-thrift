CREATE TABLE USERS (ID VARCHAR(200) NOT NULL, EMAIL VARCHAR(200) NOT NULL,
FIRSTNAME VARCHAR(200) NOT NULL, LASTNAME VARCHAR(200) NOT NULL,
PASSWORD VARCHAR(200) NOT NULL, CONFIRM_PWD VARCHAR(200) NOT NULL, ROLE VARCHAR(200) DEFAULT 'user')