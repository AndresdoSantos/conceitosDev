import React from 'react';

export default function Footer({ title, children }) {
  return (
    <footer>
      <a href="https://github.com/AndresdoSantos">
        {title}
      </a>
      {children}
    </footer>
  );
};