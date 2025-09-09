## Tuturial de como acessar o back-end desta atividade


## 1. Acessar o repositório

Acesse o repositório do projeto (https://github.com/jessicaprestelo1201/Atividade-Back-end-2025)

## 2. Clonar o repositório

Clonar o repositório para sua máquina local

## 3. Criar o arquivo .env com as seguintes variáveis de ambiente:

PORT= 5000
DATABASE_URL= "file:./dev.db"
JWT_SECRET=  "sarah best friend forever"

## 4. Após clonar o repositório, acesse o terminal e de o seguinte comando:

npm install

## 5. Após  dar o comando npm install, execute o seguinte comando:

npx prisma migrate dev

## 6. Após executar o comando npx prisma migrate dev, execute o seguinte comando:

npm run dev

## 7. Acesse o thunder client ou o postman e acesse a seguinte url no GET: 

- http://localhost:5000/musics

## 8. Acesse o thunder client ou o postman e acesse a seguinte url no POST:

- http://localhost:5000/musics

Body:

{
  "title": "Video Games",
  "duration": "4:42",
  "releaseYear": 2011,
  "story": "Primeira música de sucesso da Lana Del Rey, que chamou atenção mundialmente.",
  "playbackUrl": "https://open.spotify.com/track/video-games",
  "albumId": 1
}

## 9. Acesse o thunder client ou o postman e acesse a seguinte url no PUT:

- http://localhost:5000/musics/2

Body:

{
  "title": "Video Games",
  "duration": "4:42",
  "releaseYear": 2011,
  "story": "Primeira música de sucesso da Lana Del Rey, que chamou atenção mundialmente.",
  "playbackUrl": "https://open.spotify.com/track/video-games",
  "albumId": 1
}

## 10. Acesse o thunder client ou o postman e acesse a seguinte url no DELETE:

- http://localhost:5000/musics/2

Body:

{
  "title": "Video Games",
  "duration": "4:42",
  "releaseYear": 2011,
  "story": "Primeira música de sucesso da Lana Del Rey, que chamou atenção mundialmente.",
  "playbackUrl": "https://open.spotify.com/track/video-games",
  "albumId": 1
}

