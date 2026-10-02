Relatório de Bug — Sistema de Login
BUG01 — Sistema não identifica corretamente e-mail inválido
O que aconteceu?

Durante os testes do formulário de login, foi informado um e-mail sem um domínio completo para verificar se o sistema faria a validação corretamente.

Como reproduzir
Abrir a tela de login.
Informar teste@gmail no campo de e-mail.
Informar 123456 no campo de senha.
Clicar em Entrar.
Resultado esperado

O sistema deveria identificar que o e-mail está em um formato inválido e informar o usuário que é necessário inserir um e-mail válido.

Resultado obtido

O sistema apresentou a mensagem:

Email ou senha incorretos.

Impacto

O usuário recebe uma mensagem que não explica o problema real. Nesse caso, o problema está no formato do e-mail e não necessariamente nas credenciais de acesso.

Severidade

Média

Status

Aberto

Observação

O problema foi encontrado durante um teste de validação de entrada. O próximo passo é ajustar a validação do e-mail e executar o teste novamente para verificar se o problema foi corrigido.

Correção realizada

A validação do campo de e-mail foi ajustada para verificar se o endereço possui @ e . antes de continuar o processo de login.

Teste após a correção

O teste foi executado novamente utilizando:

E-mail: teste@gmail
Senha: 123456
Resultado obtido após a correção

O sistema passou a apresentar a mensagem:

Insira um email válido.

O comportamento agora está de acordo com o resultado esperado.

Status

Corrigido ✅