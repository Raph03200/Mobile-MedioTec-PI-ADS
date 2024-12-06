import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../../components/Header";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { DayState } from "react-native-calendars/src/types";
import { useState } from "react";
import { ptBR } from "../../../utils/localeCalendar";
//@ts-ignore
import { CalendarDay } from '../../../components/CalendarDay'

LocaleConfig.locales['pt-br'] = ptBR

LocaleConfig.defaultLocale = "pt-br"


export default function screen(){

    const [day, setDay] = useState<DateData>()

    return(
        <SafeAreaView>
            <View className="px-8">
                <Calendar 
                    theme={{
                        todayTextColor: "#fff",
                        selectedDayBackgroundColor: "#0047FF",
                        calendarBackground: "transparent"
                    }}
                    onDayPress={setDay}
                    markedDates={day && {
                        [day.dateString]: {selected: true}
                    }}
                    dayComponent={({ date, state }: {date: DateData, state: DayState}) => {
                        return(
                            <TouchableOpacity 
                                className="w-12 h-12 rounded-xl justify-center items-center"
                                onPress={() => setDay(date)}
                                style={{ opacity: state === 'disabled' ? .3 : 1, backgroundColor: date.dateString === day?.dateString ? '#0047FF' : '#fff'}}
                            >
                                <Text 
                                    className="font-bold"
                                    style={{ color:  date.dateString === day?.dateString ? '#fff' : '#000'}}
                                >{date.day}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />

                {day &&
                    <View className="mt-6 gap-4">
                        <CalendarDay day={day?.day as number} month={day?.month as number}/>
                        <CalendarDay day={day?.day as number} month={day?.month as number}/>
                        <CalendarDay day={day?.day as number} month={day?.month as number}/>
                    </View>
                }
                
            </View>
        </SafeAreaView>
    )
}