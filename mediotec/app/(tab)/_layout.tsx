import { Stack, Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import "../../global.css"

export default function tabsLayout() {
    return(
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#0047FF' }}>
            <Tabs.Screen 
                name="home"
                options={{ title: "Início" ,tabBarIcon: ({ color }) => <FontAwesome size={24} name="graduation-cap" color={color}/>}}
            />
            <Tabs.Screen 
                name="profile"
                options={{ title: "Perfil" ,tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color}/> }}
            />
        </Tabs>
    )
}