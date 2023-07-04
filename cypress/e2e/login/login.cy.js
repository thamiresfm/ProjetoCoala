let testData

beforeEach(()=> {
  cy.visit('/')
  cy.fixture("testData").then(t => {
    testData = t
  })
})
 

describe('Página de Login', () => {
    it('Deve exibir mensagem de erro ao tentar fazer login com um usuário inválido', () => {   
      // Realizar o login com um usuário inválido
      cy.login(testData.logins[0])
  
      // Verificar se a mensagem de erro é exibida corretamente
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
  
    it('Deve exibir mensagem de erro ao tentar fazer login com uma senha inválida', () => {   
      // Realizar o login com uma senha inválida
      cy.login(testData.logins[1])
  
      // Verificar se a mensagem de erro é exibida corretamente
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
  
    it('Deve exibir mensagem de erro ao tentar fazer login com um usuário bloqueado', () => {   
      // Realizar o login com um usuário bloqueado
      cy.login(testData.logins[2])
  
      // Verificar se a mensagem de erro é exibida corretamente
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })
  
    it('Deve voltar para a tela de login ao fazer logout', () => {   
      // Realizar o login
      cy.login(testData.login)
  
      // Clicar no botão do menu
      cy.get('#react-burger-menu-btn').click()
  
      // Clicar no link de logout
      cy.get('#logout_sidebar_link').click()
  
      // Verificar se a tela de login é exibida novamente
      cy.get('[data-test="username"]').should('be.visible')
    })
  })
  