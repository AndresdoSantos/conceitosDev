# Métodos HTTP

1. GET - Buscar informações do backend.
2. POST - Criar uma informação no backend.
3. PUT / PATCH - ALterar uma informação no backend.
4. DELETE - Deletar uma informação no backend.

# Variáveis ambiente 
São variáveis que serão compartilhada por todas as rotas, como `http://localhost:3333/`

# Tipos de parâmetros
1. Query params - Muito usado para filtros e paginação
2. Route params - Identificar recursos ao atualizar ou deletar
3. Request body - Conteúdo no momento de criar/editar um recurso (JSON)

# Middlewares
É um interceptador de requisições, pode interromper totalmente ou alterar dados da requisição.
Usamos quando queremos que um trecho de código seja disparado de forma automática dentro da nossa aplicação.
