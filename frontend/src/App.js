import React, { useState } from 'react';

import logo from './images/logo.jpg';
import Header from './components/Header';
import './App.css';

export default function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  };

  return (
    <>
      <Header title='HomePage' />
      <img style={{ width: 300, height: 200 }} src={logo} alt=""/>
      <ul>
        {projects.map(project => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
};