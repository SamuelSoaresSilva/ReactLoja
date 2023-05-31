/* eslint-disable jsx-a11y/anchor-is-valid */
import Instagram from "../../assets/instagram_.png"
import Twitter from "../../assets/twitter_.png"
import WhiteLogo from "../../assets/logoWhite.png"
import "./Footer.css"

export default function Footer() {

    return (

        <section className="color-footer bg-rodape">
            <section className="m-5 m-lg-0 ">
                <div className="pt-5 row row-cols-5 row-cols-md-5 g-0">
                    <img src={WhiteLogo} className="pb-5 mx-5 col-10 col-md justify-content-center" alt="logo"></img>

                    <nav className="d-flex flex-column col-4 gap-2">
                        <h6 className="nav-link">Suporte</h6>
                        <div>
                            <a className="nav-link link-decoration" href="#">Telefone</a>
                            <a className="nav-link link-decoration" href="#">Email</a>
                        </div>
                    </nav>

                    <nav className="d-flex flex-column col-5 gap-2">
                        <h6 className="nav-link">Sobre a NoNick</h6>
                        <div>
                            <a className="nav-link link-decoration" href="#">Informações da empresa</a>
                            <a className="nav-link link-decoration" href="#">Contato</a>
                        </div>
                    </nav>

                    <nav className="d-flex flex-column col-3 gap-2">
                        <h6 className="nav-link">Redes Sociais</h6>
                        <div className="d-flex flex-row gap-3">
                            <a className="nav-link" href="#"><img src={Instagram} alt="Instagram"></img></a>
                            <a className="nav-link" href="#"><img src={Twitter} alt="twitter"></img></a>
                        </div>
                    </nav>
                </div>
            </section>
            <footer id="linha" className="d-flex flex-row align-items-center container-fluid">
                <h1 className="fs-5 pt-1 col-7 d-flex justify-content-end">
                    &copy;2023 NoNick
                </h1>
                <nav className="col-sm d-flex flex-row gap-3 justify-content-end">
                    <a className="nav-link fs-7" href="#">Política de privacidade</a>
                    <a className="nav-link fs-7" href="#">Termos de uso</a>
                </nav>
            </footer>
        </section>
    );

}