## Tuturial de como acessar esta atividade


## 1. Acessar o repositório

Acesse o repositório back do projeto (https://github.com/jessicaprestelo1201/Atividade-Back-end-2025)

Acesse o repositório front do projeto (https://github.com/jessicaprestelo1201/front-da-atividade-back-end)

## 2. Clonar o repositório

Clone os dois repositórios para que possamos acessar os arquivos do front e do back

## 3. No repositorio back, crie um arquivo .env e preencha os campos com os seguintes valores:

PORT= 5000
DATABASE_URL= "file:./dev.db"
JWT_SECRET=  "sarah best friend forever"

## 4. Após clonar ambos os repositório, acesse o terminal de ambos e execute o seguinte comando:

npm install


## 5. Após executar o comando npm install em ambos os repositórios, acesse o terminal do back e do front e execute o seguinte comando:'

npm run dev

## 7. No Back-end acesse o thunder client ou o postman e acesse a seguinte url:

- http://localhost:5000/musics

## 8. No back-end acesse o thunder client ou o postman e acesse a seguinte url no POST:

- http://localhost:5000/musics

- Exemplo de dados:

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

