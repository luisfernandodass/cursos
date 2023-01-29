- create container
docker run --name test-mysql -e MYSQL_ROOT_PASSWORD=pwd -d mysql:oracle

- create container with volume
docker run -d -p 5050:5050 --name mysql -e MYSQL_ROOT_PASSWORD=pwd -e MYSQL_DATABASE=dbmysql -e MYSQL_USER=user -e MYSQL_PASSWORD=pwd --mount type=volume,source=database,target=/app mysql:oracle

- container observability
docker container inspect 02a37aefb899

docker container stats

docker container logs -f 02a37aefb899