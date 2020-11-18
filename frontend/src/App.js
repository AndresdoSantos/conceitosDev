import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header title='HomePage'>
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title='Projects'>
        <ul>
          <li>Login</li>
        </ul>
      </Header>

      <h1>Body</h1>

      <Footer title='Yo soy Andres'>
        <ul>
          <li>
            <p>Andres</p>
          </li>
          <li>
            <p>Andres</p>
          </li>
          <li>
            <p>Andres</p>
          </li>
        </ul>
      </Footer>
    </>
  );
};