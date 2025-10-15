import React, { useState } from "react";
import logoHeaderImg from "../img/logo-header.svg";

import "../style/header.css";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [supMenuScrolled, setSupMenuScrolled] = useState(false);

    window.addEventListener("scroll", () => {
        const pixelsScrolled = window.scrollY;

        if (pixelsScrolled > 85) {
            setSupMenuScrolled(true);
        } else {
            setSupMenuScrolled(false)
        }
    });

    return (
        <React.Fragment>
            <div className="central-header">
                <a href="https://api.whatsapp.com/send/?phone=557996645668&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                    <svg height="20" viewBox="0 0 41 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.2821 27.3206C27.7498 27.3206 33.8035 21.2669 33.8035 13.7992C33.8035 6.33154 27.7498 0.277802 20.2821 0.277802C12.8145 0.277802 6.76071 6.33154 6.76071 13.7992C6.76071 21.2669 12.8145 27.3206 20.2821 27.3206Z" fill="black"/>
                        <path d="M20.2821 31.8257C9.08575 31.8382 0.0124651 40.9114 0 52.1078C0 53.3524 1.00893 54.3613 2.25353 54.3613H38.3106C39.5552 54.3613 40.5641 53.3524 40.5641 52.1078C40.5518 40.9114 31.4785 31.8381 20.2821 31.8257Z" fill="black"/>
                    </svg>

                    <span>Fale com o suporte</span>
                </a>

                <a href="https://cliquedf.boletofacil.tec.br/" target="_blank" rel="noreferrer">
                    <svg height="20" viewBox="0 0 46 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.4512 18.2072H44.2674C43.4764 16.1114 42.2477 14.2084 40.663 12.6251L32.7701 4.72769C31.185 3.14486 29.2815 1.91694 27.1857 1.12558V15.9418C27.1857 17.1929 28.2 18.2072 29.4512 18.2072Z" fill="black"/>
                        <path d="M45.2551 22.738H29.4512C25.6976 22.738 22.6547 19.6952 22.6547 15.9416V0.137684C22.29 0.112729 21.9253 0.083313 21.5559 0.083313H11.3273C5.07449 0.0908528 0.00743359 5.15791 0 11.4107V43.1274C0.00743359 49.3801 5.07449 54.4473 11.3273 54.4547H33.982C40.2349 54.4473 45.3019 49.3801 45.3095 43.1273V23.8368C45.3095 23.4676 45.28 23.1028 45.2551 22.738Z" fill="black"/>
                        <path d="M11.4045 45.3928C10.4831 45.3919 9.5997 45.0255 8.94816 44.374C8.29662 43.7224 7.93019 42.839 7.92929 41.9176C7.92929 41.6172 7.80995 41.3291 7.59752 41.1166C7.38509 40.9042 7.09697 40.7848 6.79655 40.7848C6.49613 40.7848 6.20801 40.9042 5.99558 41.1166C5.78315 41.3291 5.66381 41.6172 5.66381 41.9176V41.9946C5.66381 42.0161 5.66381 42.0354 5.66381 42.0569C5.70161 43.5547 6.32291 44.9785 7.39528 46.0248C8.46764 47.0712 9.90627 47.6573 11.4045 47.6583H12.4602V48.791C12.4602 49.0915 12.5796 49.3796 12.792 49.592C13.0044 49.8044 13.2926 49.9238 13.593 49.9238C13.8934 49.9238 14.1815 49.8044 14.3939 49.592C14.6064 49.3796 14.7257 49.0915 14.7257 48.791V47.6583H15.7814C17.1438 47.6568 18.4612 47.171 19.4982 46.2875C20.5352 45.404 21.2242 44.1805 21.4421 42.8358C21.66 41.491 21.3925 40.1125 20.6876 38.9468C19.9826 37.7811 18.886 36.9041 17.5938 36.4725L14.7257 35.5154V27.269H15.7814C16.7028 27.2699 17.5863 27.6363 18.2378 28.2879C18.8893 28.9394 19.2558 29.8228 19.2567 30.7443C19.2567 31.0447 19.376 31.3328 19.5884 31.5452C19.8009 31.7577 20.089 31.877 20.3894 31.877C20.6898 31.877 20.9779 31.7577 21.1904 31.5452C21.4028 31.3328 21.5221 31.0447 21.5221 30.7443V30.6672C21.5221 30.6457 21.5221 30.6265 21.5221 30.6049C21.4843 29.1071 20.863 27.6834 19.7907 26.637C18.7183 25.5907 17.2797 25.0045 15.7814 25.0035H14.7257V23.8708C14.7257 23.5704 14.6064 23.2823 14.3939 23.0698C14.1815 22.8574 13.8934 22.7381 13.593 22.7381C13.2926 22.7381 13.0044 22.8574 12.792 23.0698C12.5796 23.2823 12.4602 23.5704 12.4602 23.8708V25.0035H11.4045C10.0422 25.005 8.7248 25.4909 7.68778 26.3744C6.65077 27.2578 5.96173 28.4813 5.74384 29.8261C5.52595 31.1709 5.79341 32.5493 6.4984 33.715C7.2034 34.8808 8.29998 35.7578 9.59215 36.1893L12.4602 37.1465V45.3928H11.4045ZM14.7257 37.902L16.8779 38.6202C17.6609 38.8808 18.3257 39.4115 18.7531 40.1175C19.1806 40.8234 19.3429 41.6584 19.211 42.473C19.0791 43.2876 18.6616 44.0288 18.0333 44.5637C17.4049 45.0987 16.6067 45.3926 15.7814 45.3928H14.7257V37.902ZM10.308 34.0417C9.52502 33.781 8.8603 33.2503 8.43283 32.5444C8.00536 31.8385 7.84305 31.0035 7.97494 30.1888C8.10683 29.3742 8.52431 28.6331 9.15268 28.0981C9.78105 27.5632 10.5793 27.2693 11.4045 27.269H12.4602V34.7598L10.308 34.0417Z" fill="#9CC748" className="dollar"/>
                    </svg>

                    <span>2ª Via do Boleto</span>
                </a>
            </div>
            <header className="header-container">
                <div className="logo-wrapper">
                    <img src={logoHeaderImg} className="logo-img" alt="logo-img" />
                </div>
                <nav className="menu-wrapper">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="/" className="menu-link">
                                Home
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="https://www.instagram.com/cliquedftelecom/" target="_blank" rel="noreferrer" className="menu-link">
                                Social
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#plans" className="menu-link">
                                Planos
                            </a>
                        </li>
                        <li className="menu-item whatsapp-link">
                            <a href="https://api.whatsapp.com/send/?phone=557996645668&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                                <svg width="30" viewBox="0 0 263 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 248.78L35.5417 199.168C19.0611 175.774 11.6848 147.169 14.797 118.722C17.9091 90.2744 31.2958 63.9409 52.4448 44.6628C73.5937 25.3848 101.051 14.4875 129.664 14.016C158.277 13.5445 186.079 23.5312 207.851 42.102C229.624 60.6728 243.871 86.551 247.919 114.88C251.966 143.209 245.536 172.042 229.836 195.967C214.135 219.892 190.243 237.265 162.643 244.825C135.042 252.385 105.632 249.614 79.9305 237.03L14 248.78Z" stroke="#ffffff" stroke-width="27" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M92.333 105.169C92.333 106.9 93.0207 108.56 94.2449 109.785C95.4691 111.009 97.1295 111.697 98.8608 111.697C100.592 111.697 102.252 111.009 103.477 109.785C104.701 108.56 105.389 106.9 105.389 105.169V92.1132C105.389 90.3819 104.701 88.7216 103.477 87.4974C102.252 86.2732 100.592 85.5854 98.8608 85.5854C97.1295 85.5854 95.4691 86.2732 94.2449 87.4974C93.0207 88.7216 92.333 90.3819 92.333 92.1132V105.169ZM92.333 105.169C92.333 122.482 99.2105 139.085 111.452 151.327C123.694 163.569 140.298 170.447 157.611 170.447M157.611 170.447H170.666C172.398 170.447 174.058 169.759 175.282 168.535C176.506 167.31 177.194 165.65 177.194 163.919C177.194 162.187 176.506 160.527 175.282 159.303C174.058 158.079 172.398 157.391 170.666 157.391H157.611C155.879 157.391 154.219 158.079 152.995 159.303C151.771 160.527 151.083 162.187 151.083 163.919C151.083 165.65 151.771 167.31 152.995 168.535C154.219 169.759 155.879 170.447 157.611 170.447Z" stroke="#ffffff" stroke-width="27" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <span>Converse no Whatsapp</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className="menu-button-mob" onClick={() => setMenuOpened(!menuOpened)}>
                    <svg height="20" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.5" y1="1.5" x2="30.5" y2="1.5" stroke="white" stroke-width="4" stroke-linecap="round"/>
                        <line x1="1.5" y1="11.5" x2="30.5" y2="11.5" stroke="white" stroke-width="4" stroke-linecap="round"/>
                        <line x1="1.5" y1="21.5" x2="30.5" y2="21.5" stroke="white" stroke-width="4" stroke-linecap="round"/>
                    </svg>  
                </button>
            </header>

            <nav className={`menu-container-mob ${menuOpened ? "open" : ""} ${supMenuScrolled ? "scrolled" : ""}`}>
                <div className="menu-item">
                    <a href="/">Home</a>
                </div>
                <div className="menu-item">
                    <a href="#about">Sobre nós</a>
                </div>
                <div className="menu-item">
                    <a href="https://www.instagram.com/cliquedftelecom/" target="_blank" rel="noreferrer">Social</a>
                </div>
                <div className="menu-item">
                    <a href="#plans">Planos</a>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header;