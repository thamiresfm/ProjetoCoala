Cypress.Commands.add('login', (user) => { 
    cy.get('[data-test="username"]').type(user.username)
    cy.get('[data-test="password"]').type(user.password)
    cy.get('[data-test="login-button"]').click()
  })
  
  Cypress.Commands.add('checkSorting', (selectSelector, productSelector, isNumber = false) => { 
      // Obter todas as opções de ordenação
    cy.get(selectSelector).find('option').then(($options) => {
      const options = [...$options].map((option) => option.value)
  
      // Para cada opção, verificar a ordenação
      options.forEach((option) => {
        const isDescending = option.toLowerCase().includes('z to a') || option.toLowerCase().includes('high to low')
        
        cy.get(selectSelector).select(option)
        cy.get(productSelector).then(($products) => {
          let products = [...$products].map((product) => isNumber ? parseFloat(product.innerText) : product.innerText)
          let sortedProducts = [...products].sort(isNumber ? ((a, b) => a - b) : undefined)
          if (isDescending) sortedProducts.reverse()
          expect(products).to.deep.equal(sortedProducts)
        })
      })
    })
  })
  
  Cypress.Commands.add('addToCartCheckout', () => {
    let productName, productPrice
  
    // Clique no botão "Adicionar ao Carrinho"
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    // Verifique se o distintivo do carrinho está visível
    cy.get('.shopping_cart_badge').should('be.visible')
    // Obtenha o nome do produto adicionado
    cy.get('.inventory_item_name').eq(0).invoke('text').then((name) => {
      productName = name
    })
  
    // Obtenha o preço do produto adicionado
    cy.get('.inventory_item_description > .pricebar > .inventory_item_price').eq(0).invoke('text').then((price) => {
      productPrice = price
    })
  
    // Vá para a página do carrinho
    cy.get('.shopping_cart_link').click()
  
    // Verifique se o produto está no carrinho e se o nome e o preço correspondem aos valores esperados
    cy.get('.inventory_item_name').should(($productNameInCart) => {
      expect($productNameInCart.text()).to.equal(productName)
    })
  
    cy.get('.inventory_item_price').should(($productPriceInCart) => {
      expect($productPriceInCart.text()).to.equal(productPrice)
    })
  })
  
  Cypress.Commands.add('addAndRemoveFromCart', () => {
    let productName
  
    // Clique no botão "Adicionar ao Carrinho" do primeiro produto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').eq(0).click()
    // Verifique se o distintivo do carrinho está visível
    cy.get('.shopping_cart_badge').should('be.visible')
    // Obtenha o nome do produto adicionado
    cy.get('.inventory_item_name').first().invoke('text').then((name) => {
      productName = name
    })
  
    // Clique no botão de remoção do primeiro produto no carrinho
    cy.get('[data-test="remove-sauce-labs-backpack"]').eq(0).click()
    // Vá para a página do carrinho
    cy.get('.shopping_cart_link').click()
  
    // Verifique se o produto foi removido do carrinho
    cy.get('.cart_item_label').should(() => {
      expect('.cart_item_label').not.to.contain(productName)
    })
  })


  Cypress.Commands.add('checkProductRedirection', () => {
    // Clique no botão "Continuar comprando"
    cy.get('[data-test="continue-shopping"]').click()
  
    // Verifique se foi redirecionado para a página de produtos
    cy.url().should('include', '/inventory.html')
  })


  Cypress.Commands.add('carryOutPurchase', (firstName,lastName, postalCode) => {

    // Clique no botão "Adicionar ao Carrinho" do primeiro produto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').eq(0).click()
    
    // Vá para a página do carrinho
    cy.get('.shopping_cart_link').click()

    // Clique no botão "Checkout"
    cy.get('[data-test="checkout"]').click()
  
   // Preencha as informações de envio
   if (firstName) {
    cy.get('[data-test="firstName"]').clear().type(firstName)
  }

  if (lastName) {
    cy.get('[data-test="lastName"]').clear().type(lastName)
  }

  if (postalCode) {
    cy.get('[data-test="postalCode"]').clear().type(postalCode)
  }
 
  
  })

  Cypress.Commands.add('verifyCheckoutProducts', (firstName,lastName, postalCode) => {
    let productName, productPrice
  
    // Obtenha o nome e o preço do produto da página de produtos
    cy.get('.inventory_item_name').eq(0).invoke('text').then((name) => {
      productName = name
    })
  
    cy.get('.inventory_item_description > .pricebar > .inventory_item_price', {timout:3000}).eq(0).invoke('text').then((price) => {
      productPrice = price
    })
  
    // Vá para a página de checkout
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()

       // Preencha as informações de envio
    if (firstName) {
        cy.get('[data-test="firstName"]').clear().type(firstName)
    }

    if (lastName) {
        cy.get('[data-test="lastName"]').clear().type(lastName)
    }

    if (postalCode) {
        cy.get('[data-test="postalCode"]').clear().type(postalCode)
    }
     // Clique no botão "Continue"
     cy.get('[data-test="continue"]').click()
  
    // Verifique se o produto na página de checkout tem o mesmo nome e preço da tela de produtos
    cy.get('.cart_item_label').should(($products) => {
      const checkoutProductName = $products.eq(0).find('.inventory_item_name').text()
      const checkoutProductPrice = $products.eq(0).find('.inventory_item_price').text()
  
      expect(checkoutProductName).to.equal(productName)
      expect(checkoutProductPrice).to.equal(productPrice)
    })
  })

  Cypress.Commands.add('verifyProductDetails', () => {
    let productName, productPrice

    cy.get('.inventory_item_name').eq(0).invoke('text').then((name) => {
        productName = name
      })
    
      // Obtenha o preço do produto adicionado
      cy.get('.inventory_item_description > .pricebar > .inventory_item_price').eq(0).invoke('text').then((price) => {
        productPrice = price
      })
    //   Acessa pagina detalhe do produto
      cy.get('.inventory_item_name').eq(0).click()
    
      // Verifique se o produto está no carrinho e se o nome e o preço correspondem aos valores esperados
      cy.get('.inventory_details_name').should(($productNameInCart) => {
        expect($productNameInCart.text()).to.equal(productName)
      })
    
      cy.get('.inventory_details_price').should(($productPriceInCart) => {
        expect($productPriceInCart.text()).to.equal(productPrice)
      })
  })


  Cypress.Commands.add('addToCartFromProductDetails', () => {
    let productName, productPrice
     //   Acessa pagina detalhe do produto
    cy.get('.inventory_item_name').eq(0).click()

    cy.get('.inventory_details_name').eq(0).invoke('text').then((name) => {
        productName = name
      })
    
      // Obtenha o preço do produto adicionado
      cy.get('.inventory_details_price').eq(0).invoke('text').then((price) => {
        productPrice = price
      })

        // adciona oproduto no carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

       // Vá para a página do carrinho
       cy.get('.shopping_cart_link').click()
  
       // Verifique se o produto está no carrinho e se o nome e o preço correspondem aos valores esperados
       cy.get('.inventory_item_name').should(($productNameInCart) => {
         expect($productNameInCart.text()).to.equal(productName)
       })
     
       cy.get('.inventory_item_price').should(($productPriceInCart) => {
         expect($productPriceInCart.text()).to.equal(productPrice)
      })
  })

  Cypress.Commands.add('removeFromCartFromProductDetails', () => {
    let productName

    //   Acessa pagina detalhe do produto
    cy.get('.inventory_item_name').eq(0).click()

    // adciona oproduto no carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('.inventory_details_name').eq(0).invoke('text').then((name) => {
        productName = name
    })

    // Clique no botão "remover"
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    
    // Vá para a página do carrinho
    cy.get('.shopping_cart_link').click()
  
    // Verifique se o produto foi removido do carrinho
    cy.get('.cart_item_label').should(() => {
      expect('.cart_item_label').not.to.contain(productName)
    })
  })

  Cypress.Commands.add('addToCartFromProductDetailsAndCheckout', () => {
    let productName, productPrice
    
    // Acessa a página de detalhes do produto
    cy.get('.inventory_item_name').eq(0).click()
    
    // Obtém o nome do produto da página de detalhes
    cy.get('.inventory_details_name').eq(0).invoke('text').then((name) => {
    productName = name
    })
    
    // Obtém o preço do produto da página de detalhes
    cy.get('.inventory_details_price').eq(0).invoke('text').then((price) => {
    productPrice = price
    })
    
    // Clica no botão "Adicionar ao Carrinho"
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    
    // Vá para a página do carrinho
    cy.get('.shopping_cart_link').click()
    
    // Verifica se o produto está no carrinho e se o nome e o preço correspondem aos valores esperados
    cy.get('.inventory_item_name').should(($productNameInCart) => {
    expect($productNameInCart.text()).to.equal(productName)
    })
    
    cy.get('.inventory_item_price').should(($productPriceInCart) => {
    expect($productPriceInCart.text()).to.equal(productPrice)
    })
    
    // Clica no botão "Checkout"
    cy.get('[data-test="checkout"]').click()
  })
    
  Cypress.Commands.add('completePurchase', (firstName, lastName, postalCode) => {
    // Preenche as informações de envio
    if (firstName) {
    cy.get('[data-test="firstName"]').clear().type(firstName)
    }
    
    if (lastName) {
    cy.get('[data-test="lastName"]').clear().type(lastName)
    }
    
    if (postalCode) {
    cy.get('[data-test="postalCode"]').clear().type(postalCode)
    }
    
    // Clica no botão "Continue"
    cy.get('[data-test="continue"]').click()
    
    // Clica no botão "Finish"
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

  Cypress.Commands.add('purchaseMultipleProducts', (products) => {  
    cy.wrap(products).each((product) => {
      cy.contains('.inventory_item', product.name).within(() => {
        cy.get('.inventory_item_name').should('have.text', product.name)
        cy.get('.inventory_item_price').should('have.text', product.price)
  
        cy.get('.btn_inventory').click()
        
      })
 
    })
  

  })
  
