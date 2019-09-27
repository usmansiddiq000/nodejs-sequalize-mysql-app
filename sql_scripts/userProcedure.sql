/* to run it in cmd from file
mysql -u 'root' -p test < sql_scripts/userProcedure.sql //test is db name

*/


DROP PROCEDURE IF EXISTS getUsers;
DELIMITER $$
CREATE PROCEDURE getUsers()
BEGIN
SELECT * from Users WHERE name = 'test';
END $$
DELIMITER ;


/**
Store procedure for input values
*/
DROP PROCEDURE IF EXISTS getUsersWithInput;
DELIMITER $$
CREATE PROCEDURE getUsersWithInput(IN UserId INT)
BEGIN
SELECT * from Users WHERE id = UserId;
END $$
DELIMITER ;

