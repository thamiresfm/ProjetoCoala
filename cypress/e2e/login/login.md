# Funcionalidade: Página de Login

    ## Cenário: Login inválido exibe mensagem de erro
        Dado que estou na página de login
        Quando tento fazer login com um usuário inválido
        Então uma mensagem de erro deve ser exibida informando que o usuário e senha não correspondem a nenhum usuário

    ## Cenário: Senha inválida exibe mensagem de erro
        Dado que estou na página de login
        Quando tento fazer login com uma senha inválida
        Então uma mensagem de erro deve ser exibida informando que o usuário e senha não correspondem a nenhum usuário

    ## Cenário: Usuário bloqueado exibe mensagem de erro
        Dado que estou na página de login
        Quando tento fazer login com um usuário bloqueado
        Então uma mensagem de erro deve ser exibida informando que o usuário está bloqueado

    ## Cenário: Logout retorna para a tela de login
        Dado que estou logado
        Quando realizo o logout
        Então devo ser redirecionado para a tela de login