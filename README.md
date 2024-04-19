# E-commerce: Estrutura e Tecnologias

Este repositório contém a estrutura e os arquivos essenciais para uma aplicação de e-commerce, desenvolvida com o framework NestJs, utilizando TypeScript e Docker para a orquestração de contêineres.

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

-- Execução dos testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Observações

- Este README fornece uma visão geral do sistema e sua estrutura. Para detalhes sobre a implementação de cada módulo, consulte os arquivos de código-fonte.
- Certifique-se de ter o Docker instalado e em execução para criar e executar os contêineres conforme descrito neste documento.
