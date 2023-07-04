# Projeto Coala


## Instalando o Cypress e Dependências do Projeto, e Executando com Allure Reports
Neste tutorial, instalar as dependências do projeto e executar o projeto usando o Allure Reports.

## Requisitos de Sistema
### Sistema Operacional
O Cypress é um aplicativo desktop instalado no seu computador. O aplicativo suporta os seguintes sistemas operacionais:

- macOS 10.9 e superior (somente 64-bit)
- Linux Ubuntu 12.04 e superior, Fedora 21 e Debian 8 (somente 64-bit)
- Node.js
- Windows 7 e superior

Fazendo download a partir do repositório
Siga as instruções no repositório oficial do Cypress.

## Instalando Dependências do Projeto
As dependências do projeto podem ser instaladas usando o npm. No diretório raiz do seu projeto, execute o seguinte comando:


```
npm install 
```
- Este comando lê o arquivo package.json do seu projeto e instala todas as dependências listadas.
## Abrir com projeto

```
npx cypress run --env allure=true
npx cypress open
```


##	Executando com Allure Reports

Executando o projeto com Allure Reports
Rode seus testes e gere um relatório com o seguinte comando:

```
npx cypress run --env allure=true
npx allure serve
```

## Cénarios de Teste:

### Funcionalidade: Página de Login

| Cenário de Teste                            Resultado                                                                                                                                                                                                                                                  
| :---------------------------------------- | :-----|
| `Login inválido exibe mensagem de erro`   | True  |

