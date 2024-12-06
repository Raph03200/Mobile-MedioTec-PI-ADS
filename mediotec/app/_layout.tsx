import { Stack } from "expo-router";
import "../global.css"
import { AuthProvider } from "../contexts/authContext";
import { ChatProvider } from "../contexts/chatContext";

export default function rootLayout() {
    return(
        <AuthProvider>
            <ChatProvider>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index"/>
                </Stack>
            </ChatProvider>
        </AuthProvider>
        
    )
}