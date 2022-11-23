import {Link} from "react-router-dom";

const Nav = (props) => {
    return(
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ContactoPage">Contacto</Link></li>
                </ul>
            </div>
        </nav>

    );
}

export default Nav;

