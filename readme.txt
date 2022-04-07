# CONJUNTO BASICO
npn init
npn install axios
npn install express


# npn install pm2 ou apt install pm2
#
#
pm2 start frontend.js -i 2
pm2 start backend.js -i 4


# TESTE DIRETO NO BACKEND SEM TAXA DE ERRO
echo "GET http://127.0.0.1:3000/sdata.json" | ./vegeta attack -rate 2000 -connections 500 -duration 30s | ./vegeta encode | ./vegeta report

# Requests      [total, rate, throughput]         60000, 2000.04, 2000.02
# Duration      [total, attack, wait]             30s, 29.999s, 242.73µs
# Latencies     [min, mean, 50, 90, 95, 99, max]  163.829µs, 260.842µs, 232.923µs, 303.749µs, 370.692µs, 724.298µs, 13.43ms
# Bytes In      [total, mean]                     312120000, 5202.00
# Bytes Out     [total, mean]                     0, 0.00
# Success       [ratio]                           100.00%
# Status Codes  [code:count]                      200:60000  
# Error Set:


# TESTE COM KEEP ALIVE ----> TEM A TENDENCIA DE GERAR MENOS STRESS NO AMBIENTE.
echo "GET http://127.0.0.1:3001/teste.json" | ./vegeta attack -rate 2000 -connections 500 -duration 30s | ./vegeta encode | ./vegeta report

# Requests      [total, rate, throughput]         60000, 2000.04, 1999.96
# Duration      [total, attack, wait]             30.001s, 29.999s, 1.138ms
# Latencies     [min, mean, 50, 90, 95, 99, max]  595.392µs, 2.001ms, 1.055ms, 2.597ms, 4.844ms, 18.059ms, 338.946ms
# Bytes In      [total, mean]                     312120000, 5202.00
# Bytes Out     [total, mean]                     0, 0.00
# Success       [ratio]                           100.00%
# Status Codes  [code:count]                      200:60000  

# total de  163 portas abertas simuntaneamente em time wait, media de 2ms !!


# TESTE SEM KEEPALIVE  ----> VAI GERAR MUITO MAIS CARGA
echo "GET http://127.0.0.1:3001/teste2.json" | ./vegeta attack -rate 2000 -connections 500 -duration 30s | ./vegeta encode | ./vegeta report

# Requests      [total, rate, throughput]         60000, 2000.03, 1999.91
# Duration      [total, attack, wait]             30.001s, 30s, 1.78ms
# Latencies     [min, mean, 50, 90, 95, 99, max]  1.121ms, 11.2ms, 3.562ms, 23.546ms, 57.751ms, 105.283ms, 692.802ms
# Bytes In      [total, mean]                     312120000, 5202.00
# Bytes Out     [total, mean]                     0, 0.00
# Success       [ratio]                           100.00%
# Status Codes  [code:count]                      200:60000  

# total de  14200 portas abertas simuntaneamente em time wait media de 11ms ! o tempo
# para abrir uma nova conexao sem necessidade impacta no tempo de resposta da aplicacao


# OBS
json random data: https://json-generator.com/#
limitando cpu https://www.makeuseof.com/how-to-limit-cpu-usage-of-a-process-in-linux-with-cpulimit/

# THOUGHTS
Kaoe Coito

# validar !! https://github.com/node-modules/agentkeepalive
parece ser a solucao definitiva !
