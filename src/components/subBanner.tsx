import caioTestimonialImg from "../img/caio-testimonial.svg";
import wifiIcon from "../img/wifi-icon.svg";
import socialIcon from "../img/social-icon.svg";
import supportIcon from "../img/support-icon.svg";

import "../style/subBanner.css";

const SubBanner = () => {
    return (
        <div className="sub-banner-container">
            <div className="testimonial-wrapper">
                <img src={caioTestimonialImg} alt="" />
            </div>
            <div className="infomercial-wrapper">
                <span className="title">Quantas vezes a conexão travou e atrapalhou seu dia?</span>

                <div className="aligner vertical main">
                    <div className="aligner horizontal">
                        <img src={wifiIcon} alt="" className="icon" />
                        <div className="aligner vertical">
                            <b>Navegue sem travar!</b>
                            <span>A fibra ótica da CliqueDF entrega uma performance de alta qualidade<br />para você fazer tudo sem interrupções.</span>
                        </div>
                    </div>
                    <div className="aligner horizontal">
                        <img src={socialIcon} alt="" className="icon" />
                        <div className="aligner vertical">
                            <b>Suas redes sempre no turbo</b>
                            <span>Equipamentos modernos e tecnologia de ponta para garantir<br />que a sua rede esteja sempre com ótimo desempenho.</span>
                        </div>
                    </div>
                    <div className="aligner horizontal">
                        <img src={supportIcon} alt="" className="icon" />
                        <div className="aligner vertical">
                            <b>Suporte ágil</b>
                            <span>Nossa equipe está pronta para resolver qualquer problema rapidamente,<br />garantindo a melhor experiência para você, sempre.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubBanner;