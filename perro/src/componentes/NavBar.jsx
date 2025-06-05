import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav style={{ backgroundColor: '#4CAF50', padding: '10px' }}>
      <h1 style={{ color: 'white' }}>Perro al Agua 🐾</h1>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', padding: 0 }}>
        <li><a href="#" style={{ color: 'white' }}>Inicio</a></li>
        <li><a href="#" style={{ color: 'white' }}>Alimentos para Gerros</a></li>
        <li><a href="#" style={{ color: 'white' }}>Alimentos para Gatos</a></li>
        <li><a href="#" style={{ color: 'white' }}>Accesorios</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
