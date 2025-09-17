import img100MB from "../img/100mega.svg";
import img300MB from "../img/300mega.svg";
import img500MB from "../img/500mega.svg";
import img800MB from "../img/800mega.svg";

import imgOpt1 from "../img/option_1.svg";
import imgOpt2 from "../img/option_2.svg";
import imgOpt3 from "../img/option_3.svg";

import "../style/plans.css";

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="header-wrapper">
                <b>ESCOLHA O PLANO IDEAL PRA VOCÊ!</b>
                <span>Nossa internet fibra oferece velocidade e estabilidade máxima, feita sob medida para você!</span>
            </div>
            <div className="plans-wrapper">
                <div className="plan-element">
                    <div className="top-wrapper">
                        <div className="plan-header">
                            <img src={img100MB} className="plan-icon" />
                            <b>100 MEGA</b>
                            <span>UPLOAD 50MB</span>
                        </div>
                        <div className="description">
                            <span>Consumo Ilimitado</span>
                            <span>Conexão PPPOE com IP Dinâmico</span>
                        </div>
                        <div className="benefits-header">
                            <span>+ Benefícios</span>
                            <img src={imgOpt1} className="benefits-img" />
                        </div>
                        <div className="benefits-list">
                            <span>+ Benefício 1</span>
                            <span>+ Benefício 2</span>
                        </div>
                    </div>
                    <div className="buttons-wrapper">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="green-button-link">R$89,90</a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="transparent-button-link">ASSINE AGORA</a>
                    </div>
                </div>

                <div className="plan-element">
                    <div className="top-wrapper">
                        <div className="plan-header">
                            <img src={img300MB} className="plan-icon" />
                            <b>300 MEGA</b>
                            <span>UPLOAD 150MB</span>
                        </div>
                        <div className="description">
                            <span>Consumo Ilimitado</span>
                            <span>Conexão PPPOE com IP Dinâmico</span>
                        </div>
                        <div className="benefits-header">
                            <span>+ Benefícios</span>
                            <img src={imgOpt2} className="benefits-img" />
                        </div>
                        <div className="benefits-list">
                            <span>+ Benefício 1</span>
                            <span>+ Benefício 2</span>
                            <span>+ Benefício 3</span>
                        </div>
                    </div>
                    <div className="buttons-wrapper">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="green-button-link">R$99,90</a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="transparent-button-link">ASSINE AGORA</a>
                    </div>
                </div>

                <div className="plan-element exclusive">
                    <b>OFERTA EXCLUSIVA</b>
                    <div className="top-wrapper">
                        <div className="plan-header">
                            <img src={img500MB} className="plan-icon" />
                            <b>500 MEGA</b>
                            <span>UPLOAD 250MB</span>
                        </div>
                        <div className="description">
                            <span>Consumo Ilimitado</span>
                            <span>Conexão PPPOE com IP Dinâmico</span>
                        </div>
                        <div className="benefits-header">
                            <span>+ Benefícios</span>
                            <img src={imgOpt3} className="benefits-img" />
                        </div>
                        <div className="benefits-list">
                            <span>+ Benefício 1</span>
                            <span>+ Benefício 2</span>
                            <span>+ Benefício 3</span>
                            <span>+ Benefício 4</span>
                        </div>
                    </div>
                    <div className="buttons-wrapper">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="green-button-link">R$119,90</a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="transparent-button-link">ASSINE AGORA</a>
                    </div>
                </div>

                <div className="plan-element">
                    <div className="top-wrapper">
                        <div className="plan-header">
                            <img src={img800MB} className="plan-icon" />
                            <b>800 MEGA</b>
                            <span>UPLOAD 400MB</span>
                        </div>
                        <div className="description">
                            <span>Consumo Ilimitado</span>
                            <span>Conexão PPPOE com IP Dinâmico</span>
                        </div>
                        <div className="benefits-header">
                            <span>+ Benefícios</span>
                            <img src={imgOpt3} className="benefits-img" />
                        </div>
                        <div className="benefits-list">
                            <span>+ Benefício 1</span>
                            <span>+ Benefício 2</span>
                            <span>+ Benefício 3</span>
                            <span>+ Benefício 4</span>
                            <span>+ Benefício 5</span>
                            <span>+ Benefício 6</span>
                        </div>
                    </div>
                    <div className="buttons-wrapper">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="green-button-link">R$149,90</a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="transparent-button-link">ASSINE AGORA</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans;