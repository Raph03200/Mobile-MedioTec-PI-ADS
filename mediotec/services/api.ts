import { Avaliacao } from "../types/Avaliacao"
import { Disciplina } from "../types/Disciplina"
import { Turma } from "../types/Turma"
import { User } from "../types/User"

const baseURL = 'https://agendasenacapi-production.up.railway.app'

export const getDisciplinas = async (idAluno: number): Promise<Disciplina[]> => {
    const response = await fetch(`${baseURL}/user/${idAluno}`)

    const aluno: User = await response.json()

    return aluno.turma.curso.disciplinas;
}

export const getDisciplinaById = async (idAluno: number, idDisciplina: number): Promise<Disciplina> => {
    const disciplinas = await getDisciplinas(idAluno)
    const disciplina = disciplinas.filter((item) => item.idDisciplina === idDisciplina)
    return disciplina[0]

}

export const getTurmas = async (idAluno: number): Promise<Turma> => {
    const response = await fetch(`${baseURL}/user/${idAluno}`)

    const aluno: User = await response.json()

    return aluno.turma
}

export const getUsers = async (): Promise<User[]> => {
    const response = await fetch(`${baseURL}/user`)
    const alunos: User[] = await response.json()
    return alunos
}

export const getUser = async (id: number): Promise<User> => {
    const response = await fetch(`${baseURL}/user/${id}`)
    const aluno = await response.json()
    return aluno
}

export const getComunicados = async (token: string) => {
    try{
        const response = await fetch(`${baseURL}/comunicados`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
    
        if (!response.ok) {
            console.log(`Erro na resposta da API: ${response.status} ${response.statusText}`);
            return null;
        }
        
        const comunicados = await response.json()
        return comunicados
    }catch(error){
        console.log('deu erro bro', error)
    }
    
}

export const getAvaliacoes = async (token: string, idAluno: number, idDisciplina: number) => {
    try {
        const response = await fetch(`${baseURL}/avaliacions/todas/${idAluno}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        if (!response.ok) {
          console.log(`Erro na resposta da API: ${response.status} ${response.statusText}`);
          return null;
        }
    
        const result = await response.json();
        console.log("Dados brutos da API:", result); // Verifica o formato da resposta da API
    
        // Certifique-se de acessar a propriedade correta:
        const data = result.data;
        if (!Array.isArray(data)) {
          console.error("Formato inesperado dos dados:", data);
          return null;
        }
    
        // Filtra as avaliações pela disciplina
        const avaliacao = data.filter((item) => item.disciplina.idDisciplina === idDisciplina);
        console.log("Avaliações filtradas:", avaliacao);
    
        return avaliacao;
      } catch (error) {
        console.error("Erro ao buscar avaliações:", error);
        return null;
      }
}