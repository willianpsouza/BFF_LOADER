echo "GET http://127.0.0.1:3001/teste2.json" | ./vegeta attack -rate 2000 -connections 1000 -duration 1800s | ./vegeta encode | ./vegeta report


Basicamente a forma mais limpa de fazer um BFF 