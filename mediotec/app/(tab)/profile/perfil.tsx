import { useContext, useEffect, useState } from "react";
import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";
import { AuthContext } from "../../../contexts/authContext";
import { getTurmas, getUser, getUsers } from "../../../services/api";
import { User } from "../../../types/User";

export default function screen() {

    const user = useContext(AuthContext)
    const [aluno, setAluno] = useState<User>()

    const getData = async () => {
        const data = await getUser(user.authData?.IdUser as number)
        setAluno(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0}} className="">
            <View className="mx-auto">
                <View className="rounded-full">
                    <Image 
                        source={require("../../../assets/aluno.jpg")}
                        className="h-[180px] w-[180px] rounded-full border border-black"
                    />
                </View>
                
                <Text className="text-center font-bold mt-4 text-2xl">{user.authData?.NomeUsuario}</Text>
            </View>


            <View className="px-8 mt-10">
                <View className="w-full bg-white gap-4 p-2">
                    <Text className="text-lg font-bold border-b border-black">
                        Matrícula: <Text className="text-[#0047FF]">493849</Text>
                    </Text>
                    <Text className="text-lg font-bold border-b border-black">
                        CPF: <Text className="text-[#0047FF]">123.456.789-01</Text>
                    </Text>
                    <Text className="text-lg font-bold border-b border-black">
                        Turma: <Text className="text-[#0047FF]">{aluno?.turma.nomeTurma}</Text>
                    </Text>
                    <Text className="text-lg font-bold border-b border-black">
                        Gênero: <Text className="text-[#0047FF]">{aluno?.generoUser}</Text>
                    </Text>
                    <Text className="text-lg font-bold border-b border-black">
                        Data de Nascimento: <Text className="text-[#0047FF]">{aluno?.dataNascimentoUser}</Text>
                    </Text>
                    <Text className="text-lg font-bold border-b border-black">
                        Nome do responsável: <Text className="text-[#0047FF]">Rodrigo Marques</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}