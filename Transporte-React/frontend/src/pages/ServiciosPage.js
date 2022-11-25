import React from 'react';

const ServiciosPage = (props) => {
    return(
        <main className="holder">
      <h2>Servicios</h2>
      <div className="servicio">
        <img src="img/servicios/ferroviario.jpg" alt="Tren"/>
        <div className="info">
          <h4>Transporte Ferroviario</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Porro tempore facere sint eligendi aut officiis earum cum, 
            hic numquam pariatur accusamus perspiciatis quis! Laborum 
            esse tempora explicabo sit est sunt?
          </p>
        </div>
      </div>

      <div className="servicio">
        <img src="img/servicios/aereo.jpg" alt="Tren"/>
        <div className="info">
          <h4>Transporte Aéreo</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Porro tempore facere sint eligendi aut officiis earum cum, 
            hic numquam pariatur accusamus perspiciatis quis! Laborum 
            esse tempora explicabo sit est sunt?
          </p>
        </div>
      </div>

      <div className="servicio">
        <img src="img/servicios/maritimo.jpg" alt="Tren"/>
        <div className="info">
          <h4>Transporte Marítimo</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Porro tempore facere sint eligendi aut officiis earum cum, 
            hic numquam pariatur accusamus perspiciatis quis! Laborum 
            esse tempora explicabo sit est sunt?
          </p>
        </div>
      </div>

      <div className="servicio">
        <img src="img/servicios/terrestre.jpg" alt="Tren"/>
        <div className="info">
          <h4>Transporte Terrestre</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Porro tempore facere sint eligendi aut officiis earum cum, 
            hic numquam pariatur accusamus perspiciatis quis! Laborum 
            esse tempora explicabo sit est sunt?
          </p>
        </div>
      </div>
    </main>
    );
}
export default ServiciosPage;