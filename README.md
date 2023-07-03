#Projeto Coala
Instalando o Cypress e Dependências do Projeto, e Executando com Allure Reports
Neste tutorial, você aprenderá como instalar o Cypress, instalar as dependências do projeto e executar o projeto usando o Allure Reports.

Requisitos de Sistema
Sistema Operacional
O Cypress é um aplicativo desktop instalado no seu computador. O aplicativo suporta os seguintes sistemas operacionais:

macOS 10.9 e superior (somente 64-bit)
Linux Ubuntu 12.04 e superior, Fedora 21 e Debian 8 (somente 64-bit)
Windows 7 e superior
Node.js
Se você está utilizando o npm para instalar o Cypress, nós suportamos:

Node.js 12 ou 14 e superior
Instalando o Cypress
Usando npm

bash
Copy code
npm install cypress --save-dev
Fazendo download a partir do repositório
Siga as instruções no repositório oficial do Cypress.

Instalando Dependências do Projeto
As dependências do projeto podem ser instaladas usando o npm. No diretório raiz do seu projeto, execute o seguinte comando:

bash
Copy code
npm install
Este comando lê o arquivo package.json do seu projeto e instala todas as dependências listadas.

Instalando e Executando com Allure Reports
O Allure Reports é uma solução de relatórios de teste de código aberto que cria relatórios visuais claros.

Instalando o Allure Reports
Instale o allure-commandline como uma dependência de desenvolvimento:

bash
Copy code
npm install --save-dev allure-commandline
Adicione o seguinte script ao seu arquivo package.json para gerar e abrir o relatório:

json
Copy code
{
  "scripts": {
    "allure:report": "allure generate && allure open"
  }
}
Executando o projeto com Allure Reports
Rode seus testes e gere um relatório com o seguinte comando:

bash
Copy code
