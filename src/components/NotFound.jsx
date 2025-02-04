import gato from '../assets/gato.png'
import './NotFound.css'

export default function NotFound (){
    return (
        <>
        <img className='cat' src={gato} alt="" />
        <h1>404</h1>
        <p>Les juro que había ponido una página acá</p>
        </>
    );
}