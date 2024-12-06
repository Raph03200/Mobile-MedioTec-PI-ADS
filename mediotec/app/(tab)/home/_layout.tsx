import { Stack } from "expo-router";

export default function CategoryLayout(){
    return(
        <Stack screenOptions={{ headerShown: true, contentStyle: { backgroundColor: "#EFF1F5" } }}>
            <Stack.Screen name="inicial" options={{ headerShown: false }}/>
            <Stack.Screen name="disciplinas" />
        </Stack>
    )
}