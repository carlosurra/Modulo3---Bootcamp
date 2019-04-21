drop function UsoVehiculo;
DELIMITER $$

CREATE FUNCTION UsoVehiculo(kilometraje decimal(10,0)) RETURNS VARCHAR(12)
    DETERMINISTIC
BEGIN
    DECLARE lvl varchar(12);
 
    IF kilometraje > 200000 THEN
 SET lvl = 'MUY GASTADO';
    ELSEIF (kilometraje <= 200000 AND kilometraje >= 10000) THEN
        SET lvl = 'USADO';
    ELSEIF kilometraje < 10000 THEN
        SET lvl = 'KM0';
    END IF;
 
 RETURN (lvl);
END



SELECT 
    matricula, 
    kilometros,
    UsoVehiculo(cast(kilometros as decimal(10,0)))
FROM
    Vehiculos
ORDER BY 
    cast(kilometros as decimal(10,0));