import { Link, router } from "expo-router";
import { SafeAreaView, Text, StatusBar, View, TextInput, Pressable } from "react-native";
import { useForm, Controller, SubmitHandler  } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";

const schema = yup.object({
    email: yup.string().email('Email inválido').required('Informe seu nome'),
    password: yup.string().min(6, 'A senha deve ter no mínimo 6 digitos').required('Digite sua senha')
})

export default function screen() {

    type dataType = {
        email: string,
        password: string
    }

    const [loading, setLoading] = useState(false)
    const auth = useContext(AuthContext)

    useEffect(() => {
        if(auth.authData){
            router.replace('/home')
        }
    }, [auth])


    const { control, handleSubmit, formState: {errors} } = useForm<dataType>({
        resolver: yupResolver(schema)
    })

    const handleLogin: SubmitHandler<dataType> = async (data) => {
        setLoading(true)
        await auth.signIn(data.email, data.password)

        setLoading(false)
    }

    return(
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0}} className="">
            <View className="h-full justify-center items-center">
                <View className="w-3/4">
                    <Text className="text-2xl text-center mb-8 font-bold">Entre na sua conta</Text>
                    <Controller 
                        control={control}
                        name="email"
                        render={({ field: {onChange, onBlur, value} }) => (
                            <TextInput 
                                placeholder="Seu email"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                className="bg-white w-full p-2 rounded-xl"
                            />
                        )}
                    />
                    {errors.email && <Text className="text-red-500">{errors.email.message}</Text>}
                    <Controller 
                        control={control}
                        name="password"
                        render={({ field: {onChange, onBlur, value} }) => (
                            <TextInput 
                                placeholder="Sua senha"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                className="bg-white w-full p-2 rounded-xl mt-6"
                                secureTextEntry
                                
                            />
                        )}
                    />
                    {errors.password && <Text className="text-red-500">{errors.password.message}</Text>}

                    <Pressable className="bg-[#222] p-2 py-3 mt-6 rounded-xl" onPress={handleSubmit(handleLogin)}>
                        <Text className="text-white text-center font-bold">Entrar</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}