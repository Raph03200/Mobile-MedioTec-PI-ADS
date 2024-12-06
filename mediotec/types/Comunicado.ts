export type Comunicado = {
    idComunicado: number,
    tipodocomunicado: "INFORMATIVO" | "EVENTO",
    tituloComunicado: string, 
    dataPublicacao: string,
    conteudoComunicado: string
}