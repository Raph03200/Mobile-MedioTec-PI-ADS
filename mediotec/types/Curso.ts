import { Disciplina } from "./Disciplina"

export type Curso = {
    idCurso: number,
    nomeCurso: string,
    detalhesCurso: string,
    disciplinas: Disciplina[]
}