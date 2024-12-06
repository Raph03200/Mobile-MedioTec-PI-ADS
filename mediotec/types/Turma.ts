import { Curso } from "./Curso"

export type Turma = {
    idturma: number,
    nomeTurma: string,
    datalhesTurma: string,
    periodo: '1' | '2' |'3',
    anno: string,
    turno: string,
    curso: Curso
}