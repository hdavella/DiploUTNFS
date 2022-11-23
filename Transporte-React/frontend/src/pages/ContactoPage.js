import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </p>
                    <p>
                        <input type="submit" name="Enviar" />
                    </p>
                </form>
            </div>
            <div class="datos">
                <h2>Otras vías de comunciación</h2>
                <p>Otros datos de contacto</p>
                <ul>
                    <li>Teléfono: 4444-5555</li>
                    <li>email: tumail@tudominio.com.ar</li>
                    <li>Fb:</li>
                    <li>TW</li>
                </ul>
            </div>
        </main>

    );
}
export default ContactoPage;