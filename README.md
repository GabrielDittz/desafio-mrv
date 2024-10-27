# Meu Projeto

Desafio para vaga na mrv.

## Estrutura do Projeto

Este repositório contém duas partes principais:
- **Frontend**: Aplicação desenvolvida em React.
- **Backend**: API desenvolvida em .NET Core.
  
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
   - cd Api-desafio-mrv
   - dotnet restore
   - dotnet run

2. Se as migrations já estiverem incluídas no projeto, você pode aplicar as migrations utilizando o comando:
- dotnet ef database update

3. Os dados devem ser inseridos a mão para utilizar a aplicação. 
Exemplo:

INSERT INTO Leads (ContactFirstName, ContactLastName, ContactPhoneNumber, ContactEmail, DateCreated, Suburb, Category, Description, Price, Status)
VALUES
    ('Olivia', 'Hernandez', '555-666-7777', 'olivia.hernandez@example.com', GETDATE(), 'Maple District', 'Education', 'Lead for educational services.', 750.00, 0),
    ('Ethan', 'Davis', '666-777-8888', 'ethan.davis@example.com', GETDATE(), 'Greenfield', 'Logistics', 'New logistics client.', 1100.00, 0),
    ('Ava', 'Rodriguez', '777-888-9999', 'ava.rodriguez@example.com', GETDATE(), 'Highland', 'Retail', 'Lead for retail solutions.', 560.00, 0),
    ('William', 'Lopez', '888-999-0000', 'william.lopez@example.com', GETDATE(), 'Lakeside', 'Automotive', 'Potential client for auto repair.', 780.00, 0),
    ('Isabella', 'Gonzalez', '999-000-1111', 'isabella.gonzalez@example.com', GETDATE(), 'South Hill', 'Real Estate', 'Lead for real estate services.', 1350.00, 0),
    ('James', 'Wilson', '000-111-2222', 'james.wilson@example.com', GETDATE(), 'Old Mill', 'Insurance', 'New insurance client.', 600.00, 0),
    ('Amelia', 'Anderson', '111-222-3333', 'amelia.anderson@example.com', GETDATE(), 'Brookside', 'Healthcare', 'Healthcare lead.', 1150.00, 0),
    ('Mason', 'Thomas', '222-333-4444', 'mason.thomas@example.com', GETDATE(), 'Mountain View', 'Construction', 'Construction services lead.', 920.00, 0),
    ('Harper', 'Moore', '333-444-5555', 'harper.moore@example.com', GETDATE(), 'River Bend', 'Consulting', 'Lead for business consulting.', 880.00, 0),
    ('Alexander', 'Jackson', '444-555-6666', 'alexander.jackson@example.com', GETDATE(), 'Elmwood', 'Financial', 'Financial advisory lead.', 1250.00, 0),
    ('Mia', 'Martin', '555-666-7777', 'mia.martin@example.com', GETDATE(), 'Northgate', 'Technology', 'Technology services lead.', 990.00, 0),
    ('Daniel', 'Lee', '666-777-8888', 'daniel.lee@example.com', GETDATE(), 'Parkwood', 'Education', 'Lead for tutoring services.', 450.00, 0),
    ('Sophia', 'Perez', '777-888-9999', 'sophia.perez@example.com', GETDATE(), 'Garden Valley', 'Catering', 'Lead for event catering.', 300.00, 0),
    ('Benjamin', 'Kim', '888-999-0000', 'benjamin.kim@example.com', GETDATE(), 'Sunnyvale', 'Retail', 'Retail lead for furniture.', 590.00, 0),
    ('Ella', 'Patel', '999-000-1111', 'ella.patel@example.com', GETDATE(), 'Eastwood', 'Legal', 'Legal consultation lead.', 1400.00, 0);

### Frontend

1. Navegue até a pasta do frontend:
   - cd lead-management
   - npm install
   - npm start
