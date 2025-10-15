import React from "react";
import logoHeaderImg from "../img/logo-header.svg";
import iconSpectra from "../img/icon-spectra.svg";

import "../style/footer.css";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer-container">
                <div className="top-wrapper">
                    <div className="logo-container">
                        <img src={logoHeaderImg} className="logo-img" />
                    </div>
                    <div className="menu-container">
                        <div className="menu-wrapper">
                            <b>Links Rápidos</b>

                            <a href="/">Home</a>
                            <a href="#plans">Planos</a>
                            <a href="https://api.whatsapp.com/send/?phone=557996645668&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">Contato</a>
                            <a href="https://www.instagram.com/cliquedftelecom/" target="_blank" rel="noreferrer">Social</a>
                        </div>
                        <div className="menu-wrapper">
                            <b>Atendimento</b>

                            <a href="https://sistema.cliquedf.com.br/central_assinante_web/login" target="_blank" rel="noreferrer">Portal do cliente</a>
                            <a href="https://api.whatsapp.com/send/?phone=557996645668&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">Suporte</a>
                            <a href="https://www.speedtest.net/pt" target="_blank" rel="noreferrer">Teste sua internet aqui</a>
                            <a href="https://cliquedf.contratoonline.tec.br" target="_blank" rel="noreferrer">Contrate</a>
                        </div>
                    </div>
                    <div className="contact-container">
                        <div className="contact-wrapper">
                            <b>Redes sociais</b>

                            <a href="https://www.instagram.com/cliquedftelecom/" target="_blank" rel="noreferrer">Instagram</a>
                        </div>

                        <div className="contact-wrapper">
                            <b>Contato</b>

                            <a href="tel:+5579996645668">79 99664-5668</a>
                        </div>
                    </div>
                </div>
                <div className="bottom-wrapper">
                    <span>Clique DF Telecom LTDA - 07.170.880/0001-93</span>
                </div>
                <div className="bottom-wrapper">
                    <span>Desenvolvido por <a href="https://spectra.tec.br/" target="_blank" rel="noreferrer"><img src={iconSpectra} alt="Spectra Tecnologia" /></a></span>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;