import { Text, View } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome5'
import { useContext } from "react"
import { AuthContext } from "../contexts/authContext"

export const Header = () => {

    const auth = useContext(AuthContext)

    return(
        <View className="w-full bg-[#f9f9f9] gap-3 py-5 px-8 border-b border-stone-500 mb-5">
            <View className="flex-row justify-between">
                <View className="flex-row gap-2">
                    <Text className="text-xl">MedioTec</Text>
                    <FontAwesome name="graduation-cap" size={25}/>
                </View>

                <LinearGradient
                    colors={['#DBE0E7', '#F8FBFF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="p-3"
                    style={{ borderRadius: 10 }}
                >
                    <FontAwesome6 name="bell" size={18}/>
                </LinearGradient>
            </View>

            <Text>3 ANO A</Text>
        </View>
    )
}