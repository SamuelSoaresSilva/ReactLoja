import Cart from "../assets/cart_.png"
import Search from "../assets/search_.png"
import Heart from "../assets/heart_.png"
import Logo from "../assets/noNickLogo1.ico"
import User from "../assets/User.png"

export default function Header() {
    return (
        <nav className="px-lg-4 navbar navbar-expand-lg justify-content-between align-items-center bg-white-blue">
            <div className="container-fluid py-2">
                <div className="col nav">
                    <a className="nav-link text-dark border-end">Login</a>
                    <a className="nav-link text-dark">Registre-se</a>
                </div>
                <img src={Logo} alt="Logo" className="" width={200}></img>


                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="col offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src={User} alt="User"></img></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active"><img src={Cart} alt="Carrinho"></img></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src={Search} alt="Search"></img></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src={Heart} alt="Heart"></img></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}