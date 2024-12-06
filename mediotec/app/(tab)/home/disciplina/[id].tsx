import { ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/authContext";
import { Disciplina } from "../../../../types/Disciplina";
import { useLocalSearchParams } from "expo-router";
import { getAvaliacoes, getDisciplinaById } from "../../../../services/api";
import { DisciplinaText } from "../../../../components/DisciplinaText";
import { Avaliacao } from "../../../../types/Avaliacao";
import { formatteConceito } from "../../../../utils/formatters";

export default function screen(){

    const {id} = useLocalSearchParams()

    const [disciplina, setDisciplina] = useState<Disciplina>()
    const [avaliacao, setAvaliacao] = useState<Avaliacao[] | null>()
    const user = useContext(AuthContext)

    const getData = async () => {
        const data = await getDisciplinaById(Number(user.authData?.IdUser), Number(id))
        const avaliacao = await getAvaliacoes(user.authData?.Token as string, Number(user.authData?.IdUser as number), Number(id))
        setAvaliacao(avaliacao)
        setDisciplina(data)
        console.log(avaliacao)
    }

    const getAvaliacao = (unidade: string) => {
        const conceitoUnidade = avaliacao?.filter((item) => item.unidade === unidade)
        if(conceitoUnidade && conceitoUnidade[0] && conceitoUnidade[0].conceito){
            return conceitoUnidade[0].conceito.notaConceito
        } else{
            return '--'
        }
    }

    const getMedia = () => {
        const nota1 = getAvaliacao("1")
        const nota2 = getAvaliacao("2")
        if(nota1 !== '--' && nota2 !== '--'){
            return (nota1 as number + nota2 as number) / 2
        } else {
            return "--"
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <SafeAreaView className="mt-6">
            <ScrollView className="h-[700px] px-8">
                <View className="bg-white  w-full ">
                    <ImageBackground 
                        source={require("../../../../assets/disciplina.png")}
                        className="h-[200px] w-full"
                        resizeMode="cover"
                    />

                    <View className="px-4">
                        <Text className="text-2xl my-4 text-center">{disciplina?.nomeDaDisciplina}</Text>

                        <View>
                            <View className="flex-row items-center gap-2">
                                <Text>•</Text>
                                <Text>Professor: {disciplina?.nomeProfessor}</Text>
                            </View>
                            <View className="flex-row items-center gap-2">
                                <Text>•</Text>
                                <Text>Carga Horária: {disciplina?.cargaHoraria}</Text>
                            </View>
                            <View className="flex-row items-center gap-2">
                                <Text>•</Text>
                                <Text>Horário das aulas: Segunda e Quarta, 08h - 12h</Text>
                            </View>
                        </View>

                        <View className="bg-[#EDEDED] border border-black rounded-md mt-4">
                            <Text className="text-center my-4">Conceito</Text>
                            <View className="mx-auto flex-row">
                                <View className="items-center">
                                    <Text className="bg-[#676767] text-white p-3 w-[80px] text-center">Nota 1</Text>
                                    <Text className="bg-[#D0D0D0] p-3 text-center w-[80px] text-sm">
                                        {
                                            <>
                                                {formatteConceito(getAvaliacao("1") as number)}
                                            </>
                                        }
                                    </Text>
                                </View>
                                <View>
                                    <Text className="bg-[#676767] text-white p-3 w-[80px] text-center">Nota 2</Text>
                                    <Text className="bg-[#D0D0D0] p-3 text-center w-[80px] text-sm">
                                        {
                                            <>
                                                {formatteConceito(getAvaliacao("2") as number)}
                                            </>
                                        }
                                    </Text>
                                </View>
                                <View>
                                    <Text className="bg-[#676767] text-white p-3 w-[80px] text-center">Média</Text>
                                    <Text className="bg-[#D0D0D0] p-3 text-center w-[80px] text-sm">
                                        {
                                            <>
                                                {formatteConceito(getMedia() as number)}
                                            </>
                                        }
                                    </Text>
                                </View>
                            </View>

                            <Text className="text-center mt-4 mb-2">Situação</Text>
                            
                                {getMedia() as number < 7 &&
                                    <Text className="mx-auto rounded-md text-red-500 text-center mb-4 bg-[#D0D0D0] p-3 w-[100px]">
                                        Reprovado
                                    </Text>
                                }
                                {getMedia() as number >= 7 &&
                                    <Text className="mx-auto rounded-md text-green-500 text-center mb-4 bg-[#D0D0D0] p-3 w-[100px]">
                                        Aprovado
                                    </Text>
                                }
                                {getMedia() === '--' &&
                                    <Text className="mx-auto rounded-md text-center mb-4 bg-[#D0D0D0] p-3 w-[100px]">
                                        Pendente
                                    </Text>
                                }
                            
                        </View>
                    </View>
                </View>

                

                <DisciplinaText />

            </ScrollView>
        </SafeAreaView>
    )
}