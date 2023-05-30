/* eslint-disable jsx-a11y/anchor-is-valid */

import Cart from "../assets/cart_.png"
import Search from "../assets/search_.png"
import Heart from "../assets/heart_.png"
import Logo from "../assets/noNickLogo1.ico"
import User from "../assets/User.png"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-white-blue">
            <div className="container-fluid">
                <nav className="col nav">
                    <a className="nav-link text-dark border-end">Login</a>
                    <a className="nav-link text-dark">Registre-se</a>
                </nav>

                <img className="text-center" src={Logo} alt="Logo NoNick" width="250px"></img>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="col justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link">
                                <img src={User} alt="User"></img>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <img src={Cart} alt="Carrinho"></img>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <img src={Heart} alt="Amei"></img>
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex ms-3" role="search">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn" type="submit">
                            <img src={Search} alt="Pesquisa"></img>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}