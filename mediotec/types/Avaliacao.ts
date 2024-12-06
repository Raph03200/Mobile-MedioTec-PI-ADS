import { Disciplina } from "./Disciplina";
import { User } from "./User";

export type Avaliacao = {
    idavalicacion: number;
    unidade: string;
    dataavalicion: string;
    conceito: {
        idConceito: number;
        nomeDoConceito: string;
        notaConceito: number;
    };
    aluno: User
    disciplina: Disciplina,
    ordemlancameneto: string
  };