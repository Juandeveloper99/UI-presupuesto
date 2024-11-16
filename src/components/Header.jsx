import React from 'react';

const Header = () => (
  <header>
    <h1>Gestión de Presupuesto Familiar</h1>
    <nav>
      <a href="/">Inicio</a>
      <a href="/add-expense">Añadir Gasto</a>
      <a href="/reports">Reportes</a>
    </nav>
  </header>
);

export default Header;