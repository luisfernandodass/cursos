- cmd to create 
docker run --name test-mysql -e MYSQL_ROOT_PASSWORD=pwd -d mysql:oracle

docker run -d -p 5050:5050 --name mysql -e MYSQL_ROOT_PASSWORD=pwd -e MYSQL_DATABASE=dbmysql -e MYSQL_USER=user -e MYSQL_PASSWORD=pwd --mount type=volume,source=database,target=/app mysql:oracle