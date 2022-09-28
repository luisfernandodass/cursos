import { NegociacoesDoDia } from "../interface/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    
    public obterNegociacoes(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
        .then(res => res.json())
        .then((dados: any[]) => {
            return dados.map((dado: NegociacoesDoDia) => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            })
        })
    }
}