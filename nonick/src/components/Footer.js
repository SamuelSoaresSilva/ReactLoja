/* eslint-disable jsx-a11y/anchor-is-valid */
import Instagram from "../assets/instagram_.png"
import Twitter from "../assets/twitter_.png"
import WhiteLogo from "../assets/logoWhite.png"
export default function Footer() {

    return (

        <footer>
            <div id="footer_content">
                <div id="footer_contacts">
                <h1>Logo</h1>
                    <div id="footer_redes_sociais">
                            <a href="#" class="footer_link" id="instagram">
                                <img src={Instagram} alt=" "></img>
                            </a>

                            <a href="#" class="footer_link" id="twitter">
                                <img src={Twitter} alt=" "></img>
                            </a>

                    </div>
                
                </div>
            
            <ul class="footer_list">

                <li>
                    <h3>Suporte</h3>
                </li>
                <li>
                    <a href="#" class="footer_link">Email</a>
                </li>
                <li>
                    <a href="#" class="footer_link">Telefone</a>
                </li>
            </ul>

            <ul class="footer_list">

                <li>
                    <h3>Sobre a NoNick</h3>
                </li>
                <li>
                    <a href="#" class="footer_link">Informações da empresa</a>
                </li>
                <li>
                    <a href="#" class="footer_link">Devs</a>
                </li>
            </ul>
            
                <div id="footer_subscribe">

                </div>
            </div>

        </footer>
        
    );

}