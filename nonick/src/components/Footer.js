/* eslint-disable jsx-a11y/anchor-is-valid */
import Instagram from "../assets/instagram_.png"
import Twitter from "../assets/twitter_.png"
import WhiteLogo from "../assets/logoWhite.png"
import "../components/Footer.css"

export default function Footer() {

    return (
    <><section class="container-rodape">
            <div>
                <img src={WhiteLogo} class="imagem-rodape" alt="logo"></img>
                <div id="div1">
                    <h3>Suporte</h3>
                    <a href="#" class="link-rodape">Telefone</a>
                    <a href="#" class="link-rodape">Email</a>
                </div>
                <div id="div2">
                    <h3 >Sobre a NoNick</h3>
                    <a href="" class="link-rodape">Informações da empresa</a>
                    <a href="" class="link-rodape">Contato</a>
                </div>
                <div>
                    <h3 >Redes Sociais</h3>
                    <button>
                        <a href="" class="link-rodape">
                            <img src={Instagram} alt="Instagram"></img>
                        </a>
                    </button>
                    <button>

                        <a href="" class="link-rodape">
                            <img src={Twitter} alt="twitter"></img>
                        </a>
                    </button>
                </div>
            </div>
        </section>
        <footer id="linha">
            <div>
                &copy;2023 NoNick
            </div>
                <div id="div-footer">
                <a href="#">Política de privacidade</a>
                <a href="#">Termos de uso</a>
                
                </div>
        </footer>
        </>    
    );

}