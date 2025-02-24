import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          gap: 10,
          justifyContent: 'center',
          marginBottom: 30,
        }}
      >
        <button>
          <Link to="/">
            <img className="star" src="/assets/starmie.jpg" alt="" />
          </Link>
        </button>

        <button>
          <Link to="/category/tinta">Tinta</Link>
        </button>

        <button>
          <Link to="/category/acrilico">Acrílico</Link>
        </button>

        <button>
          <Link to="/category/digital">Digital</Link>
        </button>

        <button>
          <Link to="/carr">
            <img className="car" src="/assets/carrito.jpg" alt="" />
          </Link>
        </button>
      </nav>
    </>
  );
}
