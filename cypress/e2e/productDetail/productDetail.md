# Funcionalidade: Página de Detalhe do Produto

  ## Cenário: Verificar nome e preço na tela de detalhes
    Dado que estou na página de detalhe do produto
    Então o nome e o preço devem ser iguais aos da página de produtos

  ## Cenário: Adicionar primeiro produto ao carrinho e verificar nome e valor
    Dado que estou na página de detalhe do produto
    Quando adiciono o produto ao carrinho
    Então o produto adicionado deve ter o mesmo nome e valor no carrinho

  ## Cenário: Remover primeiro produto do carrinho a partir da tela de detalhes
    Dado que estou na página de detalhe do produto
    Quando removo o produto do carrinho
    Então o produto deve ser removido com sucesso do carrinho

  ## Cenário: Adicionar primeiro produto ao carrinho a partir da tela de detalhes e finalizar a compra com sucesso
    Dado que estou na página de detalhe do produto
    Quando adiciono o produto ao carrinho
    E finalizo a compra com sucesso
    Então a compra deve ser concluída com sucesso
