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

## Cénarios de Teste: Resuldado de Casos de teste automatizados

### Funcionalidade: Página de Login

| Cenário de Teste                                        | Resultado | Descrição do erro |                                                                                                                                                                                                                                                 
| :------------------------------------------------------ | :-----------------------|:------------------|
| `Login inválido exibe mensagem de erro`                 | :white_check_mark:      |                   |
| ` Senha inválida exibe mensagem de erro`                |	:white_check_mark:      |                   |
| ` Usuário bloqueado exibe mensagem de erro`             |	:white_check_mark:      |                   |
| ` Logout retorna para a tela de login`                  |	:white_check_mark:      |                   |


### Funcionalidade: Página do produto

| Cenário de Teste                                               | Resultado | Descrição do erro |                                                                                                                                                                                                                                                 
| :--------------------------------------------------------------| :------------------|:------------------|
| `Verificar a ordenação correta dos produtos`                   | 	:white_check_mark:|                   |
| ` Adicionar um produto ao carrinho e verificar nome e preço`   |	:white_check_mark:|                   |
| ` Remover um produto do carrinho e verificar se foi removido`  | 	:white_check_mark:|                   |

### Funcionalidade: Página de Detalhe do Produto

| Cenário de Teste                                                                                       | Resultado | Descrição do erro |                                                                                                                                                                                                                                                 
| :------------------------------------------------------------------------------------------------------| :------------------|:------------------|
| `Verificar nome e preço na tela de detalhes`                                                           |	:white_check_mark:|                   |
| ` Adicionar primeiro produto ao carrinho e verificar nome e valor`                                     |	:white_check_mark:|                   |
| ` Remover primeiro produto do carrinho a partir da tela de detalhes`                                   | 	:white_check_mark:|                   |
| ` Adicionar primeiro produto ao carrinho a partir da tela de detalhes e finalizar a compra com sucesso`| 	:white_check_mark:|                   |



### Funcionalidade: Página de Carrinho de Compras

| Cenário de Teste                                                                                           | Resultado | Descrição do erro |                                                                                                                                                                                                                                                 
| :----------------------------------------------------------------------------------------------------------| :------------------|:------------------------------------------------------------------|
| ` Redirecionar para a página de produtos ao clicar em "Continuar Comprando"`                               |	:white_check_mark:|                                                                   |
| ` Realizar compra com sucesso e exibir mensagem de sucesso`                                                |	:white_check_mark:|                                                                   |
| ` Exibir mensagem de validação ao tentar realizar a compra sem preencher o Nome`                           |	:white_check_mark:|                                                                   |
| ` Exibir mensagem de validação ao tentar realizar a compra sem preencher o Sobrenome`                      |	:white_check_mark:|                                                                   |
| ` Exibir mensagem de validação ao tentar realizar a compra sem preencher o CEP"`                           |	:white_check_mark:|                                                                   |
| ` Retornar à página do carrinho de compras ao clicar em "Cancelar"`                                        |	:white_check_mark:|                                                                   |
| ` Retornar à página de produtos ao clicar em "Cancelar" após preencher informações de compra`              | 	:white_check_mark:|                                                                   |
| ` Verificar se os produtos adicionados na página de checkout têm o mesmo nome e preço da tela de produtos` | 	:white_check_mark:|                                                                   |
| ` Tentativa de finalizar a compra sem produtos no carrinho`                                                |	:x:               |  Mesmo sem produtos é possivel efetuar compras.                   |
| ` Efetuar a compra de dois produtos`                                                                       | 	:white_check_mark:|                                                                   |
