import React from "react";

import "../style/plans.css";

const Plans = () => {
    return (
        <div className="plans-container" id="plans">
            <div className="header-wrapper">
                <b>Escolha o plano ideal para você!</b>
                <span>Nossa internet fibra oferece velocidade e estabilidade máxima, feita sob medida para você!</span>
            </div>
            <div className="plans-wrapper">
                <b className="title">Internet</b>
                <div className="plans-row">
                    <div className="plan-element">
                        <b>200 MEGA</b>
                        <div className="benefits-wrapper">
                            <span>Download: 200Mbps</span>
                            <span>Upload: 100Mbps</span>
                            <span>Instalação em até 48h</span>
                        </div>
                        <div className="buttons-wrapper">
                            <span>R$ 69,90</span>
                            <a href="https://cliquedf.contratoonline.tec.br/planos?plano=142" target="_blank" rel="noreferrer">Assine agora</a>
                        </div>
                    </div>

                    <div className="plan-element">
                        <b>500 MEGA</b>
                        <div className="benefits-wrapper">
                            <span>Download: 500Mbps</span>
                            <span>Upload: 250Mbps</span>
                            <span>Instalação em até 48h</span>
                        </div>
                        <div className="buttons-wrapper">
                            <span>R$ 89,90</span>
                            <a href="https://cliquedf.contratoonline.tec.br/planos?plano=158" target="_blank" rel="noreferrer">Assine agora</a>
                        </div>
                    </div>

                    <div className="plan-element">
                        <b>700 MEGA</b>
                        <div className="benefits-wrapper">
                            <span>Download: 700Mbps</span>
                            <span>Upload: 350Mbps</span>
                            <span>Instalação em até 48h</span>
                        </div>
                        <div className="buttons-wrapper">
                            <span>R$ 100,00</span>
                            <a href="https://cliquedf.contratoonline.tec.br/planos?plano=150" target="_blank" rel="noreferrer">Assine agora</a>
                        </div>
                    </div>

                    <div className="plan-element">
                        <b>1000 MEGA</b>
                        <div className="benefits-wrapper">
                            <span>Download: 1000Mbps</span>
                            <span>Upload: 500Mbps</span>
                            <span>Instalação em até 48h</span>
                        </div>
                        <div className="buttons-wrapper">
                            <span>R$ 130,00</span>
                            <a href="https://cliquedf.contratoonline.tec.br/planos?plano=159" target="_blank" rel="noreferrer">Assine agora</a>
                        </div>
                    </div>  

                </div>

                <b className="title">INTERNET + TV</b>
                <div className="plans-row">
                    <div className="plan-element">
                        <b>200 MEGA</b>
                        <div className="benefits-wrapper">
                            <span>Download: 200Mbps</span>
                            <span>Upload: 100Mbps</span>
                            <span>+ ITTV Aberto</span>
                            <span>+ Qnutri</span>
                            <span>+ Deezer</span>
                            <span>Instalação em até 48h</span>
                        </div>
                        <div className="buttons-wrapper">
                            <span>R$ 79,00</span>
                            <a href="https://cliquedf.contratoonline.tec.br/planos?plano=145" target="_blank" rel="noreferrer">Assine agora</a>
                        </div>
                    </div>

                    <div className="plan-element">
                        <b>500 MEGA</b>
                        <div className="benefits-wrapper">
                            <span>Download: 500Mbps</span>
                            <span>Upload: 250Mbps</span>
                            <span>+ ITTV Aberto</span>
                            <span>+ Looke Kids</span>
                            <span>+ Play Kids</span>
                            <span>Instalação em até 48h</span>
                        </div>
                        <div className="buttons-wrapper">
                            <span>R$ 95,00</span>
                            <a href="https://cliquedf.contratoonline.tec.br/planos?plano=151" target="_blank" rel="noreferrer">Assine agora</a>
                        </div>
                    </div>

                    <div className="plan-element">
                        <b>500 MEGA</b>
                        <div className="benefits-wrapper">
                            <span>Download: 500Mbps</span>
                            <span>Upload: 250Mbps</span>
                            <span>+ ITTV Aberto</span>
                            <span>+ Max</span>
                            <span>+ Deezer</span>
                            <span>Instalação em até 48h</span>
                        </div>
                        <div className="buttons-wrapper">
                            <span>R$ 97,00</span>
                            <a href="https://cliquedf.contratoonline.tec.br/planos?plano=146" target="_blank" rel="noreferrer">Assine agora</a>
                        </div>
                    </div>

                    <div className="plan-element">
                        <b>700 MEGA</b>
                        <div className="benefits-wrapper">
                            <span>Download: 700Mbps</span>
                            <span>Upload: 350Mbps</span>
                            <span>+ ITTV Aberto</span>
                            <span>+ Max</span>
                            <span>+ Looke</span>
                            <span>Instalação em até 48h</span>
                        </div>
                        <div className="buttons-wrapper">
                            <span>R$ 115,00</span>
                            <a href="https://cliquedf.contratoonline.tec.br/planos?plano=147" target="_blank" rel="noreferrer">Assine agora</a>
                        </div>
                    </div>

                    <div className="plan-element">
                        <b>1000 MEGA</b>
                        <div className="benefits-wrapper">
                            <span>Download: 1000Mbps</span>
                            <span>Upload: 500Mbps</span>
                            <span>+ ITTV Aberto</span>
                            <span>+ Max</span>
                            <span>+ Deezer</span>
                            <span>Instalação em até 48h</span>
                        </div>
                        <div className="buttons-wrapper">
                            <span>R$ 147,00</span>
                            <a href="https://cliquedf.contratoonline.tec.br/planos?plano=148" target="_blank" rel="noreferrer">Assine agora</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans;