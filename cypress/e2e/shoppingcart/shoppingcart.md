## Funcionalidade: Página de Carrinho de Compras

  ## Cenário: Redirecionar para a página de produtos ao clicar em "Continuar Comprando"
    Quando o usuário clicar em "Continuar Comprando"
    Então o usuário deve ser redirecionado para a página de produtos

  ## Cenário: Realizar compra com sucesso e exibir mensagem de sucesso
    Quando o usuário realiza a compra preenchendo as informações e clicando nos botões relevantes
    Então a compra deve ser realizada com sucesso
    E a mensagem de sucesso deve ser exibida

  ## Cenário: Exibir mensagem de validação ao tentar realizar a compra sem preencher o Nome
    Quando o usuário realiza a compra sem preencher o campo "Nome"
    Então uma mensagem de validação deve ser exibida informando que o Nome é obrigatório

  ## Cenário: Exibir mensagem de validação ao tentar realizar a compra sem preencher o Sobrenome
    Quando o usuário realiza a compra sem preencher o campo "Sobrenome"
    Então uma mensagem de validação deve ser exibida informando que o Sobrenome é obrigatório

  ## Cenário: Exibir mensagem de validação ao tentar realizar a compra sem preencher o CEP
    Quando o usuário realiza a compra sem preencher o campo "CEP"
    Então uma mensagem de validação deve ser exibida informando que o CEP é obrigatório

  ## Cenário: Retornar à página do carrinho de compras ao clicar em "Cancelar"
    Quando o usuário realiza a compra preenchendo as informações e clicando nos botões relevantes
    E o usuário clica em "Cancelar"
    Então o usuário deve ser redirecionado para a página do carrinho de compras

  ## Cenário: Retornar à página de produtos ao clicar em "Cancelar" após preencher informações de compra
    Quando o usuário realiza a compra preenchendo as informações e clicando nos botões relevantes
    E o usuário clica em "Continuar"
    E o usuário clica em "Cancelar"
    Então o usuário deve ser redirecionado para a página de produtos

  ## Cenário: Verificar se os produtos adicionados na página de checkout têm o mesmo nome e preço da tela de produtos
    Quando o usuário adiciona produtos ao carrinho e vai para a página de checkout
    Então os produtos na página de checkout devem ter o mesmo nome e preço da tela de produtos
  
  ## Cenário: Tentativa de finalizar a compra sem produtos no carrinho
    Dado que estou na página do carrinho
    Quando clico no botão "Checkout"
    Então uma mensagem de erro é exibida informando que o carrinho está vazio

  ## Cenário: Efetuar a compra de dois produtos
    Dado que o usuário está na página de produtos
    Quando o usuário adiciona os seguintes produtos ao carrinho:
    Então os produtos são exibidos no carrinho com os nomes e preços corretos
    E o usuário finaliza a compra
    Então a compra é realizada com sucesso
