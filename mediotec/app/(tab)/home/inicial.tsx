import { SafeAreaView, Text, StatusBar, View, ScrollView } from "react-native";
import { Header } from "../../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { GridItem } from "../../../components/GridItem";
import { router } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";

export default function screen() {

    let homeList = [
        {icon: 'graduation-cap', title: 'Disciplinas', onPress: () => router.push('/home/disciplinas')},
        {icon: 'id-card-clip', title: 'Turma', onPress: () => router.push('/home/turma')},
        {icon: 'calendar-days', title: 'Calendário', onPress: () => router.push('/home/calendario')},
        {icon: 'bullhorn', title: 'Comunicados', onPress: () => router.push('/home/comunicados')},
        {icon: "user-xmark", title: "Faltas", onPress: () => router.push('home/faltas')},
        {icon: "sack-dollar", title: "Finanças", onPress: () => router.push('home/finanças')}
    ]

    const user = useContext(AuthContext)

    return(
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0}}>
            <Header />
            
            <View className=" w-full px-8">
                <View className="gap-5">
                    <LinearGradient
                        colors={["#0047FF", "#0047FF1A"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ borderRadius: 15, height: 100 }}
                        className="px-5 py-2 relative overflow-hidden"
                    >
                        <View>
                            <Text className="text-white text-xl">{user.authData?.NomeUsuario}</Text>
                            <Text className="text-[#EBEBF599]">19 anos</Text>
                        </View>

                        <View className="absolute -right-3 -bottom-2">
                            <FontAwesome6 name="user-large" color={'#fff'} size={70}/>
                        </View>

                    </LinearGradient>

                    <View className="bg-gray-400 h-4 rounded-full w-full"></View>

                    <ScrollView className="h-[460px] pb-10">
                        <View className="flex flex-row gap-4 flex-wrap items-center justify-center">
                            {homeList.map((item) => (
                                <GridItem key={item.title} icon={item.icon} title={item.title} onPress={item.onPress}/>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}