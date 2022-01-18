# 1. Node

npm start FORK // Iniciar en modo fork

npm start CLUSTER // Iniciar en modo cluster

npm start // Iniciar en default (fork)

fork = 1 proceso

cluster = 4 procesos

# 2. Nodemon

nodemon server.js FORK // Iniciar en modo fork

nodemon server.js CLUSTER // Iniciar en modo cluster

nodemon server.js // Iniciar en default (fork)

tasklist // Listar desde SO (Windows)

fork = 1 proceso

cluster = 5 procesos

# 3. Forever

´´´´
forever start -w src/server.js FORK // Iniciar en modo fork

forever start -w src/server.js CLUSTER // Iniciar en modo cluster

forever start -w src/server.js // Iniciar en default (fork)

forever list // listar procesos

fork = 2 procesos 

cluster = 4 procesos

forever stopall // detener procesos de forever

´´´´

# 4. PM2

´´´´

pm2 start src/server.js --name="ServerX" -w // Iniciar en modo fork

pm2 start src/server.js --name="Server1" -w -i max // Iniciar en modo cluster

pm2 list // listar

fork = 1 proceso

cluster = 4 procesos

pm2 stop -id- // detener procesos pm2

´´´´

# 5. NGINX

nginx -t // Chequear sintaxis

nginx -s reload // Guardar modificaciones

npm start 8082 // Iniciar en puerto 8082

npm start 8083 // Iniciar en puerto 8083

npm start 8084 // Iniciar en puerto 8084

npm start 8085 // Iniciar en puerto 8085
