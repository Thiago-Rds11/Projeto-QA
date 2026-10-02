Casos de Teste — Login
Objetivo

Verificar se o sistema de login funciona corretamente em diferentes situações, incluindo dados válidos, dados inválidos e campos vazios.

CT01 — Campos vazios

Pré-condição: Sistema de login aberto.

Passos:

1- Não preencher o campo de e-mail.
2- Não preencher o campo de senha.
3- Clicar em "Entrar".

Resultado esperado:
O sistema deve informar que os campos precisam ser preenchidos.

Resultado obtido:
"Preencha todos os campos."

Status: ✅ Passou

CT02 — E-mail inválido

Pré-condição: Sistema de login aberto.

Passos:

1- Informar teste.com no campo de e-mail.
2- Informar 123456 no campo de senha.
3- Clicar em "Entrar".

Resultado esperado:
O sistema deve informar que o e-mail é inválido.

Resultado obtido:
"Insira um email válido."

Status: ✅ Passou

CT03 — Senha com menos de 6 caracteres

Pré-condição: Sistema de login aberto.

Passos:

1- Informar teste@gmail.com no campo de e-mail.
2- Informar 12345 no campo de senha.
3- Clicar em "Entrar".

Resultado esperado:
O sistema deve informar que a senha precisa ter pelo menos 6 caracteres.

Resultado obtido:
"A senha deve ter pelo menos 6 caracteres."

Status: ✅ Passou

CT04 — Login com dados válidos

Pré-condição: Sistema de login aberto.

Passos:

1- Informar teste@gmail.com no campo de e-mail.
2- Informar 123456 no campo de senha.
3- Clicar em "Entrar".

Resultado esperado:
O sistema deve permitir o login.

Resultado obtido:
"Login realizado com sucesso!"

Status: ✅ Passou

CT05 — Senha incorreta

Pré-condição: Sistema de login aberto.

Passos:

1- Informar teste@gmail.com no campo de e-mail.
2- Informar uma senha incorreta.
3- Clicar em "Entrar".

Resultado esperado:
O sistema deve informar que o e-mail ou senha estão incorretos.

Resultado obtido:
"Email ou senha incorretos."

Status: ✅ Passou