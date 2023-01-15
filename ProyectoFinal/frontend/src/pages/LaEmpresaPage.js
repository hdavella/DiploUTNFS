import React from 'react';
import "../styles/nosotrosPage.css"

const NosotrosPage = (props) => {
    return(
        <main class="holder">
    <div className="historia">
      <h2>Historia</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        reprehenderit laborum alias, maxime iure recusandae perspiciatis! Ea
        est numquam assumenda veniam sunt aspernatur nesciunt odit animi.
        Beatae ducimus a debitis!
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Soluta dolorem quisquam nulla fugiat cupiditate eveniet,
        apiente tenetur delectus ea tempore natus quod vitae libero, iusto ipsum impedit.
        Exercitationem, maiores excepturi.
      </p>
    </div>
    <div className="staff">
      <h2>Staff</h2>
      <div className="personas">
        <div className="persona">
          <img src="img/nosotros/nosotros1.jpg" alt="Juan Gomez"/>
          <h5>Juan Gomez</h5>
          <h6>Gerente General</h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            A maiores beatae corrupti unde, aliquam aut voluptate culpa numquam quia vitae porro illum.
            Nam, veritatis odio praesentium recusandae nostrum aperiam numquam.
          </p>
        </div>

        <div className="persona">
          <img src="img/nosotros/nosotros2.jpg" alt="Diana Reyes"/>
          <h5>Diana Reyes</h5>
          <h6>Gerente Comercial</h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            A maiores beatae corrupti unde, aliquam aut voluptate culpa numquam quia vitae porro illum.
            Nam, veritatis odio praesentium recusandae nostrum aperiam numquam.
          </p>
        </div>

        <div className="persona">
          <img src="img/nosotros/nosotros3.jpg" alt="Roberto Zaptos"/>
          <h5>Roberto Zaptos</h5>
          <h6>Gerente de Sistemas</h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            A maiores beatae corrupti unde, aliquam aut voluptate culpa numquam quia vitae porro illum.
            Nam, veritatis odio praesentium recusandae nostrum aperiam numquam.
          </p>
        </div>

        <div className="persona">
          <img src="img/nosotros/nosotros4.jpg" alt="Sandra Mastrpietro"/>
          <h5>Sandra Mastrpietro</h5>
          <h6>Gerente de Marketing</h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            A maiores beatae corrupti unde, aliquam aut voluptate culpa numquam quia vitae porro illum.
            Nam, veritatis odio praesentium recusandae nostrum aperiam numquam.
          </p>
        </div>

        <div className="persona">
          <img src="img/nosotros/nosotros5.jpg" alt="Luciano Figuero"/>
          <h5>Luciano Figuero</h5>
          <h6>Gerente de Logística</h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            A maiores beatae corrupti unde, aliquam aut voluptate culpa numquam quia vitae porro illum.
            Nam, veritatis odio praesentium recusandae nostrum aperiam numquam.
          </p>
        </div>
      </div>
    </div>
  </main>
    );
}
export default NosotrosPage;