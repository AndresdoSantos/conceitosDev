const express = require('express');
const {uuid} = require('uuidv4');

const app = express();
app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
  const {title} = request.query;
  const results = title
    ? projects.filter(project => project.title.includes(title)) 
    : projects;
  return response.json(results);
});

app.post('/projects', (request, response) => {
  const {title, owner} = request.body;
  const project = { id: uuid(), title, owner };
  projects.push(project);
  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  /**
   * 1 - Pegar as informações
   * 2 - Achar onde elas estão
   * 3 - Verificar se existem 
   * 4 - Alterar elas
   * 5 - Jogar para dentro do array
   * 6 - Exibir em tela
   */
  const {id} = request.params;
  const {title, owner} = request.body;
  /*  findIndex(
    A cada volta que eu der eu retorno um 'project' => onde project.id seja igual ao id
  ) */
  const projectIndex = projects.findIndex(project => project.id === id); 
  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found' });
  };
  const project = {
    id,
    title,
    owner,
  }
  projects[projectIndex] = project;
  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const {id} = request.params;
  const project = projects.findIndex(project => project.id === id);
  if (project < 0) {
    return response.status(400).json({ error: 'Project not found' });
  };
  // Método para tirar uma informação do array
  projects.splice(project, 1);
  return response.status(204).send();
})

app.listen(3333, () => {
  console.log(`🚀 Rocket putting`);
});