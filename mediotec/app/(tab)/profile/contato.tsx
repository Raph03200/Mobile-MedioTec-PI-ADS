import { useState } from "react";
import { Pressable, SafeAreaView, Text } from "react-native";
import { ChatArea } from "../../../components/chat/ChatArea";

export default function screen(){

    const [chatActive, setChatActive] = useState(false)

    const openChat = () => {
        setChatActive(true)
    }

    return(
        <>
            {!chatActive &&
                <SafeAreaView className="w-full h-full justify-center items-center">
                    <Text>Escolha uma opção:</Text>

                    <Pressable
                        onPress={openChat}
                        className="bg-[#666BFF] w-[250px] rounded-xl my-8"
                    >
                        <Text className="text-lg text-white text-center py-4">
                            Finanças/Questões Escolares 
                        </Text>
                    </Pressable>

                    <Pressable 
                        onPress={openChat}
                        className="bg-[#666BFF] w-[250px] rounded-xl"
                    >
                        <Text className="text-lg text-white text-center py-4">
                            Outros
                        </Text>
                    </Pressable>
                </SafeAreaView>
            }

            {chatActive &&
                <ChatArea />
            }
        </>
        
    )
}