# myreactapp_docker

docker system info // chcek ข้อมูล docker in macchine  
docker system df // chcek ฐานข้อมูลที่ใช้ไปทั้งหมด  
docker system events // show detail in server ใช้ view ตอนที่มี ปัญหา

docker images // check image in my macchine
docker image ls // check image in my macchine
docker image inspect // view data in image
docker image rm <name> // ลบ image
docker image prune --all // ลบที่ไม่ได้ใช้ image ทั้งหมด

docker run hello-world
docker stop <CONTAINER ID> // ปิด
docker start -a // start -a จะแสดงผล
docker rm <CONTAINER ID> // ลบ containers

docker system prune // ลบทั้งหมด containers, networks, dangling, build cache

docker ps // ดูคำสั่งที่กำลัง run
docker ps --all // ดูคำสั่งที่กำลัง run
docker ps --all --filter "status=exited" // สามารถกรองข้อมูลได้

docker exec -it <CONTAINER ID> sh // ไม่เห็น root
docker exec -it <CONTAINER ID> bash // เห็น root บอกว่า user ในใช้งานอยู่

docker run -p 80:80 nginx // ping ให้กัน
docker run -d -p 8000:80 nginx // -d ทำให้เราพิมคำสั่งต่อไปได้
docker run --name <name> -p 7000:80 nginx // --name ตั้งชื่อได้

docker logs <ID> // ดู log containers
docker logs -f <ID> // ดู log containers ไม่ต้องกดดู

docker network create <name> // สร้าง network in local
docker network ls // check network in local

docker run --name mysql -e MYSQL_ROOT_PASSWORD=1111 -d mysql- // run containers mysql

docker run --name pma -p 8888:80 -e PMA_ARBITRARY=1 -d phpmyadmin/phpmyadmin // run containers phpmyadmin

docker network connect <name network> <ตัวที่ต้องการ cinnect> // เชื่อม network ให้อยู่วงเดียวกัน
docker network inspect <name network> // view data network

docker run --name wordpress -p 888:80 --network wordpress -e WORDPRESS_DB_HOST=mysql -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=1111 -d wordpress // connect wordpress -

docker volume crete <name volume> // สร้าง volume เพื่อเก็บไฟล์ต่างๆ ใน containers
docker volume rm <name volume> , <name volume> // ลบ volume

docker container inspect <name container> // view data container

docker build . // สร้าง image
docker build . -t <name> // สร้าง image แบบกำหนดชื่อ
docker build . -t <name>:verion // สร้าง image แบบกำหนดชื่อและใส่เลข verion

mongo -u "admin" -p "1111" --authenticationDatabase "admin" // เข้าไปใน mongo
use <shoppers>
db.<products>.find().pretty();

apk-get update // update containers in OS
apt-get install vim // ลง vim เพื่อใช้คำสั่ง vi สร้างไฟล์ได้่

cat <name file> // เปิดไฟล์ดู

// ใช้ docker-compose
docker-compose config // check file docker-compose
docker-compose config -q // check file docker-compose
docker-compose up // run
docker-compose up -d // run -d
docker-compose up -f <name file> // run
docker-compose down // ปิด
docker-compose up --no-start // ยังไม่ต้อง start container
docker-compose start // start
docker-compose stop // stop

docker-compose uo -d --build // เมื่อการแก้ไข

// CREATE CONTAINERS ------------------------------------------------------------------------
docker create <image>
// START CONTAINERS -------------------------------------------------------------------------
docker start <container>
// WATCH OUTPUT THEN PUT IT TO TERMINAL
docker start -a <container>

// STOPPING CONTAINERS ----------------------------------------------------------------------
docker stop <container>

// LISTING IMAGES
docker images
docker image ls

// REMOVE IMAGES
docker image rm <image>

// REMOVING UNUSED IMAGES --------------------------------------------------------------
docker image prune
docker image prune --all

// INSPECT IMAGE
docker image inspect <image>
// INSPECT IMAGE FILTER
docker image inspect -f <word> <image>

// RUN CONTAINERS ---------------------------------------------------------------------------
// docker run = docker create + docker start
docker run <image>

// OVERRIDING DEFAULT COMMANDS --------------------------------------------------------------
docker run <image> <command>
// PORT MAPPING
docker run -p <local port>:<container port> <image>
// RUNNING IN BACKGROUND
docker run -d <image>
// ASSIGN CONTAINER NAME
docker run --name <container name>
// RUNNING WITH INTERACTIVE
docker run -it <container> <command>

// LISTING RUNNING CONTAINERS ---------------------------------------------------------------
docker ps
docker ps --all

// REMOVING STOPPED CONTAINERS --------------------------------------------------------------
docker system prune
// SHOW DOCKER DISK USAGE -------------------------------------------------------------------
docker system df
// GET REAL TIME EVENTS FROM THE SERVER -----------------------------------------------------
docker system events
// DISPLAY SYSTEM-WIDE INFORMATION ----------------------------------------------------------
docker system info

// RETRIEVING LOG OUTPUTS -------------------------------------------------------------------
docker logs <container>

// EXECUTING COMMANDS IN RUNNING CONTAINERS -------------------------------------------------
docker exec -it <container> <command>
docker exec -it <container> sh
docker exec -it <container> redis-cli
