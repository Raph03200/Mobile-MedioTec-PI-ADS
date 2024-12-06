import { Link, router } from "expo-router";
import { useContext } from "react";
import { SafeAreaView, Text, StatusBar, View, ImageBackground, Image, Pressable } from "react-native";
import { AuthContext } from "../../../contexts/authContext";
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function screen() {

    const user = useContext(AuthContext)

    return(
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0}} className="">

            <Text className="text-center my-6 text-2xl font-bold">Opções</Text>

            <View className="mx-auto">
                <View className="rounded-full">
                    <Image 
                        source={require("../../../assets/aluno.jpg")}
                        className="h-[180px] w-[180px] rounded-full border border-black"
                    />
                </View>
                
                <Text className="text-center font-bold mt-4 text-2xl">{user.authData?.NomeUsuario}</Text>
            </View>

            <View className="px-8">
                <Text>Outros</Text>

                <View className="gap-8">
                    <View className="gap-3 bg-[#2427600D] p-5 rounded-md">
                        <Pressable className="flex-row items-center gap-4" onPress={() => router.push('profile/perfil')}>
                            <AntDesign name="user" size={20}/>
                            <Text className="font-bold text-lg">Editar Perfil</Text>
                        </Pressable>
                        <View className="flex-row items-center gap-4">
                        <AntDesign name="bells" size={20}/>
                            <Text className="font-bold text-lg">Notificações</Text>
                        </View>
                        <Pressable className="flex-row items-center gap-4" onPress={() => router.push('profile/contato')}>
                        <AntDesign name="questioncircleo" size={20}/>
                            <Text className="font-bold text-lg">Contato e Suporte</Text>
                        </Pressable>
                        <View className="flex-row items-center gap-4">
                            <AntDesign name="infocirlceo" size={20}/>
                            <Text className="font-bold text-lg">Termos e Políticas</Text>
                        </View>
                    </View>


                    <View className="gap-2 bg-[#2427600D] p-5 rounded-md">
                        <View className="flex-row items-center gap-4">
                            <EvilIcons name="gear" size={20}/>
                            <Text className="font-bold text-lg">Configurações</Text>
                        </View>
                        <View className="flex-row items-center gap-4">
                            <AntDesign name="flag" size={20}/>
                            <Text className="font-bold text-lg">Reporte um problema</Text>
                        </View>
                        <Pressable className="flex-row items-center gap-4" onPress={() => user.signOut()}>
                            <Ionicons name="exit-outline" size={20}/>
                            <Text className="font-bold text-lg text-red-500">Sair</Text>
                        </Pressable>
                    </View>

                    <Text className="text-center">
                        Versão 0.0.02
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}