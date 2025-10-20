import React, { useEffect, useState } from "react";

import { loadPlansData, IPlan } from "../controllers/loadPlansData.controller"

import "../style/plans.css";

const Plans = () => {
    const [plans, setPlans] = useState<IPlan[] | null>(null);

    const fetchPlansData = async () => {
        const data = await loadPlansData();
        setPlans(data.plano);
    };

    useEffect(() => {
        fetchPlansData();
    }, []);

    return (
        <div className="plans-container" id="plans">
            <div className="header-wrapper">
                <b>Escolha o plano ideal para você!</b>
                <span>Nossa internet fibra oferece velocidade e estabilidade máxima, feita sob medida para você!</span>
            </div>
            <div className="plans-wrapper">
                <b className="title">Internet</b>
                <div className="plans-row">

                    {plans && plans.map((plan: IPlan) => (
                        plan.extra === "Apenas internet" ?
                            <div className="plan-element" id={`plan-${plan.id_plano}`}>
                                <b>{plan.nome}</b>
                                <div className="benefits-wrapper">
                                    <span>Download: {plan.download}</span>
                                    <span>Upload: {plan.upload}</span>
                                    <span>Instalação {plan.descricaoSla}</span>
                                </div>
                                <div className="buttons-wrapper">
                                    <span>R$ {plan.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                                    <a href={`https://cliquedf.contratoonline.tec.br/planos?plano=${plan.id_plano}`} target="_blank" rel="noreferrer">Assine agora</a>
                                </div>
                            </div>
                        : null
                    ))}
                </div>  

                <b className="title">Internet + TV  </b>
                <div className="plans-row">

                    {plans && plans.map((plan: IPlan) => (
                        plan.extra !== "Apenas internet" ?
                            <div className="plan-element" id={`plan-${plan.id_plano}`}>
                                <b>{plan.nome}</b>
                                <div className="benefits-wrapper">
                                    <span>Download: {plan.download}</span>
                                    <span>Upload: {plan.upload}</span>
                                    { plan.extra.split("+").map((benefit) => (
                                        <span>+ {benefit}</span>
                                    )) }
                                    <span>Instalação {plan.descricaoSla}</span>
                                </div>
                                <div className="buttons-wrapper">
                                    <span>R$ {plan.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                                    <a href={`https://cliquedf.contratoonline.tec.br/planos?plano=${plan.id_plano}`} target="_blank" rel="noreferrer">Assine agora</a>
                                </div>
                            </div>
                        : null
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Plans;