-- This makes sure that foreign_key constraints are observed and that errors will be thrown for violations
PRAGMA foreign_keys=ON;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS data(
    u_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(45) NOT NULL,
    company VARCHAR(255) NOT NULL,
    branch VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    year VARCHAR(255) NOT NULL

);
-- CREATE TABLE IF NOT EXISTS post (
--     p_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
--     title VARCHAR(255) NOT NULL,
--     subtitle VARCHAR(255) NOT NULL,
--     content VARCHAR(1000) NOT NULL,
--     date_created DATETIME ,
--     date_modified DATETIME ,
--     date_published DATETIME ,
--     u_id INTEGER NOT NULL,
--     comment_count DEFAULT 0,
--     is_published  BIT DEFAULT 0,
--     likes INTEGER NOT NULL DEFAULT 0,
--     CONSTRAINT u_id
--     FOREIGN KEY (u_id) REFERENCES user(u_id)
--     ON DELETE CASCADE
--     ON UPDATE CASCADE
-- );
-- CREATE TABLE IF NOT EXISTS comment (
--     c_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  
--     content VARCHAR(1000) NOT NULL,
--     date_created DATETIME,
    
--     u_id INTEGER ,
--     p_id INTEGER NOT NULL  REFERENCES post(p_id) ON DELETE CASCADE,
--     CONSTRAINT u_id
--     FOREIGN KEY (u_id) REFERENCES user(u_id)
--     ON DELETE SET NULL 
    
-- );
-- CREATE TABLE IF NOT EXISTS likedata (
    
--     u_id INTEGER NOT NULL ,
--     p_id INTEGER NOT NULL  
 
     
    
    
-- );



-- CREATE TABLE IF NOT EXISTS testUsers (
--     test_user_id INTEGER PRIMARY KEY AUTOINCREMENT,
--     test_name TEXT NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS testUserRecords (
--     test_record_id INTEGER PRIMARY KEY AUTOINCREMENT,
--     test_record_value TEXT NOT NULL,
--     test_user_id  INT, --the user that the record belongs to
--     FOREIGN KEY (test_user_id) REFERENCES testUsers(test_user_id)
-- );

--insert default data (if necessary here)

-- INSERT INTO testUsers ("test_name") VALUES ("Simon Star");
-- INSERT INTO testUserRecords ("test_record_value", "test_user_id") VALUES( "Lorem ipsum dolor sit amet", 1); --try changing the test_user_id to a different number and you will get an error

COMMIT;

