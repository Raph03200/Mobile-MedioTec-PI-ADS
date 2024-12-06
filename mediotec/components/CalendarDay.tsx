import { Text, View } from "react-native"
import { getMonthName } from "../utils/formatters"

type Props = {
    day: number,
    month: number
}

export const CalendarDay = ({ day, month }: Props) => {
    return(
        <View className="flex-row justify-around items-center">
            <View className="flex-row gap-6">
                <View className="bg-[#0047FF] w-[8px] h-[82px] rounded-xl"></View>
                <View>
                    <Text className="text-3xl text-[#0047FF] font-bold">{day}</Text>
                    <Text className="text-[#0047FF] font-bold">
                        {getMonthName(month)}
                    </Text>
                </View>
            </View>

            <View className="gap-4">
                <Text className="text-[#0047FF]">Aula</Text>
                <Text className="text-[#949191]">08:00 - 9:30</Text>
                <Text className="text-[#949191]">Geografia</Text>
            </View>
        </View>
    )
}