
let testData

beforeEach(()=> {
  cy.visit('/')
  cy.fixture("testData").then(t => {
    testData = t
    cy.login(testData.login)
  })
})

describe('Pagina de Produtos', () => {
    it('Deve ordenar os dos Produtos e verificar se foi ordenado corretamente', () => {
      // Basicamente essa função pega o texto do select de ordenação e seleciona e valida se está ordem certa
     cy.checkSorting('[data-test="product_sort_container"]', '.inventory_item_description', true);
    })

    it("Deve adicionar um produto ao carrinho e verificar nome e preço", () =>{
      // Basicamente essa função pega o valor e preço e compara para ver se o mesmoo do carrinho
      cy.addToCartCheckout()
    })
  
    it("Deve remover um produto ao carrinho e verificar se foi removido", () =>{
      // Basicamente essa função que valida se produto foi removido do carrinho
      cy.addAndRemoveFromCart()
    })
  
})