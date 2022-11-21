import React from 'react';

const Nav = (props) => {
    return (
        <nav>
            <div class="holder">
                <ul>
                    <li><a class="activo" href="index.html">Home</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="servicios.html">Servicios</a></li>
                    <li><a href="galeria.html">Galeria</a></li>
                    <li><a href="novedades.html">Novedades</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </div>
        </nav>

    );
}

export default Nav;

