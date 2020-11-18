import React from 'react';

// Children é todo o conteúdo HTML do componente

export default function Header({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  )
}