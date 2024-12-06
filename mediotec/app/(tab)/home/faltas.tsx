import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { Header } from "../../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { Dropdown } from "react-native-element-dropdown";
import { useContext, useEffect, useMemo, useState } from "react";
import { Disciplina } from "../../../types/Disciplina";
import { AuthContext } from "../../../contexts/authContext";
import { getDisciplinas } from "../../../services/api";

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

export default function screen(){


    const disciplinasData = [
        {label: "Matemática", value: '1'},
        {label: "História", value: '2'},
        {label: "Português", value: '3'},
        {label: "Lógica", value: '4'},
        {label: "História", value: '5'},
        {label: "Comunicação", value: '6'},
    ]

    const ano = [
        {label: "2024", values: '1'},
        {label: "2023", values: "2"},
        {label: "2022", values: '3'}
    ]

    const [disciplinaValue, setDisciplinaValue] = useState<any>()
    const [anoInput, setAnoInput] = useState<any>()
    const [isFocus, setIsFocus] = useState(false);

    return(
        <SafeAreaView className="mt-6">
            <View className="px-8">
                <LinearGradient
                    colors={["#0047FF", "#0047FF1A"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 15, height: 90 }}
                    className="px-5 mb-5 relative flex-row overflow-hidden justify-between items-center"
                >
                    <View>
                        <Text className="text-white text-xl">
                            Faltas
                        </Text>
                    </View>

                    <View className="">
                        <FontAwesome6 name="user" size={70} color={"#fff"}/>
                    </View>

                </LinearGradient>

                <View className="flex-row w-full gap-2">
                    <View className="w-1/2 bg-white p-2 rounded-md">
                        <Dropdown
                            data={disciplinasData}
                            labelField="label"
                            value={disciplinaValue}
                            valueField='value'
                            maxHeight={300}
                            placeholder="Disciplinas"
                            onChange={item => {
                                setDisciplinaValue(item.value);
                                setIsFocus(false);
                            }}
                        />
                    </View>

                    <View className="w-1/2 bg-white p-2 rounded-md">
                        <Dropdown
                            data={ano}
                            labelField="label"
                            value={anoInput}
                            valueField='value'
                            maxHeight={300}
                            placeholder="Ano"
                            onChange={item => {
                                setAnoInput(item.value);
                                setIsFocus(false);
                            }}
                        />
                    </View>
                </View>

                <View className="flex-row justify-between mt-8">
                    <View>
                        <View className="border-2 border-black h-[120px] w-[150px] justify-center items-center rounded-md">
                            <Text className="text-4xl font-bold">25</Text>
                        </View>
                        <Text className="text-center text-2xl font-bold">Aulas</Text>
                    </View>
                    <View>
                        <View className="border-2 border-black h-[120px] w-[150px] justify-center items-center rounded-md">
                            <Text className="text-4xl font-bold">8</Text>
                        </View>
                        <Text className="text-center text-2xl font-bold">Faltas</Text>
                    </View>
                </View>

                <View className="mx-auto mt-6">
                    <Text className="text-center text-2xl font-bold mb-2">Faltas restantes</Text>
                    <View className="border-2 border-black h-[60px] w-[90px] justify-center items-center mx-auto rounded-md">
                        <Text className="text-4xl font-bold">8</Text>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}