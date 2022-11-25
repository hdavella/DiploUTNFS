import React from 'react';

const HomePage = (props) => {
    return (

        <main className="holder">
            <div className="imgcentro"><img src="img/logo.jpg" alt="chip" /></div>
            <div className="columnas">
                <section className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>
                        Prueba
                    </p>
                </section>
                <section className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Excelente Servicio</span>
                        <span className="autor">Adrian Suarez - Mecanica integral Escalada</span>
                    </div>
                </section>
            </div>
        </main>

    );
}
export default HomePage;