import React from 'react';

const HomePage = (props) => {
    return (

        <main className="holder">
            <div className="imgcentro"><img src="img/galeria/maintrain.jpg" alt="tren" /></div>
            <div className="columnas">
                <section className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                        reprehenderit laborum alias, maxime iure recusandae perspiciatis! Ea
                        est numquam assumenda veniam sunt aspernatur nesciunt odit animi.
                        Beatae ducimus a debitis!
                    </p>
                </section>
                <section className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Juan Gomez - zapatos.com</span>
                    </div>
                </section>
            </div>
        </main>

    );
}
export default HomePage;