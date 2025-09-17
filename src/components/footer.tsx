import React from "react";
import logoHeaderImg from "../img/logo-header.svg";

import "../style/footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="top-wrapper">
                <div className="logo-container">
                    <img src={logoHeaderImg} className="logo-img" />
                </div>
                <div className="menu-container">
                    <div className="menu-wrapper">
                        <b>Links Rápidos</b>

                        <a href="#">Home</a>
                        <a href="#">Sobre</a>
                        <a href="#">Planos</a>
                        <a href="#">Contato</a>
                    </div>
                    <div className="menu-wrapper">
                        <b>Atendimento</b>

                        <a href="#">Portal do cliente</a>
                        <a href="#">Suporte</a>
                        <a href="#">Teste sua internet aqui</a>
                        <a href="#">Contrate</a>
                    </div>
                </div>
                <div className="contact-container">
                    <div className="contact-wrapper">
                        <b>Redes sociais</b>

                        <a href="#">Instagram</a>
                    </div>

                    <div className="contact-wrapper">
                        <b>Contato</b>

                        <a href="#">79 99999-9999</a>
                        <a href="#">79 3344-5566</a>
                    </div>
                </div>
            </div>
            <div className="bottom-wrapper">
                <span>Clique DF Telecom LTDA - 07.170.880/0001-93</span>
            </div>
        </footer>
    )
}

export default Footer;