import { Link } from 'react-router-dom';
import starmie from '../assets/starmie.jpg'
import carrito from '../assets/carrito.jpg'
import './NavBar.css'



export default function NavBar (){
    return(
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
                        <img className="star" src={starmie} alt=""/>
                    </Link>
                </button>

                <button>
                    <Link to='/category/tinta'>
                        Tinta
                    </Link>    
                </button>

                <button>
                    <Link to='/category/acrilico'>
                        Acrílico
                    </Link>   
                </button>

                <button>
                    <Link to='/category/digital'>
                        Digital
                    </Link>   
                </button>

                <button>
                    <Link to="/carr2">
                        <img className="car" src={carrito} alt=""/>
                    </Link>
                </button>
            </nav>
        </>
    );
}