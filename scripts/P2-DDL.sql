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
IDENTIFIED BY p4ssw0rd123
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

conn healme_admin/p4ssw0rd123


/*
 * Defines and creates the tables
 */
CREATE TABLE Hospitals (
    HospitalId      NUMBER PRIMARY KEY,
    Name            VARCHAR2(65),
    Address         VARCHAR2(100) NOT NULL
);

CREATE TABLE Injuries (
    InjuryId        NUMBER PRIMARY KEY,
    Name            VARCHAR2(50)
);

CREATE TABLE Treatments (
    HospitalId_FK   NUMBER,
    InjuryId_FK     NUMBER,
    Cost            NUMBER(8, 2),
    FOREIGN KEY (HospitalId_FK) REFERENCES Hospitals(HospitalId),
    FOREIGN KEY (InjuryId_FK) REFERENCES Injuries(InjuryId)
);


/*
 * Create & initialize any/all sequence(s)
 */
-- FIXME
 

/*
 * Create all triggers the database will use
 */
-- FIXME
 
 
/*
 * Create any stored procedures/functions
 */
-- FIXME

 
/*
 * Commit all changes, exit
 */
COMMIT;
EXIT;

