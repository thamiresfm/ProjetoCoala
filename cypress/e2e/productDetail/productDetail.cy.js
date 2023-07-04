let testData

beforeEach(()=> {
  cy.visit('/')

  // aonde fica a massa de dados
  cy.fixture("testData").then(t => {
    testData = t
    cy.login(testData.login)
  })
})

describe('Pagina de Detaalhe do Produto', () => {
  it('Deve verificar se o nome e o preço na tela de detalhes são iguais aos da página de produtos', () => {    
    // Verifique o nome e o preço na tela de detalhes
    cy.verifyProductDetails()
  })

  it('Deve adicionar o primeiro produto ao carrinho e verificar se o nome e valor são os mesmos', () => {
    cy.addToCartFromProductDetails() // Adiciona o primeiro produto ao carrinho

  })

  it('Deve remover o primeiro produto ao carrinho', () => {
    cy.removeFromCartFromProductDetails() //Adciona e Remove o produto e verifica se foi removido
  })

  it('Deve adicionar o primeiro produto ao carrinho a partir da tela de detalhes e finalizar a compra com sucesso', () => {
    // Adiciona o produto ao carrinho a partir da tela de detalhes
    cy.addToCartFromProductDetailsAndCheckout()

    // Preenche as informações de envio e finaliza a compra
    cy.completePurchase(testData.information.firstName, testData.information.lastName, testData.information.postalCode)

  })
})