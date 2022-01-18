## ANALISIS

Revisando los datos concluimos que:

**-El proceso bloqueante (performance analizada con console.log) conlleva mas gasto de recursos que la no bloqueante (sin console.log), debido a que requiere mas ticks y casi el doble de cantidad de librerias compartidas.**

## BLOQUEANTE:

`````
[Summary]:
   ticks  total  nonlib   name
      8    0.1%  100.0%  JavaScript
      0    0.0%    0.0%  C++
     22    0.3%  275.0%  GC
   7859   99.9%          Shared libraries
`````


## NO BLOQUEANTE:

`````
[Summary]:
   ticks  total  nonlib   name
      7    0.0%  100.0%  JavaScript
      0    0.0%    0.0%  C++
     27    0.2%  385.7%  GC
  15656  100.0%          Shared libraries
`````

**-Asimismo, podemos ver que con un proceso bloqueante consume mas tiempo y su lectura es mucho mas lenta, logrando entonces dentro del mismo periodo de tiempo leer menor cantidad de bytes en un caso y otro.**


## BLOQUEANTE:

`````
Running all benchmarks in parallel...
Running 20s test @ http://localhost:8081/info
100 connections

┌─────────┬───────┬───────┬────────┬────────┬──────────┬──────────┬────────┐   
│ Stat    │ 2.5%  │ 50%   │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │   
├─────────┼───────┼───────┼────────┼────────┼──────────┼──────────┼────────┤   
│ Latency │ 21 ms │ 54 ms │ 144 ms │ 183 ms │ 62.84 ms │ 29.19 ms │ 355 ms │   
└─────────┴───────┴───────┴────────┴────────┴──────────┴──────────┴────────┘   
┌───────────┬────────┬────────┬─────────┬─────────┬─────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Req/Sec   │ 811    │ 811    │ 1789    │ 1993    │ 1578.2  │ 408.95 │ 811    │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Bytes/Sec │ 604 kB │ 604 kB │ 1.33 MB │ 1.48 MB │ 1.17 MB │ 304 kB │ 603 kB │
└───────────┴────────┴────────┴─────────┴─────────┴─────────┴────────┴────────┘

Req/Bytes counts sampled once per second.

32k requests in 20.09s, 23.5 MB read
`````

## NO BLOQUEANTE:

`````
Running all benchmarks in parallel...
Running 20s test @ http://localhost:8081/info
100 connections

┌─────────┬───────┬───────┬────────┬────────┬──────────┬──────────┬────────┐ 
│ Stat    │ 2.5%  │ 50%   │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │ 
├─────────┼───────┼───────┼────────┼────────┼──────────┼──────────┼────────┤ 
│ Latency │ 21 ms │ 63 ms │ 177 ms │ 216 ms │ 71.37 ms │ 34.53 ms │ 435 ms │ 
└─────────┴───────┴───────┴────────┴────────┴──────────┴──────────┴────────┘ 
┌───────────┬────────┬────────┬────────┬────────┬─────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg     │ Stdev  │ Min    │
├───────────┼────────┼────────┼────────┼────────┼─────────┼────────┼────────┤
│ Req/Sec   │ 636    │ 636    │ 1613   │ 1740   │ 1390.95 │ 369.99 │ 636    │
├───────────┼────────┼────────┼────────┼────────┼─────────┼────────┼────────┤
│ Bytes/Sec │ 474 kB │ 474 kB │ 1.2 MB │ 1.3 MB │ 1.04 MB │ 276 kB │ 474 kB │
└───────────┴────────┴────────┴────────┴────────┴─────────┴────────┴────────┘

Req/Bytes counts sampled once per second.

28k requests in 20.09s, 20.7 MB read
`````

**-Por otro lado, vemos que los graficos lanzan algunas diferencias. En el caso del proceso bloqueante (con el log), las puntas llegan mas arriba, lo cual nos indica que los procesos estan mas anidados; asi como tambien se observa que el proceso no bloqueante (sin el log) tiene mayor cantidad de picos, mostrandonos que su planitud es menor y los procesos duran menor tiempo.**

## BLOQUEANTE:


![](/graphs/conlog.PNG)


## NO BLOQUEANTE:

![](/graphs/sinlog.PNG)



**-Ademas, podemos observar la diferencia en cuanto a tiempos. Con un proceso bloqueante, la sumatoria de los milisegundos nos da un total de 54.4 ms, y sin el, es de 38.1 ms. Incluso los mismos procesos, pueden llegar a durar mas tiempo.**

## BLOQUEANTE:


![](/graphs/inspectconlog.PNG)

## NO BLOQUEANTE:


![](/graphs/inspectsinlog.PNG)



**-Finalmente, la conclusion primordial es que un console.log unico no modifica tanto los valores entre un modelo y otro.**