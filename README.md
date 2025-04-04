## Desafio-VNW

https://desafio-vnw-three.vercel.app/

Esta é uma API em Python que permite aos usuários doarem livros e visualizar livros disponíveis para doação. A API está construída utilizando o framework Flask, permitindo uma interface simples para interagir com a base de dados dos livros.

### Para rodar a API localmente, você precisará de:
* Node (última versão)
* Python 3.x
* Flask (framework para desenvolvimento web)
* SQLite (ou outro banco de dados de sua preferência)

### EndPoints da API
<b> 1. POST (/livros/doar) </b>

 Este endpoint permite aos usuários doar livros para a plataforma. O corpo da solicitação deve conter as informações do livro.

* Requisição:

  * Método: POST

  * URL: /doar

<b> 2. GET (/livros) </b>

 Este endpoint retorna a lista de livros disponíveis para doação.

* Requisição:

  * Método: GET

  * URL: /livros

<b> 3. DELETE (/livros/{id}) </b>

 Este endpoint permite deletar um livro existente com base no seu id.

* Requisição:

  * Método: DELETE

  * URL: /livros/{id}

### Modelo de Livro
O modelo Livro contém os seguintes campos:

* id: Identificador único do livro (inteiro, chave primária).

* titulo: Título do livro (string).

* autor: Autor do livro (string).

* genero: Gênero do livro (string).

* imagem_url: Url da imagem do livro (string).
