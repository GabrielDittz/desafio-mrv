# Meu Projeto

Desafio para vaga na mrv.

## Estrutura do Projeto

Este repositório contém duas partes principais:
- **Frontend**: Aplicação desenvolvida em React.
- **Backend**: API desenvolvida em .NET Core.
- 
## Tecnologias Utilizadas

- **Frontend**:
  - React
  - Axios para requisições HTTP

- **Backend**:
  - .NET Core 6
  - Entity Framework Core
  - SQL Server

## Pré-requisitos

Para executar este projeto em sua máquina, você precisará de:

- [Node.js](https://nodejs.org/) (versão >= 14)
- [npm](https://www.npmjs.com/)
- [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

## Instalação

### Backend

1. Navegue até a pasta do backend:
   ```bash
   cd Api-desafio-mrv
   dotnet restore
   dotnet run

### Aplicando Migrations

Se as migrations já estiverem incluídas no projeto, você pode aplicar as migrations utilizando o comando:

```bash
dotnet ef database update

### Frontend

1. Navegue até a pasta do frontend:
   ```bash
   cd lead-management
   npm install
   npm start
