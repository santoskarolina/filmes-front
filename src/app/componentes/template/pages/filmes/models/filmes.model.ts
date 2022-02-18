

export class FilmeModel {
    id?: any;
    titulo: string;
    linkFoto : string;
    dataLancamento : string;
    descricao : string;
    nota: string;
    linkIMDB: string;
    categoria: Categoria
    classificacao: Classificacao
}

export class Classificacao {
    id: string;
    nome: string;
}

export class Categoria {
    id: string;
    nome: string;
}
