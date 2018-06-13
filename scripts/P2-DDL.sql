/*
 * P2-DDL.sql
 * Author: Cole Vikupitz
 *
 * The DDL script for intializing the database(s) used in project 2.
 *
 */


/*
 * Drops the database if it already exists in system
 */
DROP USER healme_admin CASCADE;


/*
 * Create the user/database & credentials
 */
CREATE USER healme_admin
IDENTIFIED BY 89^Kp9kHx4%4G4Jh&7gH 
DEFAULT TABLESPACE users
TEMPORARY TABLESPACE temp
QUOTA 10M ON users;


/*
 * Grant privileges to the new user
 */
GRANT CONNECT TO healme_admin;
GRANT RESOURCE TO healme_admin;
GRANT CREATE SESSION TO healme_admin;
GRANT CREATE TABLE TO healme_admin;
GRANT CREATE VIEW TO healme_admin;

conn healme_admin/89^Kp9kHx4%4G4Jh&7gH


/*
 * Defines and creates the tables
 */
CREATE TABLE Users (
    UserId          NUMBER PRIMARY KEY,
    FirstName       VARCHAR(32),
    LastName        VARCHAR(32),
    Street1         VARCHAR(64),
    Street2         VARCHAR(64),
    City            VARCHAR(50),
    State           VARCHAR(5),
    ZipCode         VARCHAR(10),
    --Copay           NUMBER(10, 2),
    --Deductible      NUMBER(10, 2),
    Email           VARCHAR(64),
    Password        VARCHAR(64)
);

CREATE TABLE Injuries (
    InjuryId        NUMBER PRIMARY KEY,
    Name            VARCHAR2(50),
    AvgCost         Number(10, 2)
);


/*
 * Create & initialize any/all sequence(s)
 */
CREATE SEQUENCE USER_SEQ
START WITH 1
INCREMENT BY 1;
/

CREATE SEQUENCE INJURY_SEQ
START WITH 1
INCREMENT BY 1;
/
 

/*
 * Create all triggers the database will use
 */
CREATE OR REPLACE TRIGGER USER_SEQ_TRIGGER
BEFORE INSERT ON Users
FOR EACH ROW
BEGIN
  SELECT USER_SEQ.NEXTVAL INTO :new.UserId FROM DUAL;
END;
/

CREATE OR REPLACE TRIGGER INJURY_SEQ_TRIGGER
BEFORE INSERT ON Injuries
FOR EACH ROW
BEGIN
  SELECT INJURY_SEQ.NEXTVAL INTO :new.InjuryId FROM DUAL;
END;
/
 
 
/*
 * Create any stored procedures/functions
 */
-- FIXME

 
/*
 * Commit all changes, exit
 */
COMMIT;
EXIT;

