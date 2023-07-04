let testData

beforeEach(()=> {
  cy.visit('/')

  // aonde fica a massa de dados
  cy.fixture("testData").then(t => {
    testData = t
    cy.login(testData.login)
  })
})

describe('Página de Carrinho de Compras', () => {
  it('Deve redirecionar para a página de produtos ao clicar em "Continue Shopping"', () => {
    // Vá para a página do carrinho de compras
    cy.get('.shopping_cart_link').click();

    // Verifique o redirecionamento ao clicar em "Continuar comprando"
    cy.checkProductRedirection();
  })
  
  it('Deve realizar a compra com sucesso e exibir a mensagem de sucesso', () => {
    // Realiza a compra preenchendo as informações e clicando nos botões relevantes
    cy.carryOutPurchase(testData.information.firstName, testData.information.lastName, testData.information.postalCode)

    // Clique no botão "Continue"
    cy.get('[data-test="continue"]').click()

    // Clique no botão "Finish"
    cy.get('[data-test="finish"]').click()

    // Verifica se a compra foi realizada com sucesso (pode adicionar asserções adicionais aqui)
    cy.url().should('include', '/checkout-complete.html')

    // Verifica se a mensagem de sucesso é exibida
    cy.get('.complete-header').should('have.text', 'Thank you for your order!') // Verifica o cabeçalho da mensagem
    cy.get('.complete-text').should(
      'have.text',
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    ) // Verifica o texto completo da mensagem
  })

  it('Deve exibir mensagem de validação ao tentar realizar a compra sem preencher o Nome', () => {
    // Realiza a compra preenchendo as informações e clicando nos botões relevantes
    cy.carryOutPurchase('', testData.information.lastName, testData.information.postalCode)

    // Clique no botão "Continue"
    cy.get('[data-test="continue"]').click()

    // Verifique se a mensagem de validação é exibida corretamente para o campo "First Name"
    cy.get('.error-message-container').should('have.text', 'Error: First Name is required')
  })

  it('Deve exibir mensagem de validação ao tentar realizar a compra sem preencher o Sobrenome', () => {
    // Realiza a compra preenchendo as informações e clicando nos botões relevantes
    cy.carryOutPurchase(testData.information.firstName, '', testData.information.postalCode)

    // Clique no botão "Continue"
    cy.get('[data-test="continue"]').click()
  
    // Verifique se a mensagem de validação é exibida corretamente para o campo "Last Name"
    cy.get('.error-message-container').should('have.text', 'Error: Last Name is required')
  })

  it('Deve exibir mensagem de validação ao tentar realizar a compra sem preencher o Cep', () => {
    // Realiza a compra preenchendo as informações e clicando nos botões relevantes
    cy.carryOutPurchase(testData.information.firstName, testData.information.lastName, '')

    // Clique no botão "Continue"
    cy.get('[data-test="continue"]').click()
  
    // Verifique se a mensagem de validação é exibida corretamente para o campo "Postal Code"
    cy.get('.error-message-container').should('have.text', 'Error: Postal Code is required')
  })

  it('Deve retornar à página do carrinho de compras ao clicar em "Cancelar"', () => {
    cy.carryOutPurchase(testData.information.firstName, testData.information.lastName, testData.information.postalCode)

    // Clique no botão "Cancelar"
    cy.get('[data-test="cancel"]').click()

    // Verifique se a página do carrinho de compras é exibida
    cy.url().should('include', '/cart.html')
  })

  it('Deve retornar à página de produtos ao clicar em "Cancelar" após preencher informações de compra', () => {
    cy.carryOutPurchase(testData.information.firstName, testData.information.lastName, testData.information.postalCode)

    // Clique no botão "Continue"
    cy.get('[data-test="continue"]').click()

    // Clique no botão "Cancelar"
    cy.get('[data-test="cancel"]').click()

    // Verifique se a página de produtos é exibida
    cy.url().should('include', '/inventory.html')
  })

  it('Deve verificar se os produtos adicionados na página de checkout têm o mesmo nome e preço da tela de produtos', () => {
    // Adicionar produtos ao carrinho e ir para a página de checkout
    cy.addToCartCheckout()

    // Clique no botão "Continuar comprando"
    cy.get('[data-test="continue-shopping"]').click()

    // Verificar se os produtos na página de checkout têm o mesmo nome e preço da tela de produtos
    cy.verifyCheckoutProducts(testData.information.firstName, testData.information.lastName, testData.information.postalCode)
  })

  // // Cenario está com Bug 
  // it('Deve exibir mensagem de erro ao tentar finalizar a compra sem produtos', () => {
  //   // Vá para a página do carrinho
  //   cy.get('.shopping_cart_link').click()

  //   // Clique no botão "Checkout"
  //   cy.get('[data-test="checkout"]').click()

  //   // Preencha as informações de envio e finalize a compra
  //   cy.completePurchase(testData.information.firstName, testData.information.lastName, testData.information.postalCode)

  //   // Verifique se a mensagem de erro é exibida
  //   cy.get('.error-message-container').should('contain.text', 'Error: Your Cart is Empty')
  // })

  it('Deve ser possível efetuar a compra de dois produtos', () => {
    // Adicione vários produtos ao carrinho e realize a compra
    cy.purchaseMultipleProducts(testData.products)

    // Vá para o carrinho
    cy.get('.shopping_cart_link').click()

    // Clique no botão "Checkout"
    cy.get('[data-test="checkout"]').click()

    // Preencha as informações de envio e finalize a compra
    cy.completePurchase(testData.information.firstName, testData.information.lastName, testData.information.postalCode)
  })
})