

export interface FilmeModel {
    id?: any;
    titulo?: string;
    linkFoto? : string;
    dataLancamento? : string;
    descricao? : string;
    nota?: string;
    linkIMDB?: string;
    categoria?: {
        id: string;
        nome: string;
    };
    classificacao?: {
        id: string;
        nome: string;
    }
}