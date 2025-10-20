import axios from "axios";

export interface IPlan {
    cor_background: string;
    descricaoSla: string;
    download: string;
    empresa: number;
    extra: string;
    id: number;
    id_plano: number;
    nome: string;
    regiao: number;
    serv_ad: any[];
    status: boolean;
    tipo_pessoa: string;
    upload: string;
    valor: number;
    valorInstalacao: number;
    valor_anterior: number;
}

export async function loadPlansData() {
    try {
        const response = await axios.post(
            "https://painel.spectra.tec.br/api/",
            {
                "route": "get_plano",
                "token": "8fc37321-d244-4867-9f6a-4e0029c3453c",
                "data": {
                    "regiao": "padrao"
                }
            },
            { 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "8fc37321-d244-4867-9f6a-4e0029c3453c"
                }
            }
        );
    
        return response.data;
    } catch (error) {
        console.error("Error loading plans data:", error);
    }
}