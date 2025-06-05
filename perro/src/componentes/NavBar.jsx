import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Perro al agua</h1>

      <ul style={styles.links}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Juguetes</a></li>
        <li><a href="#">Accesorios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#90e0ef', // color alegre
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '1.8rem',
    fontFamily: 'Comic Sans MS, sans-serif',
    color: '#0077b6',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
};

export default NavBar;