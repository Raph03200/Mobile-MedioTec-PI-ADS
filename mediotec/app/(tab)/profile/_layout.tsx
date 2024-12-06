import { Stack } from "expo-router";

export default function CategoryLayout(){
    return(
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen name="opcoes" options={{ headerShown: false }}/>
        </Stack>
    )
}