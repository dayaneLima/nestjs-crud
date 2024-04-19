# E-commerce: Estrutura e Tecnologias

Este repositório contém a estrutura e os arquivos essenciais para uma aplicação de e-commerce, desenvolvida com o framework NestJs, utilizando TypeScript e Docker para a orquestração de contêineres.

## Estrutura de pastas

- **files**: Contém algumas anotações.
- **src**: Código fonte da aplicação
- **test**: Testes da aplicação.
- **temp**: Pasta não rastreada pelo git, usada pelos contêineres para armazenamento de dados.

## Containeres

Os containers são divididos da seguinte forma:

- **crud-nestjs**:
  - Aplicação deste projeto. 
  - Executa na porta 8080.
- **postgres**: 
  - Banco de dados para a aplicação.
  - Executa na porta 5432.
- **pgadmin**: 
  - Não é necessária sua execução para a aplicação 
  - Interface web para visualizar registros no Postgres. 
  - Executa na porta externa 8010 e interna 8081.
- **redis**: 
  - Redis para cache. 
  - Executa na porta 6379.
- **redisinsight**: 
  - Não é necessária sua execução para a aplicação 
  - Interface web para visualizar registros no Redis. 
  - Executa na porta externa 8010 e interna 8001.

## Tecnologias Utilizadas

- **NestJs**: Principal framework utilizado na aplicação.
- **PostgreSQL**: Banco de dados escolhido para a persistência de dados.
- **Redis**: Utilizado como cache para otimização de desempenho.
- **Docker**: Plataforma utilizada para o desenvolvimento e execução de aplicativos em contêineres.

## Bibliotecas e Ferramentas

Além das bibliotecas padrão do NestJs, foram empregadas outras para desenvolvimento e teste:

- **typeorm**: ORM utilizado para interagir com o banco de dados.
- **class-validator**: Para validação de dados.
- **bcrypt**: Utilizado para a criptografia de dados.
- **nestjs/jwt**: Implementação de autenticação baseada em tokens JWT.
- **jest**: Framework de teste para TypeScript.
- **nestjs/config**: Facilita o uso de arquivo de configuração, evitando configurações estáticas no código.
- **swagger**: Usada para definir, documentar e consumir APIs REST. 

## Padrões e Práticas de Desenvolvimento

Para manter a estrutura organizada e escalável, foram adotados diversos padrões de projeto e práticas:

- **Repository Pattern**: Isolamento da lógica de acesso a dados.
- **Service Layer**: Implementação das regras de negócios e lógica de aplicação.
- **Injeção de Dependência (IoC)**: Facilita a substituição de implementações e o teste de unidades.
- **Arquitetura em Camadas**: Divisão clara entre lógica de negócios, interface do usuário e infraestrutura.
- **Princípios SOLID**: Design orientado a facilitar a manutenção e extensibilidade do código.
- **Soft Delete**: Prática de marcar registros como "excluídos" em vez de removê-los permanentemente do banco de dados.


## Instruções para Execução

- Build a imagem:
```
docker-compose build
```

- Target

  Se o target do arquivo docker-compose.yml para o service de crud-nestjs for definido como 'stage', as migrations serão executadas e a aplicação será inicializada automaticamente.

  Se o target definido como 'development', as dependências devem ser instaladas, as migrations devem ser executadas e a aplicação deve ser iniciada manualmente.

- Execute o comando para subir os containers:
```
docker-compose up -d
```

- Entrar no terminal do container
```
docker exec -it crud-nestjs bash
```

- Instalação das dependências
```bash
$ npm install
```

- Execução da aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

- Execução dos testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

- Usuário inicial

  Ao executar a migration, é criado um usuário de e-mail teste@teste.com e senha teste.

## Observações

- Este README fornece uma visão geral do sistema e sua estrutura. Para detalhes sobre a implementação de cada módulo, consulte os arquivos de código-fonte.
- Certifique-se de ter o Docker instalado e em execução para criar e executar os contêineres conforme descrito neste documento.
