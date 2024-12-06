import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { Header } from "../../../components/Header";
import { ComuniItem } from "../../../components/ComuniItem";
import { useContext, useEffect, useState } from "react";
import { Comunicado } from "../../../types/Comunicado";
import { getComunicados } from "../../../services/api";
import { AuthContext } from "../../../contexts/authContext";

export default function screen(){

    const user = useContext(AuthContext)
    const [comunicados, setComunicados] = useState<Comunicado[]>()

    const getData = async () => {
        const comunicadoData = await getComunicados(user.authData?.Token as string)
        setComunicados(comunicadoData)
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <SafeAreaView className="mt-6">
            <ScrollView className="h-[650px]">
                <View className="px-8 gap-5 pb-5">
                    {comunicados?.map((item) => (
                        <ComuniItem key={item.idComunicado} data={item}/>
                    ))}
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}