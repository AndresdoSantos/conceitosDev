## Conceitos Básicos de Dev

**Express**

Express é um micro-framework JavaScript que permite lidar com rotas e ouvir portas. Nele consiste os principais métodos do CRUD muito usado na web.

**Métodos HTTP** - São métodos usado para definir o tipo da requisição.

_GET_ - Buscar informações do backend.
_POST_ - Criar uma informação no backend.
_PUT_ - Alterar uma informação no backend - Atualizando um recurso por completo.
_PATCH_ - Alterar uma informação específica.
_DELETE_ - Deletar uma informação no backend.

**Tipos de Parâmetros** - São os principais tipos de recurso que existem para enviar/editar informações para o backend.

_Query Params_ - Muito usado em filtros e paginação > 
`projects?title=React&owner=Andres`
_Route Params_ - Identificar recursos ao atualizar/deletar > 
`projects/:id`
_Request Body_ - Conteúdo ao criar/editar um recurso, um JSON de informações > 
```json
  {
    "name": "Andres dos Santos",
    "email": "andres.com",
    "address": {
      "street": "Rua do Andres",
      "number": 19
    }
  }
```
