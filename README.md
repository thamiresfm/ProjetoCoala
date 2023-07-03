# Projeto da Coala

Instalando Cypress e Dependências do Projeto, e Rodando com Allure Reports
Neste tutorial, você aprenderá a instalar Cypress, instalar as dependências do projeto e rodar o projeto utilizando Allure Reports.

Requisitos de sistema
Sistema Operacional
Cypress é uma aplicação desktop instalada em seu computador. A aplicação desktop suporta os seguintes sistemas operacionais:

macOS 10.9 e superior (somente 64-bit)
Linux Ubuntu 12.04 e superior, Fedora 21 e Debian 8 (somente 64-bit)
Windows 7 e superior
Node.js
Se você está utilizando npm para instalar o Cypress, nós suportamos:

Node.js 12 ou 14 e superior
Instalando Cypress
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

Instalando e Rodando com Allure Reports
Allure Reports é uma solução de relatórios de teste de código aberto que cria relatórios visuais claros.

Instalando Allure Reports
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
Rodando o projeto com Allure Reports
Rode seus testes e gere um relatório com o seguinte comando:

bash
Copy code
npm run test && npm run allure:report
Note que a maneira como os resultados do teste são exportados para o Allure pode variar dependendo do framework de teste que você está usando. Para mais detalhes, consulte a documentação do seu framework de teste ou a documentação oficial do Allure.
