import { Turma } from "./Turma"

export type User = {
    codigo: number,
    cpfUser: string,
    imailUser: string,
    tipoUser: 'ALUNO' | 'PROFESSOR' | 'CORDENADOR',
    contatopessoal: string,
    nomecontatoumergencia: string,
    numerourgencia: string,
    nomeCompletoUser: string,
    dataNascimentoUser: string,
    generoUser: 'Masculino' | 'Feminino',
    turma: Turma
}